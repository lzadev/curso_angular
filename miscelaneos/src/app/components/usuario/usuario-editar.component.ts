import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioEditarComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) {

    this.activateRoute.parent!.params.subscribe(params =>{
      console.log("RUTA HIJA EDITAR!!");
      console.log(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
