import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tomar-foto',
  templateUrl: './tomar-foto.component.html',
  styleUrls: ['./tomar-foto.component.css'],
})
export class TomarFotoComponent {
  @ViewChild('videoElement') videoElement!: ElementRef;
  @ViewChild('canvasElement') canvasElement!: ElementRef;
  imageData: string[] = [];

  ngOnInit(): void {
    this.setupCamera();
  }

  async setupCamera() {
    const constraints = {
      video: { facingMode: 'environment' }, // Use the rear-facing camera
    };

    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.videoElement.nativeElement.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  }

  capturePhoto() {
    const context = this.canvasElement.nativeElement.getContext('2d');
    context.width = '640px';
    context.height = '480px';
    context.drawImage(
      this.videoElement.nativeElement,
      0,
      0,
      640,
      480,
      0,
      0,
      300,
      150
    );

    // You can now use the canvas data for further processing or saving
    this.imageData.push(
      this.canvasElement.nativeElement.toDataURL('image/jpeg')
    );
    // console.log('Captured image data:', imageData);
  }
}
