import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  products=[] ; 

  topProducts = [] ; 

  testimonials = [
    { name: 'Sarah M.', stars: 5, text: `I'm blown away by the quality and style of the clothes I received...` },
    { name: 'Alex K.', stars: 5, text: `Shop.co has completely transformed my wardrobe!` },
    { name: 'James L.', stars: 4, text: `The selection of clothes is not only diverse but also on-point.` },
    { name: 'Lisa A.', stars: 5, text: `Great styles, good shipping time.` },
    { name: 'Marco V.', stars: 5, text: `My go-to shop now.` }
  ];

  currentStartIndex = 0;

  get visibleTestimonials() {
    return this.testimonials.slice(this.currentStartIndex, this.currentStartIndex + 3);
  }

  getStarsArray(count: number) {
    return Array(count).fill(0);
  }

  prevTestimonial() {
    if (this.currentStartIndex > 0) {
      this.currentStartIndex--;
    }
  }

  nextTestimonial() {
    if (this.currentStartIndex + 3 < this.testimonials.length) {
      this.currentStartIndex++;
    }
  }
}
