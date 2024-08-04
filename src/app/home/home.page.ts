import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  goToAbout() { this.router.navigate(['/about']); }
  goToProducts() { this.router.navigate(['/products']); }
}
