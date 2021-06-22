import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';

  empleados:Empleado[]=[

    new Empleado("Alfonso","Hidalgo","Programador Jefe", 35000),
    new Empleado("Alfrodo","Rguez","Programador Junior", 20000),

    new Empleado("Aurora","Rguez","Contable", 45000),
    new Empleado("Nerea","Jimenez","RRHH", 25000)

  ];
  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
