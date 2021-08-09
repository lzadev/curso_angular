import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais:''
  }

  paises:any[] = []

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe(paises =>{
      this.paises = paises;

      this.paises.unshift({
        nombre : '[Seleccione Pais]',
        codigo: ''
      });
    });
  }

  guardar(formualario: NgForm): void {
    if (formualario.invalid) {
      Object.values(formualario.controls).forEach(control => {
        control.markAsTouched();
      })
      return;
    }

    console.log(formualario.value);
  }

}
