import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, FormsModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  searchTerm: string = '';

  faqs = [
    {
      question: 'How can I place a cake order?',
      answer: 'You can fill out the cake order form and click "Place Order".',
    },
    {
      question: 'What are the available cake flavors?',
      answer: 'We offer chocolate, vanilla, red velvet, strawberry, and more.',
    },
    {
      question: 'Do you offer same-day delivery?',
      answer: 'Yes, for orders placed before 2 PM.',
    },
    {
      question: 'Can I customize the message on the cake?',
      answer: 'Absolutely! Use the "Message on Cake" field in the order form.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash on delivery and credit/debit cards.',
    },
  ];

  filteredFaqs = [...this.faqs];

  searchFaqs() {
    const term = this.searchTerm.toLowerCase();
    this.filteredFaqs = this.faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term)
    );
  }
}