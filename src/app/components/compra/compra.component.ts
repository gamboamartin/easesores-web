import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  focusAnimation() {
    // @ts-ignore
    document.getElementById('div1').style.animation = "margin 0.2s ease-in-out forwards";
    // @ts-ignore
    document.getElementById('searchbox').style.animation = "desplazamiento 0.5s ease-in-out forwards";
  }
  blurAnimation() {
    // @ts-ignore
    document.getElementById('div1').style.animation = "marginEvil 0.4s ease-in-out forwards";
    // @ts-ignore
    document.getElementById('searchbox').style.animation = "desplazamientoEvil 0.4s ease-in-out forwards";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
