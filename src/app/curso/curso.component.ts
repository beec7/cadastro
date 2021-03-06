import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursoAtual: String = "";

  curso: any;
  cursos: any [] = []; 

  constructor(private service: CursoService) { }

  ngOnInit() {
    this.curso = new Object();
    this.cursos =  this.service.getCursos();
  }

  cursoTurma(valor: String) {
    this.cursoAtual = valor;

  }

  onSubmit(formularioCurso: NgForm) {
    if (formularioCurso.valid) {
  
      console.log(this.curso);

      this.service.salvar(this.curso)
      this.curso = new Object();
      //this.cursos =  this.service.getCursos();
    }
  }
  getCursos(){
    return this.service.getCursos();
  }

}
