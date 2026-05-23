import { Routes } from '@angular/router';
import { Layout } from '../layout/layout/layout';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'category',
                loadComponent: () => import('../pages/categorie/categorie-summary/categorie-summary').then(c => c.CategorieSummary)
            },
            {
                path: 'dashboard',
                loadComponent: () => import('../pages/dashboard/dashboard').then(c => c.Dashboard)
            },
            {
                path: 'customer',
                loadComponent: () => import('../pages/CustomerMangement/customermanagement-summary/customermanagement-summary').then(c => c.CustomermanagementSummary)
            },
            {
                path: 'expense',
                loadComponent: () => import('../pages/ExpenseMangement/expensemangement-summary/expensemangement-summary').then(c => c.ExpensemangementSummary)
            },
            {
                path: 'inventory',
                loadComponent: () => import('../pages/InventoryManagement/inventorymangement-summary/inventorymangement-summary').then(c => c.InventorymangementSummary)
            },
            {
                path: 'order',
                loadComponent: () => import('../pages/OrderManagement/ordermanagement-summary/ordermanagement-summary').then(c => c.OrdermanagementSummary)
            },
            {
                path: 'product',
                loadComponent: () => import('../pages/ProductManagement/productmanagement-summary/productmanagement-summary').then(c => c.ProductmanagementSummary)
            },
            {
                path: 'users',
                loadComponent: () => import('../pages/UserManagement/usermanagement-summary/usermanagement-summary').then(c => c.UsermanagementSummary)
            },
            {
                path: 'reports',
                loadComponent: () => import('../pages/Reports/reports/reports').then(c => c.Reports)
            },
        ]
    },
];


