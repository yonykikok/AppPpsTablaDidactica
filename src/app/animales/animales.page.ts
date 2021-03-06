import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {

  public brActive: boolean = false;
  public argActive: boolean = true;
  public euActive: boolean = false;
  public temas = false;
  public lenguajes = false;
 toggleTemas() {
    this.temas ? this.temas = false : this.temas = true;
  }
  toggleLenguajes() {
    this.lenguajes ? this.lenguajes = false : this.lenguajes = true;
  }
  public animales: string[] = ["Caballo", "Cebra", "Chancho",
    "Elefante", "Gallina", "Gallo",
    "Pollito", "Gato", "Girafa",
    "Hipopotamo", "Leon", "Mono",
    "Oveja", "Raton", "Tigre",
    "Tucan", "Vaca", "Zorro"];

  constructor(private router: Router) { }
  ionViewWillEnter(){
    this.seleccionarIdiomaLatino();
    setTimeout(() => {

      let flagArg = document.getElementById('flagArg');
      flagArg.setAttribute('class', "imagen-Icon flag flag-active");//setear bandera en active.
    }, 200);
  }
  redirecionar() {
    this.router.navigateByUrl('/colores');
  }
  ngOnInit() {
    setTimeout(() => {
      
      let flagArg = document.getElementById('flagArg');
      flagArg.setAttribute('class', "imagen-Icon flag flag-active");//setear bandera en active.
    }, 200);
  }
  DesactivarFlag(flag) {
    flag.removeAttribute('class');
    flag.setAttribute('class', "imagen-Icon flag");//setear bandera en active.
  }
  ActivarFlag(flag) {
    flag.setAttribute('class', "imagen-Icon flag flag-active");//setear bandera en active.
  }

  seleccionarIdiomaPortugues() {
    this.brActive = true;
    this.argActive = false;
    this.euActive = false;
    let audio = new Audio("../../assets/audios/flags/Flagbr.wav");
    audio.play();
    let flagEu = document.getElementById('flagEu');
    let flagBr = document.getElementById('flagBr');
    let flagArg = document.getElementById('flagArg');
    this.ActivarFlag(flagBr);
    this.DesactivarFlag(flagEu);
    this.DesactivarFlag(flagArg);
  }

  seleccionarIdiomaIngles() {
    this.brActive = false;
    this.argActive = false;
    this.euActive = true;
    let audio = new Audio("../../assets/audios/flags/Flageng.wav");
    audio.play();
    let flagEu = document.getElementById('flagEu');
    let flagBr = document.getElementById('flagBr');
    let flagArg = document.getElementById('flagArg');
    this.ActivarFlag(flagEu);
    this.DesactivarFlag(flagBr);
    this.DesactivarFlag(flagArg);
  }

  seleccionarIdiomaLatino() {
    this.brActive = false;
    this.argActive = true;
    this.euActive = false;
    let audio = new Audio("../../assets/audios/flags/Flagarg.wav");
    audio.play();
    let flagEu = document.getElementById('flagEu');
    let flagBr = document.getElementById('flagBr');
    let flagArg = document.getElementById('flagArg');
    this.ActivarFlag(flagArg);
    this.DesactivarFlag(flagBr);
    this.DesactivarFlag(flagEu);

  }
  reproducirAudio(e) {
    let path;
    if (this.euActive) {
      path = '../../assets/audios/animales/' + e + 'eng.wav';
      let audio = new Audio(path);
      audio.play();
    } else if (this.brActive) {
      path = '../../assets/audios/animales/' + e + 'br.wav';
      let audio = new Audio(path);
      audio.play();
    } else {
      path = '../../assets/audios/animales/' + e + 'esp.wav';
      let audio = new Audio(path);
      audio.play();
    }

  }
}
