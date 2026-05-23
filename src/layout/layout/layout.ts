import { Component, DOCUMENT, Inject, signal } from '@angular/core';
import { CommonPrimeModule } from '../../modules/common-prime/common-prime-module';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,Header,CommonPrimeModule,Sidebar],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  protected readonly title = signal('billing');
  sidebarState: 'expanded' | 'mini' | 'removed' = 'removed';
  sidebarVisible: boolean = false;

  drawerVisable: boolean = false;


  constructor() { }



  flashClass = 'overlay-hidden';

  sidebarToggleAction(event: any){
    this.sidebarState = event
  }

  triggerFlash(color: 'green' | 'red'): void {
    this.flashClass = `overlay-active flash-${color}`;
    setTimeout(() => {
      this.flashClass = 'overlay-hidden';
    }, 1000);
  }


}


