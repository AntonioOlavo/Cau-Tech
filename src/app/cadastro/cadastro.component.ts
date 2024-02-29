import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SiteLeadService } from '../services/site-lead-service';
import { throwError } from 'rxjs';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  dados= {
    nome:'',
    email:'',
    telefone: '',
    cpf:  '',
  }

 
  constructor(private toastr: ToastrService,private leadService: SiteLeadService) {}

  ngOnInit(): void {
  }

  
  adicionar() {
    if (this.dados.nome === '') {
      this.toastr.error('O campo nome não pode estar vazio.');
      return; 
    } 
    if (this.dados.email === '') {
      this.toastr.error('O campo email não pode estar vazio.');
      return; 
    } 
    if (this.dados.telefone === '') {
      this.toastr.error('O campo telefone não pode estar vazio.');
      return; 
    } 
    if (this.dados.cpf === '') {
      this.toastr.error('O campo CPF não pode estar vazio.');
      return; 
    } 
    
    console.log(this.dados);
    
    this.leadService.registerLead(this.dados).subscribe(
      (response: any) => {
        this.toastr.success("Dados Cadastrados", "Sucesso");
        this.dados.nome = ""
        this.dados.email = ""
        this.dados.telefone = ""
        this.dados.cpf = ""
      },
      (error: any) => {
        this.toastr.error('Ocorreu um erro ao cadastrar os dados:', error);
      }
      
    );
    ///location.reload() não esta deixando salvar os dados da variavel dados
  }
  



}