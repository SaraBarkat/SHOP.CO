import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  standalone: true, 
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {


selectedTab: string = 'details';
ChangeSelectedTab(tab: string) {
  this.selectedTab = tab;
  console.log('Selected tab:', this.selectedTab);
}
}