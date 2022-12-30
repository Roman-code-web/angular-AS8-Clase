import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  usuario:string="Angular";
  password:string="123456";
  verificacion!:boolean;
  validacion!:boolean;
  login(user:string,pass:string){
    console.log(this.verificacion)
    if(this.usuario==user && this.password==pass ){
      this.verificacion=true;
      this.validacion=true;
      console.log(this.verificacion);
  }else if(this.usuario!=user && this.password!=pass){
      this.verificacion=false;
      this.validacion=false;
      console.log(this.verificacion);
  }else{
      this.verificacion=false;
      this.validacion=false;
      console.log(this.verificacion);
  }
}
}
