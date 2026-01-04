import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule], 
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
menuItems = [
    {
      label: 'Products',
      icon: '📦',
      children: [
        { label: 'Add Product', route: '/products/add' },
        { label: 'Product List', route: '/products/list' }
      ]
    },
    {
      label: 'Orders',
      icon: '🧾',
      route: '/orders'
    }
  ];

  expandedMenu: string | null = null;

  toggleMenu(label: string) {
    this.expandedMenu = this.expandedMenu === label ? null : label;
  }
}
