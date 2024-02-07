import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { PartnerSectionComponent } from '../../components/partner-section/partner-section.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent, PartnerSectionComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
