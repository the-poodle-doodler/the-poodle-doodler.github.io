import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from "./logo/logo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, LogoComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'The Poodle Doodler';
}
