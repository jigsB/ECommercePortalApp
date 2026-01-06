import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule], 
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {

 user: any; // ✅ declare property

  constructor(private authService: Auth) {}

  ngOnInit(): void {
    this.user = this.authService.getUser(); // ✅ assign value
  }
    

hasAccess(roles?: string[]): boolean {
  if (!roles || roles.length === 0) return true;
  return roles.includes(this.user?.role);
}
menuItems = [
    {
      label: 'Products',
      icon: '📦',
      children: [
        { label: 'Add Product', route: '/products/add' , roles: ['StoreOwner']},
        { label: 'Product List', route: '/products/list' , roles: ['StoreOwner', 'Buyer'] }
      ]
    },
    {
      label: 'Orders',
      icon: '🧾',
      route: '/orders',
      roles: ['StoreOwner', 'Buyer']
    }
  ];
  expandedMenu: string | null = null;

  toggleMenu(label: string) {
    this.expandedMenu = this.expandedMenu === label ? null : label;
  }

    logout() {
    this.authService.logout();
  }
}
