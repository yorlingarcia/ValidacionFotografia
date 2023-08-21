import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualRecognitionRoutingModule } from './visual-recognition-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TomarFotoComponent } from './components/tomar-foto/tomar-foto.component';
import { TomarFoto2Component } from './components/tomar-foto2/tomar-foto2.component';
import { WebcamModule } from 'ngx-webcam';
import { SliderFotoComponent } from './components/slider-foto/slider-foto.component';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    TomarFotoComponent,
    TomarFoto2Component,
    SliderFotoComponent,
  ],
  imports: [CommonModule, VisualRecognitionRoutingModule, WebcamModule],
})
export class VisualRecognitionModule {}
