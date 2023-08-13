import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-tomar-foto2',
  templateUrl: './tomar-foto2.component.html',
  styleUrls: ['./tomar-foto2.component.css'],
})
export class TomarFoto2Component {
  private trigger: Subject<void> = new Subject();

  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<void> = new Subject();

  captureImage = '';

  ngOnInit() {}

  /*------------------------------------------
    --------------------------------------------
    triggerSnapshot()
    --------------------------------------------
    --------------------------------------------*/
  public triggerSnapshot() {
    this.trigger.next();
  }

  /*------------------------------------------
    --------------------------------------------
    handleImage()
    --------------------------------------------
    --------------------------------------------*/
  public handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    this.captureImage = webcamImage!.imageAsDataUrl;
    console.info('received webcam image', this.captureImage);
  }

  /*------------------------------------------
    --------------------------------------------
    triggerObservable()
    --------------------------------------------
    --------------------------------------------*/
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  /*------------------------------------------
    --------------------------------------------
    nextWebcamObservable()
    --------------------------------------------
    --------------------------------------------*/
  public get nextWebcamObservable(): Observable<void> {
    return this.nextWebcam.asObservable();
  }
}
