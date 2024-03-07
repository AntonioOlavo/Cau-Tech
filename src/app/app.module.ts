
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { SiteLeadService } from './services/site-lead-service';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    CabecalhoComponent,
    
    
  ],
  imports: [
  
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    
  ],
  
  providers: [SiteLeadService],
  bootstrap: [AppComponent]
})
export class AppModule { }



