
import { Component, DOCUMENT, Inject, Renderer2, signal } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Popover } from 'primeng/popover';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonPrimeModule } from '../../../modules/common-prime/common-prime-module';
import { UserService } from '../user.service';
import { AdnewUser } from '../adnew-user/adnew-user';
@Component({
  selector: 'app-usermanagement-summary',
  imports: [CommonPrimeModule,ConfirmDialogModule],
  templateUrl: './usermanagement-summary.html',
  styleUrl: './usermanagement-summary.scss',
  providers: [ConfirmationService,MessageService,DialogService]

})
export class UsermanagementSummary {
   products = signal([]);
  addNew: boolean = false;
  categoryName = ''
  parentCategory = ''
  sortOrder = ''
  description = ''
  DynamicDialogRef: DynamicDialogRef | null = null
  usersCount = signal<any>(null);


  constructor(public userService: UserService,private confirmationService: ConfirmationService,private messageService: MessageService,  private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document, public dialogService: DialogService){
  }

  ngOnInit(){
    this.getCount()
    this.getSummary();
  }

  getSummary(){
    let request = {
      "role": "All",
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
    this.userService.getUserSummary(request).subscribe({
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
    this.userService.createUser(request).subscribe({
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

onViewEdit(data: any, action: string, event?: Event) {

  if (action === 'view') {
    this.view(data.userId);
  }

  if (action === 'edit') {
    this.edit(data.userId);
  }

  if (action === 'delete') {
    this.confirmDelete(event!, data.userId);
  }
}

edit(id: any) {

  let request = {
    userId: id
  };

  this.userService.view(request).subscribe({
    next: (res: any) => {

      let data =
        res.responseMessage.message?.userDetails || {};

      this.openCategoryDialog('edit', data);
    }
  });
}
view(id: any){
 let request = {
    userId: id
  }
  this.userService.view(request).subscribe({
    next: (res: any) => {
      let data: any 
      data = res.responseMessage.message?.userDetails || '';
      this.openCategoryDialog("view",data)
    }
  })
}

  getCount(): void {
    this.userService.getDashboardCount().subscribe({
      next: (res: any) => {
         this.usersCount.set(res.responseMessage.message?.usersCount ? res.responseMessage.message?.usersCount : null)
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
    this.userService.getUsers(request).subscribe({
      next: (res: any) => {
        this.categories = res.responseMessage.message?.categoryList || []
      }
    })
  }


  openCategoryDialog(screenType: string, data: any) {

  this.DynamicDialogRef = this.dialogService.open(AdnewUser, {
    header:
      screenType === 'view'
        ? 'View User'
        : screenType === 'edit'
        ? 'Edit User'
        : 'Add User',

    width: '1000px',
    modal: true,
    closable: true,

    data: {
      screenType: screenType,
      resData: data,
    }
  });

  this.DynamicDialogRef?.onClose.subscribe((data) => {
    if (data?.saved) {
      console.log('User dialog closed after saving!', data);

      // Reload summary after add/edit
      this.getSummary();
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

 confirmDelete(event: Event, userId: any) {

  this.confirmationService.confirm({
    target: event.target as HTMLElement,

    message:
      'Are you sure you want to delete this user?',

    icon: 'pi pi-exclamation-triangle',

    rejectButtonProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true
    },

    acceptButtonProps: {
      label: 'Delete',
      severity: 'danger'
    },

    accept: () => {
      this.deleteUser(userId);
    }
  });
}

deleteUser(userId: any) {

  let request = {
    userId: userId
  };

  this.userService.deleteUser(request).subscribe({
    next: (res: any) => {

     this.messageService.add({
  severity: 'error',
  summary: 'Deleted',
  detail: 'User deleted successfully!',
  life: 3000
});

      // Refresh table
      this.getSummary();
    }
  });
}
}



