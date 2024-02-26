import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';



@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    CabecalhoComponent
    
  ],
  imports: [
    
    //NgxMaskDirective ,  NgxMaskPipe ,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
