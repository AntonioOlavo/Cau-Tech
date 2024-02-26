import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  dados={
    nome:'',
    email:'',
    telefone:'',
    cpf:'',
  }

 
  constructor() { }

  ngOnInit(): void {
  }

  
  adicionar(){
    alert("Dados Cadastrados")
    console.log(this.dados)
  

  }

}