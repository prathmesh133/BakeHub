import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcomepage',
  imports: [CommonModule],
  templateUrl: './welcomepage.component.html',
  styleUrl: './welcomepage.component.scss'
})
export class WelcomepageComponent {
  slides = [
    {
      title: 'BakeHub',
      subtitle: 'Classic Chocolate Cake',
      description: 'A lavishly frosted with a rich chocolate ganache, adorned with "Happy Birthday" in elegant white script and finished with chocolate sprinkles around the sides and decorative swirls on top.',
      cakeImg: 'image1.jpeg'
    },

    {
      title: 'BakeHub',
      subtitle: 'Chocolate Drip Cake',
      description: 'A sophisticated cake with a light-colored frosting, cascading dark chocolate ganache, delicate cream rosettes, chocolate balls, and a golden "Happy Birthday" topper.',
      cakeImg: 'image2.jpg'
    },
    
    {
      title: 'BakeHub',
      subtitle: 'Charming Chocolate Cake',
      description: 'A cake topped with a layer of vibrant red fruit filling, surrounded by swirls of white cream, chocolate shavings, and a rose gold "Happy Birthday" topper with a small bow.',
      cakeImg: 'image3.jpg'
    }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
