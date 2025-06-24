import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reviewspage',
  imports: [CommonModule],
  templateUrl: './reviewspage.component.html',
  styleUrl: './reviewspage.component.scss'
})
export class ReviewspageComponent {
 reviews = [
    {
      name: 'Aisha Khan',
      date: 'June 1, 2025',
      comment: 'The chocolate truffle cake was delicious and delivered on time!',
      rating: 5,
      image: 'https://i.pravatar.cc/50?img=5'
    },
    {
      name: 'Ravi Patel',
      date: 'May 25, 2025',
      comment: 'Loved the design and flavor. Highly recommend this bakery!',
      rating: 4,
      image: 'https://i.pravatar.cc/50?img=12'
    },
    {
      name: 'Sneha Roy',
      date: 'May 18, 2025',
      comment: 'Perfectly moist red velvet cake. Will order again.',
      rating: 5,
      image: 'https://i.pravatar.cc/50?img=8'
    }
  ];
}
