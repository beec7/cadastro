import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { CursoComponent } from './curso/curso.component';
import { AlunoService } from './aluno/aluno.service';
import { CursoService } from './curso/curso.service';


@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AlunoService, CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
