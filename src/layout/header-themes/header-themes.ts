import { Component } from '@angular/core';
import { updatePrimaryPalette,updatePreset } from '@primeuix/themes'; // 1. Import palette
import { CommonPrimeModule } from '../../modules/common-prime/common-prime-module';




 interface FixedTheme {
  id          : string;
  label       : string;
  description : string;
  sidebar     : string;
  header      : string;
  body        : string;
  previewSb   : string;
  previewHd   : string;
  previewBg   : string;
  color: any
}

@Component({
  selector: 'app-header-themes',
  imports: [CommonPrimeModule],
  templateUrl: './header-themes.html',
  styleUrl: './header-themes.scss',
})

export class HeaderThemes {

    fontOptions = [
    { id: 'f1', name: 'Plus Jakarta Sans', family: 'Plus_Jakarta_Sans' },
    { id: 'f2', name: 'Inter',             family: 'Inter'             },
    { id: 'f3', name: 'Open Sans',         family: 'OpenSans'          },
  ];

    fixedThemes: FixedTheme[] = [
    {
      id         : 'ft-crimson-glass-glass',
      label      : 'Orange Aura',
      description: 'Yellow sidebar · Glass header · White body',
      sidebar    : 'Yellow',
      header     : 'Glass',
      body       : 'White',
      previewSb  : 'linear-gradient(180deg,#fbbf24,#f59e0b,#d97706)',
      previewHd  : 'rgba(255,255,255,0.55)',
      previewBg  : 'linear-gradient(135deg,#fffbeb,#fef3c7,#fde68a)',
      color: 'amber'
    },
    {
      id         : 'ft-yellow-glass-white',
      label      : 'Ocean Depth',
      description: 'Dark blue sidebar · Glass header · White body',
      sidebar    : 'Dark Blue',
      header     : 'Glass',
      body       : 'White',
      previewSb  : 'linear-gradient(180deg,#1e3a8a,#1d4ed8,#1e40af)',
      previewHd  : 'rgba(255,255,255,0.55)',
      previewBg  : 'linear-gradient(135deg,#eff6ff,#dbeafe,#bfdbfe)',
      color: 'blue'
    },
    {
      id         : 'ft-full-glass',
      label      : 'Light Blue',
      description: 'Glass sidebar · Glass header · Glass body',
      sidebar    : 'Glass',
      header     : 'Glass',
      body       : 'Glass',
      previewBg: 'linear-gradient(135deg,#dde1e7,#e4e7ec,#d8dce3)',
      previewSb: 'rgba(255,255,255,0.48)',
      previewHd: 'rgba(255,255,255,0.48)',
      color: 'green'
    },
    {
      id         : 'ft-teal-glass-white',
      label      : 'Teal Breeze',
      description: 'Teal sidebar · Glass header · White body',
      sidebar    : 'Teal',
      header     : 'Glass',
      body       : 'White',
      previewSb  : 'linear-gradient(180deg,#0d9488,#0f766e,#065f46)',
      previewHd  : 'rgba(255,255,255,0.55)',
      previewBg  : 'linear-gradient(135deg,#ecfdf5,#d1fae5,#a7f3d0)',
      color: 'purple'
    },
    {
      id         : 'ft-purple-glass-glass',
      label      : 'Violet Dream',
      description: 'Purple sidebar · Glass header · Glass body',
      sidebar    : 'Purple',
      header     : 'Glass',
      body       : 'Glass',
      previewSb  : 'linear-gradient(180deg,#4c1d95,#6d28d9,#5b21b6)',
      previewHd  : 'rgba(255,255,255,0.25)',
      previewBg  : 'linear-gradient(135deg,#ede9fe,#ddd6fe,#c4b5fd)',
      color: 'pink'
    },
    // {
    //   id         : 'ft-charcoal-white-white',
    //   label      : 'Midnight Minimal',
    //   description: 'Charcoal sidebar · White header · White body',
    //   sidebar    : 'Charcoal',
    //   header     : 'White',
    //   body       : 'White',
    //   previewSb  : 'linear-gradient(180deg,#18181b,#27272a,#18181b)',
    //   previewHd  : '#ffffff',
    //   previewBg  : '#f8fafc',
    // },
    // {
    //   id         : 'ft-crimson-glass-white',
    //   label      : 'Crimson Edge',
    //   description: 'Crimson sidebar · Glass header · White body',
    //   sidebar    : 'Crimson',
    //   header     : 'Glass',
    //   body       : 'White',
    //   previewSb  : 'linear-gradient(180deg,#7f1d1d,#b91c1c,#991b1b)',
    //   previewHd  : 'rgba(255,255,255,0.55)',
    //   previewBg  : 'linear-gradient(135deg,#fff1f2,#ffe4e6,#fecdd3)',
    // },
    // {
    //   id         : 'ft-crimson-glass-glass',
    //   label      : 'Orange',
    //   description: 'Crimson sidebar · Glass header · Glass body',
    //   sidebar    : 'Crimson',
    //   header     : 'Glass',
    //   body       : 'Glass',
    //   previewSb  : 'linear-gradient(180deg,#7f1d1d,#b91c1c,#991b1b)',
    //   previewHd  : 'rgba(255,255,255,0.22)',
    //   previewBg  : 'linear-gradient(135deg,#fff1f2,#ffe4e6,#fecdd3)',
    // },
  ];

