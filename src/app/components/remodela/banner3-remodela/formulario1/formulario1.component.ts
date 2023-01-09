import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {
  nextForm(){
    let form2 = document.getElementById("form2");
    let form3 = document.getElementById("form3");
    // @ts-ignore
    if (form2.style.display != "block"){
      // @ts-ignore
      form2.style.display = "block"
      // @ts-ignore
      form3.style.display = "block"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
