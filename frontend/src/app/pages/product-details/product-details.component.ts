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

product_name : string ='One Life Graphic T-shirt' ; 
product_score: number=4 ; 
old_price :number =300 ; 
new_price :number=260 ;
product_description :string='This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.' ;
images: string[] = [
    'assets/images/T-shirt1.png',
    'assets/images/T-shirt2.png',
    'assets/images/T-shirt3.png',
    'assets/images/T-shirt4.png'
  ];




}