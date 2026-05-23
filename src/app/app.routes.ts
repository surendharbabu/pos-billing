import { Routes } from '@angular/router';
import { Layout } from '../layout/layout/layout';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '',
                redirectTo: 'category',
                pathMatch: 'full'
            },
            {
                path: 'category',
                loadComponent: () => import('../pages/categorie/categorie-summary/categorie-summary').then(c => c.CategorieSummary)
            },
            {
                path: 'dashboard',
                loadComponent: () => import('../pages/dashboard/dashboard').then(c => c.Dashboard)
            }
        ]
    },
];


