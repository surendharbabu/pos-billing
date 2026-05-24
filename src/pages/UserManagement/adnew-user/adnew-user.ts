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
   userData: any
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

  const screenType =
    this.DynamicDialogConfig.data.screenType;

  const data =
    this.DynamicDialogConfig.data.resData;

  // Remove password validators for edit/view
  if (screenType === 'edit' || screenType === 'view') {

    this.userForm.get('password')?.clearValidators();

    this.userForm.get('confirmPassword')?.clearValidators();

    this.userForm.get('password')?.updateValueAndValidity();

    this.userForm.get('confirmPassword')?.updateValueAndValidity();

    // Remove form-level password validator
    this.userForm.clearValidators();

    this.userForm.updateValueAndValidity();
  }

  // Patch form values
  if (screenType === 'view' || screenType === 'edit') {

    this.userForm.patchValue({
      userName: data.userName,
      firstName: data.firstName,
      lastName: data.lastName,
      mobileNo: data.mobileNo,
      email: data.email,
      role: data.role
    });
  }

  // Disable form in view mode
  if (screenType === 'view') {
    this.userForm.disable();
  }
}  passwordMatchValidator(form: AbstractControl) {

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

  const screenType =
    this.DynamicDialogConfig.data.screenType;

  let request: any = {
    userName: this.userForm.value.userName || '',
    firstName: this.userForm.value.firstName || '',
    lastName: this.userForm.value.lastName || '',
    mobileNo: this.userForm.value.mobileNo || '',
    email: this.userForm.value.email || '',
    role: this.userForm.value.role || ''
  };

  // Add password only for add user
  if (screenType === 'add') {
    request.password =
      this.userForm.value.password || '';
  }

  // Add userId for update
  if (screenType === 'edit') {
    request.userId =
      this.DynamicDialogConfig.data.resData.userId;
  }

  const apiCall =
    screenType === 'edit'
      ? this.userService.updateUser(request)
      : this.userService.createUser(request);

  apiCall.subscribe({
    next: (res: any) => {

      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail:
          screenType === 'edit'
            ? 'User updated successfully!'
            : 'User saved successfully!',
        life: 3000
      });

      this.DynamicDialogRef.close({
        saved: true
      });
    }
  });
}
  restrictAlphaNumeric(event: KeyboardEvent): void {
  const charCode = event.key;
  // Allow only A-Z, a-z, 0-9
  if (!/^[a-zA-Z0-9]$/.test(charCode)) {
    event.preventDefault();
  }
}
}



