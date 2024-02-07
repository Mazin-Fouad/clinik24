import { Component } from '@angular/core';
import { PartnerData } from '../../interfaces/partner-data';

@Component({
  selector: 'app-partner-section',
  standalone: true,
  imports: [],
  templateUrl: './partner-section.component.html',
  styleUrl: './partner-section.component.scss',
})
export class PartnerSectionComponent {
  partners: PartnerData[];

  constructor() {
    this.partners = [
      {
        imgs: [
          '/assets/imgs/p1.png',
          '/assets/imgs/p2.png',
          '/assets/imgs/p3.png',
          '/assets/imgs/p4.png',
          '/assets/imgs/p5.png',
        ],
      },
    ];

    console.log(this.partners);
  }
}
