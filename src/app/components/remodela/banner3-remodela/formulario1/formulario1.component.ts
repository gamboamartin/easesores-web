import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {
  nextForm(){
    // @ts-ignore
    let form2 = document.getElementById("form2");
    let form3 = document.getElementById("form3");

    // @ts-ignore
    let nombre = document.getElementById("nombre").value;
    // @ts-ignore
    let ap = document.getElementById("ap").value;
    // @ts-ignore
    let tel = document.getElementById("tel").value;
    // @ts-ignore
    let email = document.getElementById("email").value;
    let chbox = document.getElementById("chbox");
    let chbox_check = false;
    // @ts-ignore
    if (chbox.checked){
      chbox_check = true;
    }

    if (nombre != '' && ap != '' && tel != '' && email != '' && chbox_check) {
      // @ts-ignore
      form2.style.display = "block";
      // @ts-ignore
      form3.style.display = "block";
    } else {
      // @ts-ignore
      form2.style.display = "none";
      // @ts-ignore
      form3.style.display = "none";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
