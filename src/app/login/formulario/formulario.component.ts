import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  usuario:string="Angular";
  password:string="123456";
  verificacion=false;
  login(user:string,pass:string){
    if(this.usuario==user && this.password==pass ){
      this.verificacion=true;
      console.log(this.verificacion);
  }else if(this.usuario!=user && this.password!=pass){
      this.verificacion=false;
      console.log(this.verificacion);
  }else{
      this.verificacion=false;
      console.log(this.verificacion);
  }
}
}
