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
    // {
    //   id         : 'ft-crimson-glass-glass',
    //   label      : 'Orange Aura',
    //   description: 'Yellow sidebar · Glass header · White body',
    //   sidebar    : 'Yellow',
    //   header     : 'Glass',
    //   body       : 'White',
    //   previewSb  : 'linear-gradient(180deg,#fbbf24,#f59e0b,#d97706)',
    //   previewHd  : 'rgba(255,255,255,0.55)',
    //   previewBg  : 'linear-gradient(135deg,#fffbeb,#fef3c7,#fde68a)', 
    //   color: 'emerald'
    // },
    // {
    //   id         : 'ft-yellow-glass-white',
    //   label      : 'Ocean Depth',
    //   description: 'Dark blue sidebar · Glass header · White body',
    //   sidebar    : 'Dark Blue',
    //   header     : 'Glass',
    //   body       : 'White',
    //   previewSb  : 'linear-gradient(180deg,#1e3a8a,#1d4ed8,#1e40af)',
    //   previewHd  : 'rgba(255,255,255,0.55)',
    //   previewBg  : 'linear-gradient(135deg,#eff6ff,#dbeafe,#bfdbfe)',
    //   color: 'indigo'
    // },
    // {
    //   id         : 'ft-full-glass',
    //   label      : 'Light Blue',
    //   description: 'Glass sidebar · Glass header · Glass body',
    //   sidebar    : 'Glass',
    //   header     : 'Glass',
    //   body       : 'Glass',
    //   previewBg: 'linear-gradient(135deg,#dde1e7,#e4e7ec,#d8dce3)',
    //   previewSb: 'rgba(255,255,255,0.48)',
    //   previewHd: 'rgba(255,255,255,0.48)',
    //   color: 'rose'
    // },
    // {
    //   id         : 'ft-teal-glass-white',
    //   label      : 'Teal Breeze',
    //   description: 'Teal sidebar · Glass header · White body',
    //   sidebar    : 'Teal',
    //   header     : 'Glass',
    //   body       : 'White',
    //   previewSb  : 'linear-gradient(180deg,#0d9488,#0f766e,#065f46)',
    //   previewHd  : 'rgba(255,255,255,0.55)',
    //   previewBg  : 'linear-gradient(135deg,#ecfdf5,#d1fae5,#a7f3d0)',
    //   color: 'cyan'
    // },
    // {
    //   id         : 'ft-purple-glass-glass',
    //   label      : 'Violet Dream',
    //   description: 'Purple sidebar · Glass header · Glass body',
    //   sidebar    : 'Purple',
    //   header     : 'Glass',
    //   body       : 'Glass',
    //   previewSb  : 'linear-gradient(180deg,#4c1d95,#6d28d9,#5b21b6)',
    //   previewHd  : 'rgba(255,255,255,0.25)',
    //   previewBg  : 'linear-gradient(135deg,#ede9fe,#ddd6fe,#c4b5fd)',
    //   color: 'pink'
    // },
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

    {
  id         : 'ft-crimson-glass-glass',
  label      : 'Emerald Luxe',
  description: 'Emerald sidebar · Glass header · Soft emerald body',
  sidebar    : 'Emerald',
  header     : 'Glass',
  body       : 'White',

  previewSb  : 'linear-gradient(180deg,#10b981,#059669,#064e3b)',
  previewHd  : 'rgba(16,185,129,0.14)',
  previewBg  : 'linear-gradient(135deg,#ecfdf5,#d1fae5,#a7f3d0)',

  color      : 'emerald'
},

{
  id         : 'ft-yellow-glass-white',
  label      : 'Indigo Depth',
  description: 'Indigo sidebar · Glass header · Indigo soft body',
  sidebar    : 'Indigo',
  header     : 'Glass',
  body       : 'White',

  previewSb  : 'linear-gradient(180deg,#6366f1,#4f46e5,#312e81)',
  previewHd  : 'rgba(99,102,241,0.14)',
  previewBg  : 'linear-gradient(135deg,#eef2ff,#c7d2fe,#a5b4fc)',

  color      : 'indigo'
},

{
  id         : 'ft-full-glass',
  label      : 'Rose Crystal',
  description: 'Rose glass sidebar · Rose glass header · Rose glass body',
  sidebar    : 'Glass',
  header     : 'Glass',
  body       : 'Glass',

  previewSb  : 'rgba(244,63,94,0.18)',
  previewHd  : 'rgba(244,63,94,0.14)',
  previewBg  : 'linear-gradient(135deg,#fff1f2,#fecdd3,#fda4af)',

  color      : 'rose'
},

{
  id         : 'ft-teal-glass-white',
  label      : 'Cyan Horizon',
  description: 'Cyan sidebar · Glass header · Cyan soft body',
  sidebar    : 'Cyan',
  header     : 'Glass',
  body       : 'White',

  previewSb  : 'linear-gradient(180deg,#06b6d4,#0891b2,#164e63)',
  previewHd  : 'rgba(6,182,212,0.14)',
  previewBg  : 'linear-gradient(135deg,#ecfeff,#a5f3fc,#67e8f9)',

  color      : 'cyan'
},

{
  id         : 'ft-slate-premium-dark',
  label      : 'Slate Midnight',
  description: 'Slate dark sidebar · Dark glass header · Midnight body',
  sidebar    : 'Slate',
  header     : 'Dark Glass',
  body       : 'Dark',

  previewSb  : 'linear-gradient(180deg,#1e293b,#0f172a,#020617)',
  previewHd  : 'rgba(15,23,42,0.65)',
  previewBg  : 'linear-gradient(135deg,#0f172a,#020617,#000814)',

  color      : 'slate'
}
  ];

    visible: boolean = false;

  // Simple public method that can be triggered from outside this component
  openDrawer() {
    this.visible = true;
  }

    changeThemeColor(colorName: 'emerald' | 'indigo' | 'rose' | 'cyan') {
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

  emerald: {
    50:  '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
    950: '#022c22'
  },

  indigo: {
    50:  '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b'
  },

  rose: {
    50:  '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
    950: '#4c0519'
  },

  cyan: {
    50:  '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
    950: '#083344'
  },

  slate: {
    50:  '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617'
  }

};

  // Dedicated premium dark surfaces for clean, anti-glare backdrops
darkSurfaces = {

  indigo: {
    50:  '#f8fafc',
    100: '#e2e8f0',
    200: '#cbd5e1',
    300: '#94a3b8',
    400: '#64748b',
    500: '#475569',
    600: '#334155',
    700: '#1e1b4b', // Premium Deep Indigo
    800: '#13132f',
    900: '#0b1020',
    950: '#050816'  // Luxury Midnight
  },

  slate: {
    50:  '#f8fafc',
    100: '#f1f5f9',
    200: '#cbd5e1',
    300: '#94a3b8',
    400: '#64748b',
    500: '#475569',
    600: '#334155',
    700: '#1e293b', // Enterprise Slate
    800: '#0f172a',
    900: '#020617',
    950: '#000814'  // Ultra Dark
  },

  emerald: {
    50:  '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#14532d', // Deep Emerald
    800: '#0b3b20',
    900: '#052814',
    950: '#02140a'
  },

  cyan: {
    50:  '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#164e63', // Premium Ocean Dark
    800: '#0b3440',
    900: '#071f26',
    950: '#020f14'
  },

  rose: {
    50:  '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#881337', // Elegant Wine
    800: '#5b0b24',
    900: '#3a0717',
    950: '#1c020b'
  }

};
}



