
import { Component, DOCUMENT, Inject, Renderer2, signal } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { AddNew } from '../add-new/add-new';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Popover } from 'primeng/popover';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonPrimeModule } from '../../../modules/common-prime/common-prime-module';
import { Common } from '../../../service/common';

@Component({
  selector: 'app-categorie-summary',
  imports: [CommonPrimeModule],
  templateUrl: './categorie-summary.html',
  styleUrl: './categorie-summary.scss',
  providers: [ConfirmationService,MessageService,DialogService]
})
export class CategorieSummary {
   products = signal([]);
  addNew: boolean = false;
  categoryName = ''
  parentCategory = ''
  sortOrder = ''
  description = ''
  dashboardCount = signal<any>(null);
  DynamicDialogRef: DynamicDialogRef | null = null

  constructor(public commonService: Common,private confirmationService: ConfirmationService,private messageService: MessageService,  private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document, public dialogService: DialogService){
  }

  ngOnInit(){
    this.getCount()
    this.getSummary();
  }

  getSummary(){
    let request = {
      "status": "All",
      "searchText": "",
      "pagingAndFilterRequest": {
        "pageNumber": 0,
        "pageSize": 10,
        "sortBy": "",
        "sortingOrder": ""
      }
    }
    this.isLoading.set(true);
    this.commonService.getCategorySummary(request).subscribe({
      next: (res: any) => {
        this.isLoading.set(false);
        this.products.set(res.responseMessage?.message?.summaryList || [])
      }
    })
  }

  addNewUser(){

  }
  isLoading = signal(true) ;
  layout: 'list' | 'grid' = 'grid';
  skeletonRows = Array(5).fill({});

  // 1. Define layout selection configurations for the switcher button
  layoutOptions = [
    { value: 'list', icon: 'pi pi-bars' },
    { value: 'grid', icon: 'pi pi-th-large' }
  ];



   isModalOpen: boolean = false; 
  selectedItem: any = null;

  openPopup() {
    // this.selectedItem = item;
    this.isModalOpen = true; // Opens popup overlay
    this.getCategory();
  }

  closePopup() {
    this.isModalOpen = false; // Closes popup overlay

  }

  saveCategory(){
    let request = {
      "categoryName": this.categoryName,
            "parentId": null,
            "description": this.description,
            "displayOrder": this.sortOrder
    }
    this.commonService.createCategory(request).subscribe({
      next: (res: any) => {
        this.isModalOpen = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Category saved successfully!',
          life: 500000 // Automatically dismisses toast notification after 3 seconds
        }); 
        this.triggerFlash('green')
      }
    })


  }

    confirmSave(event: Event) {
    this.confirmationService.confirm({
      target: event.target as HTMLElement,
      message: 'Are you sure you want to save this category details?',
      icon: 'pi pi-exclamation-circle',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true
      },
      acceptButtonProps: {
        label: 'Confirm Save',
        severity: 'success'
      },
      accept: () => {
        this.saveCategory();
      }
    });
  }


triggerFlash(color: 'green' | 'red'): void {
    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'app-flashlight-overlay');
    this.renderer.addClass(div, color === 'green' ? 'flash-green-light' : 'flash-red-light');
    this.renderer.appendChild(this.document.body, div);
    setTimeout(() => {
      this.renderer.removeChild(this.document.body, div);
    }, 1000);
  }


   menuOptions: any[] = [
    { label: 'Trigger Green Flash', type: 'success' },
    { label: 'Trigger Red Flash', type: 'error' },
    { label: 'Reset Status Panel', type: 'normal' }
  ];
  selectedOption: any | null = null;


  onSelectOption(event: any, popover: Popover){
    popover.hide()
  }

onViewEdit(data: any, action: string){
  this.view(data.categoryId)

}

view(id: any){
 let request = {
categoryId: id
  }
  this.commonService.view(request).subscribe({
    next: (res: any) => {
      let data: any 
      data = res.responseMessage.message?.categoryDetails || '';
      this.openCategoryDialog("view",data)
    }
  })
}

  getCount(): void {
    this.commonService.getDashboardCount().subscribe({
      next: (res: any) => {
         this.dashboardCount.set(res.responseMessage.message?.dashboardCount ? res.responseMessage.message?.dashboardCount : null)
      }
    })
  }


 categories = [
    // { name: 'Electronics', id: 'CAT001' },
    // { name: 'Clothing', id: 'CAT002' }
  ];
  selectedCategoryId = signal<string | null>(null);


  getCategory(){
    let request = {
      searchText: null
    }
    this.commonService.getCategory(request).subscribe({
      next: (res: any) => {
        this.categories = res.responseMessage.message?.categoryList || []
      }
    })
  }


   openCategoryDialog(screenType: string, data: any) {
    this.DynamicDialogRef = this.dialogService.open(AddNew, {
      header: 'Add Categorie',
      width: '500px',
      modal: true,
      closable: true,
      data: {
        screenType: screenType,
        resData: data,
      }
    });
    this.DynamicDialogRef?.onClose.subscribe((data) => {
      if (data?.saved) {
        console.log('Category dialog closed after saving!', data);
      }
    });
  }

   triggerCsvExport(tableRef: Table): void {
    if (!tableRef) return;

    // 1. Store a shallow copy of active filters to prevent state loss
    const currentFilters = tableRef.filters; 

    try {
      // 2. Temporarily strip menu constraints out of the internal metadata map
      // This prevents PrimeNG's underlying engine from encountering nested arrays
      tableRef.filters = {}; 

      // 3. Force-trigger the built-in CSV print generation mechanism safely
      tableRef.exportCSV();
    } catch (error) {
      console.error('CSV Export Error Intercepted:', error);
    } finally {
      // 4. Instantly restore original search/filter states back onto the UI layout
      tableRef.filters = currentFilters;
    }
  }
  
}



