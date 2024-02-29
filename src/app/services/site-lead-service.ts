import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteLeadService {

  constructor() { }

  // Método para simular uma solicitação de rota
  registerLead(dados:any): Observable<any> {
    // Aqui você pode simular qualquer lógica de obtenção de dados
    // Neste exemplo, estamos apenas retornando uma rota fixa
   
    
    
    // Usando o operador `of` para retornar um Observable imediatamente com a rota
    return of({statusCode:201});
  }
}
