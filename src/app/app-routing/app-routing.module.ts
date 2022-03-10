import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';
import { PainelVagasComponent } from '../painel-vagas/painel-vagas.component';
import { RouterModule, Routes } from '@angular/router';

const rotas: Routes = [
  {path: 'mural',component: MuralVagasComponent},
  {path: 'painel',component: PainelVagasComponent},
  {path: '', redirectTo: '/mural', pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
