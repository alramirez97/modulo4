import { Component, OnInit } from '@angular/core';
import { Interfaces } from 'src/app/Interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:Interfaces = {} as Interfaces;
  usuarios:any;

  //crearEstudiante: FormGroup;

  id: string | null;
  
  titulo = 'Registrar Estudiante';

  constructor( //private fb: FormBuilder,
              private http: HttpClient,
              private aRoute: ActivatedRoute,
              private router: Router, 
              ) { 

       this.id = this.aRoute.snapshot.paramMap.get('id');
       
      // console.log(this.id)
  }

  ngOnInit(): void {
    this.esEditar();
  }

  enviarPos():void {

    this.http.post<Interfaces>('https://frozen-meadow-48728.herokuapp.com/registrar', this.usuario)
    .subscribe(Response => {
      console.log(Response);
      this.usuario = {} as Interfaces;
      this.router.navigate(['/listado']);
    })
  }

  //editar
  // editar(id:number){
 
  //   this.http.get<estudiante>("https://frozen-meadow-48728.herokuapp.com/uno/"+id)
  //   .subscribe(
  //     response => {
  //       this.usuario=response;
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }

  esEditar() : void{

    if (this.id === null) {
      this.titulo = 'Registrar Estudiante'
    } else {
      this.titulo = 'Editar Estudiante'
    }
    this.http.get<Interfaces>("https://frozen-meadow-48728.herokuapp.com/uno/"+this.id)
    .subscribe(
      response => {
        this.usuario=response;
      },
      error => {
        console.log(error);
      });
  }

}