    visible: boolean = false;

  // Simple public method that can be triggered from outside this component
  openDrawer() {
    this.visible = true;
  }

    changeThemeColor(colorName: 'pink' | 'purple' | 'blue' | 'amber') {
    // PrimeNG automatically expands this single word into shades 50-950
   const generatedPalette = this.colorScales[colorName]
   const darkPalette = this.darkSurfaces[colorName]
    updatePrimaryPalette(generatedPalette); 
     updatePreset({
      primitive: {
        surface: generatedPalette // Default base assignment
      },
      semantic: {
        colorScheme: {
          light: {
            surface: generatedPalette // Surfaces mapping for light mode
          },
          dark: {
            surface: darkPalette // Custom midnight palette for dark mode
          }
        }
      }
    });
  }
    
  

  colorScales = {
    pink: {
      50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f472b6',
      400: '#e879f9', 500: '#ec4899', 600: '#db2777', 700: '#be185d',
      800: '#9d174d', 900: '#431326', 950: '#500724'
    },
    purple: {
      50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe',
      400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce',
      800: '#6b21a8', 900: '#581c87', 950: '#3b0764'
    },
    blue: {
      50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
      400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
      800: '#1e40af', 900: '#1e3a8a', 950: '#172554'
    },
    amber: {
      50: '#fefce8', 100: '#fef9c3', 200: '#fef08a', 300: '#fde047',
      400: '#facc15', 500: '#eab308', 600: '#ca8a04', 700: '#a16207',
      800: '#854d0e', 900: '#713f12', 950: '#422006'
    }
  };

  // Dedicated premium dark surfaces for clean, anti-glare backdrops
  darkSurfaces = {
    pink: {
      50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1',
      400: '#a8a29e', 500: '#78716c', 600: '#57524e', 700: '#2e121d', // Rich Midnight Pink
      800: '#1c050e', 900: '#120208', 950: '#080003'  // Deepest Dark Backgrounds
    },
    purple: {
      50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1',
      400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#1e1b4b', // Rich Deep Indigo/Purple
      800: '#0f172a', 900: '#0f0b26', 950: '#030014'  // Dark Purple Night
    },
    blue: {
      50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1',
      400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#1e293b', // Sleek Slate
      800: '#0f172a', 900: '#020617', 950: '#010409'  // True Dark Blue
    },
    amber: {
      50: '#fdfdfc', 100: '#f4f4f0', 200: '#e5e5dc', 300: '#d1d1c2',
      400: '#a3a38c', 500: '#73735c', 600: '#545443', 700: '#2d2419', // Warm Charcoal
      800: '#1c150c', 900: '#120d06', 950: '#0a0602'  // Deep Obsidian Amber
    }
  };
}



