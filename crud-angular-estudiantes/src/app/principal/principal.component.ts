import { Component, OnInit } from '@angular/core';
import { Interfaces } from '../Interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuario:Interfaces = {} as Interfaces;
  usuarios:any;

  constructor(  private http: HttpClient, 
                private activatedRoiuter:ActivatedRoute) { 

    http.get('https://frozen-meadow-48728.herokuapp.com/todos')
    .subscribe(response=>{this.usuarios=response});

  }

  cargar(): void{
    this.http.get('https://frozen-meadow-48728.herokuapp.com/todos')
    .subscribe(response=>{this.usuarios=response});
  }

  enviarPos():void {
    this.http.post<Interfaces>('https://frozen-meadow-48728.herokuapp.com/registrar', this.usuario)
    .subscribe(Response => {
      console.log(Response);
      this.usuario = {} as Interfaces;
      window.location.reload();
    })
  }
  
  //obtener uno
  getUno(id:number): void{
    this.http.get("https://frozen-meadow-48728.herokuapp.com/uno/"+id)
  }

  //editar
  editar(id:number){
    this.http.get<Interfaces>("https://frozen-meadow-48728.herokuapp.com/uno/"+id)
    .subscribe(
      response => {
        this.usuario=response;
      },
      error => {
        console.log(error);
      });
  }

  //eliminar
  eliminar(id:number): void {
    if (confirm('¿Quieres eliminar este usuario?')) {
      this.http.delete<Interfaces>('https://frozen-meadow-48728.herokuapp.com/eliminar/' + id)
      .subscribe(
        response => {
         alert('Estudiante eliminado exitosamente');
         window.location.reload();
        },
        error => {
          console.log(error);
        });
  }
}
  ngOnInit(): void {
    
  }

}