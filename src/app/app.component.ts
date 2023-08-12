import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ValidacionFoto';
  showSplash = true; // Controla la visibilidad del splash screen

  ngOnInit() {
    window.addEventListener('load', () => {
      // Cuando la página se haya cargado completamente, oculta el splash screen
      this.showSplash = false;
    });
  }
}
