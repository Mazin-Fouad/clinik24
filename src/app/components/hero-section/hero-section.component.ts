import { Component, OnInit } from '@angular/core';
import { HeroData } from '../../interfaces/hero-data';
import { HeroServiceService } from '../../services/static/hero-service.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  heroData!: HeroData;

  constructor(private heroService: HeroServiceService) {}

  ngOnInit(): void {
    this.setData();
    this.heroData = this.getData();
  }

  // Method to set data
  setData(): void {
    this.heroService.setData('Hero', {
      title: 'Klinik 24 – Rund um die Uhr für Ihre Gesundheit da.',
      description:
        'Unsere Klinik ist ein integraler Bestandteil des sozialen Gesundheitswesens und bietet umfassende Dienstleistungen an.',
      image: '/assets/imgs/dr-santoso.png',
    });
  }

  // Method to get data
  getData(): HeroData {
    return this.heroService.getData('Hero');
  }
}
