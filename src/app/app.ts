import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ECommercePortalApp');
  isLoginMode = true; // State to track which form to show

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}

