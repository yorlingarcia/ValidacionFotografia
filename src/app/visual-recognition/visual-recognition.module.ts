import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualRecognitionRoutingModule } from './visual-recognition-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [HomeComponent, LayoutComponent],
  imports: [CommonModule, VisualRecognitionRoutingModule],
})
export class VisualRecognitionModule {}
