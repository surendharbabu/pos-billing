import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { ToolbarModule } from 'primeng/toolbar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';
import { MessageModule } from 'primeng/message';
import { PopoverModule } from 'primeng/popover';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    DrawerModule,
    IconFieldModule,
    InputIconModule,
    TableModule,
    ButtonModule,DataViewModule, SkeletonModule,CommonModule,ButtonModule,SelectButtonModule,FormsModule,DialogModule,ConfirmPopupModule,ToastModule,MessageModule, ListboxModule,
    PopoverModule,SvgIconComponent,SelectModule,ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    DrawerModule,
    IconFieldModule,
    InputIconModule,
    TableModule,
    ButtonModule,DataViewModule, SkeletonModule,CommonModule,ButtonModule,SelectButtonModule,FormsModule,DialogModule,ConfirmPopupModule,ToastModule,MessageModule, ListboxModule,
    PopoverModule,SvgIconComponent,SelectModule,ReactiveFormsModule
  ]
})
export class CommonPrimeModule {}



