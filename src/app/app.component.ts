import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeMeDirective } from './sharedDirective/change-me.directive';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChangeMeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'custom-directive';
}
