import { AppRoutingModuleModule } from './app-routing-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ConsultaService } from './consulta/consulta.service';
import { ResumoService } from './resumo/resumo.service';
import { FaturamentoService } from './faturamento/faturamento.service';

import { AppComponent } from './app.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { ResumoComponent } from './resumo/resumo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsultaPorEspecialidadeComponent } from './consulta/consulta-por-especialidade/consulta-por-especialidade.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelSimplesComponent,
    BarraNavegacaoComponent,
    MenuLateralComponent,
    ResumoComponent,
    ConsultaComponent,
    ConsultaPorEspecialidadeComponent,
    FaturamentoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModuleModule,
    HttpClientModule
  ],
  providers: [ResumoService, ConsultaService, FaturamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
