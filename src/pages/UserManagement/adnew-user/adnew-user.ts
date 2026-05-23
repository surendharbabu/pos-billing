import { Component, signal } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonPrimeModule } from '../../../modules/common-prime/common-prime-module';
import { Common } from '../../../service/common';
import { PasswordModule } from 'primeng/password';
import { UserService } from '../user.service';
@Component({
  selector: 'app-adnew-user',
  imports: [CommonPrimeModule],
  templateUrl: './adnew-user.html',
  styleUrl: './adnew-user.scss',
    providers: [MessageService]

})
export class AdnewUser {
    categoryName = ''
  parentCategory = ''
  sortOrder = ''
  description = ''
   userRoles = [];
   categorieData: any
     selectedCategoryId = signal<string | null>(null);
     userForm: any=FormGroup;

  constructor(public commonService: Common,private messageService: MessageService,public DynamicDialogRef: DynamicDialogRef,public userService: UserService,
    public DynamicDialogConfig: DynamicDialogConfig, public fb: FormBuilder
  ){


     this.userForm = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
  mobileNo: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]
    ],
      email: ['', [Validators.required,Validators.email]],
       password: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ],

    confirmPassword: [
      '',
      Validators.required
    ],     
      role: ['', [Validators.required]],
  
    } ,{
    validators: this.passwordMatchValidator
  });
  }

  ngOnInit() {
    this.getRoles();
    if (this.DynamicDialogConfig.data) {
      if (this.DynamicDialogConfig.data.screenType == 'view') {
        this.categorieData = this.DynamicDialogConfig.data.resData || [];
        this.userForm.patchValue({
          categoryName: this.categorieData?.categoryName ? this.categorieData?.categoryName : '',
          parentId: this.categorieData?.parentId ? this.categorieData?.parentId : '',
          sortOrder: this.categorieData?.displayOrder ? this.categorieData?.displayOrder : '',
          description: this.categorieData?.description ? this.categorieData?.description : ''
        })
        this.userForm.disable()
      }
    }
  }
  passwordMatchValidator(form: AbstractControl) {

  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;

  return password === confirmPassword
    ? null
    : { passwordMismatch: true };
}

    getRoles(){
    let request = {
      searchText: null,
      lookUpType: "POSROLE"
    }
    this.userService.getLookup(request).subscribe({
      next: (res: any) => {
        this.userRoles = res.responseMessage.message?.lookUpList || []
      }
    })
  }

  closePopup(){
    this.DynamicDialogRef.close();

  }

  confirmSave(data: any) {

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    let request = {
      "userName": this.userForm.value.userName ? this.userForm.value.userName : '',
      "firstName": this.userForm.value.firstName ? this.userForm.value.firstName : null,
      "lastName": this.userForm.value.lastName ? this.userForm.value.lastName : '',
      "mobileNo": this.userForm.value.mobileNo ? this.userForm.value.mobileNo : '',
      "email": this.userForm.value.email ? this.userForm.value.email : '',
      "password": this.userForm.value.password ? this.userForm.value.password : null,
      "role": this.userForm.value.role ? this.userForm.value.role : '',
      
    }
    this.userService.createUser(request).subscribe({
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
  restrictAlphaNumeric(event: KeyboardEvent): void {
  const charCode = event.key;
  // Allow only A-Z, a-z, 0-9
  if (!/^[a-zA-Z0-9]$/.test(charCode)) {
    event.preventDefault();
  }
}
}



