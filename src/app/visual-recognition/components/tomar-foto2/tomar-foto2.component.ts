import { AfterViewInit, Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
declare var Swiper: any;

@Component({
  selector: 'app-tomar-foto2',
  templateUrl: './tomar-foto2.component.html',
  styleUrls: ['./tomar-foto2.component.css'],
})
export class TomarFoto2Component implements AfterViewInit {
  private trigger: Subject<void> = new Subject();

  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<void> = new Subject();
  imageData: string[] = [];

  captureImage = '';

  ngOnInit() {
    console.log(this.imageData.length);
  }

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
    // console.info('received webcam image', this.captureImage);
    this.imageData.push(this.captureImage);
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

  ngAfterViewInit() {
    //selector del contenido bajo el uso de la clase en el div
    const swiper = new Swiper('.swiper', {
      // permite el ciclo dentro del slider
      loop: true,
      // la configuracion de la cantidad de elementos el slider puede tomarse de dos formas
      //slidesPerView: this.elementos,
      // o por definiendola en auto para hacerla responive
      slidesPerView: 'auto',
      // espacio entre sliders
      spaceBetween: 16,
      //permite el centrado de los sliders
      centeredSlides: true,
      //presentacion automatica
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      // flechas  de direccion propias de swiper
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // botones de posicion del slider
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
      // //rueda del mouse
      // mousewheel: true,
      // // flechas del teclado
      // keyboard: true,
    });
  }
}
