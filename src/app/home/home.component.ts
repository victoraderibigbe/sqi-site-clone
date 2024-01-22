import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { CertificateComponent } from '../certificate/certificate.component';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CertificateComponent, CoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
