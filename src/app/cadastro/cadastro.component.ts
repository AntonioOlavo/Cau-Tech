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

  dados = {
    nome:'',
    email:'',
    telefone: '',
    cpf:  '',
    data:''
  }

  constructor(private toastr: ToastrService, private leadService: SiteLeadService) {}

  ngOnInit(): void {}

  adicionar() {
    if (this.dados.nome === '') {
      this.toastr.error('O campo nome não pode estar vazio.');
      return; 
    } 
    if (this.dados.email === '') {
      this.toastr.error('O campo email não pode estar vazio.');
      return;
    } else if (!/\S+@\S+\.\S+/.test(this.dados.email)) {
      this.toastr.error('Por favor, insira um endereço de email válido.');
      return; 
    } 
    if (this.dados.telefone === '') {
      this.toastr.error('O campo telefone não pode estar vazio.');
      return; 
    } 
    if (this.dados.cpf === '') {
      this.toastr.error('O campo CPF não pode estar vazio.');
      return; 
    } else if (!this.validarCPF(this.dados.cpf)) {
      this.toastr.error('CPF inválido. Por favor, insira um CPF válido.');
      return; 
    }
    if (this.dados.data === '') {
      this.toastr.error('O campo CPF não pode estar vazio.');
      return; 
    } 
    
    console.log(this.dados);
    
    this.leadService.registerLead(this.dados).subscribe(
      (response: any) => {
        this.toastr.success("Dados Cadastrados", "Sucesso");
        this.resetForm();
      },
      (error: any) => {
        this.toastr.error('Ocorreu um erro ao cadastrar os dados:', error);
      }
    );
  }

  validarCPF(cpf: string): boolean {         
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 ||
        cpf === '00000000000' ||
        cpf === '11111111111' ||
        cpf === '22222222222' ||
        cpf === '33333333333' ||
        cpf === '44444444444' ||
        cpf === '55555555555' ||
        cpf === '66666666666' ||
        cpf === '77777777777' ||
        cpf === '88888888888' ||
        cpf === '99999999999') {
        return false;
    }

  
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;
    if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
        return false;
    }

  
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;
    if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
  }

  resetForm() {
    this.dados.nome = '';
    this.dados.email = '';
    this.dados.telefone = '';
    this.dados.cpf = '';
    this.dados.data = '';
  }
}
