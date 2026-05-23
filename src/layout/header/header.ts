import { Component, DOCUMENT, Inject, output } from '@angular/core';
import { CommonPrimeModule } from '../../modules/common-prime/common-prime-module';
import { HeaderThemes } from '../header-themes/header-themes';

@Component({
  selector: 'app-header',
    standalone: true,
  imports: [CommonPrimeModule,HeaderThemes],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  sidebarState: 'expanded' | 'mini' | 'removed' = 'removed';
  sidebarStateEmit = output<string>();
  isDarkMode: boolean = true;


  constructor(@Inject(DOCUMENT) private document: Document){
    
  }

    ngOnInit() {
    // Optional: Retrieve the user's preference on load
    const savedTheme = localStorage.getItem('theme-mode');
    this.isDarkMode = savedTheme ? savedTheme === 'dark' : true;

    this.updateThemeClass();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme-mode', this.isDarkMode ? 'dark' : 'light');

    this.updateThemeClass();
  }

  private updateThemeClass() {
    const element = this.document.documentElement; // HTML tag

    if (this.isDarkMode) {
      element.classList.add('p-dark'); // Activates PrimeNG Dark Design Tokens
    } else {
      element.classList.remove('p-dark');
    }
  }

  toggleSidebar() {
    if (this.sidebarState === 'expanded') {
      this.sidebarState = 'mini';
    } else if (this.sidebarState === 'mini') {
      this.sidebarState = 'removed';
    } else {
      this.sidebarState = 'expanded';
    }
    this.sidebarStateEmit.emit(this.sidebarState)

  }
}


