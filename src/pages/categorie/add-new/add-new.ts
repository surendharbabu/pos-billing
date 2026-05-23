import { Component, signal } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonPrimeModule } from '../../../modules/common-prime/common-prime-module';
import { Common } from '../../../service/common';

@Component({
  selector: 'app-add-new',
  imports: [CommonPrimeModule ],
  templateUrl: './add-new.html',
  styleUrl: './add-new.scss',
  providers: [MessageService]
})
export class AddNew {
    categoryName = ''
  parentCategory = ''
  sortOrder = ''
  description = ''
   categories = [];
   categorieData: any
     selectedCategoryId = signal<string | null>(null);
     categoryForm: any=FormGroup;

  constructor(public commonService: Common,private messageService: MessageService,public DynamicDialogRef: DynamicDialogRef,
    public DynamicDialogConfig: DynamicDialogConfig, public fb: FormBuilder
  ){


     this.categoryForm = this.fb.group({
      categoryName: ['', [Validators.required]],
      parentId: [null],          
      sortOrder: ['', [Validators.required]],
      description: ['', [Validators.required]]  
    });
  }

  ngOnInit() {
    this.getCategory();
    if (this.DynamicDialogConfig.data) {
      if (this.DynamicDialogConfig.data.screenType == 'view') {
        this.categorieData = this.DynamicDialogConfig.data.resData || [];
        this.categoryForm.patchValue({
          categoryName: this.categorieData?.categoryName ? this.categorieData?.categoryName : '',
          parentId: this.categorieData?.parentId ? this.categorieData?.parentId : '',
          sortOrder: this.categorieData?.displayOrder ? this.categorieData?.displayOrder : '',
          description: this.categorieData?.description ? this.categorieData?.description : ''
        })
        this.categoryForm.disable()
      }
    }
  }

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

  closePopup(){
    this.DynamicDialogRef.close();

  }

  confirmSave(data: any) {

    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      return;
    }

    let request = {
      "categoryName": this.categoryForm.value.categoryName ? this.categoryForm.value.categoryName : '',
      "parentId": this.categoryForm.value.parentId ? this.categoryForm.value.parentId : null,
      "description": this.categoryForm.value.description ? this.categoryForm.value.description : '',
      "displayOrder": this.categoryForm.value.sortOrder ? this.categoryForm.value.sortOrder : ''
    }
    this.commonService.createCategory(request).subscribe({
      next: (res: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Category saved successfully!',
          life: 500000
        });
        // this.dialogRef.close({ saved: true, data: outputPayload });
        this.DynamicDialogRef.close();
      }
    })
  }
}


