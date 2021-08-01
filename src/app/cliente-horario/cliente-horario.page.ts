import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../servidor.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-cliente-horario',
  templateUrl: './cliente-horario.page.html',
  styleUrls: ['./cliente-horario.page.scss'],
})
export class ClienteHorarioPage implements OnInit {

  horarioAgenda = {
    mesAno: "",
    horario: "",
    diaSemana: 0
  };
  public entidade = 'Evento';
  alunoSelecionado: any;


  constructor(public servidor: ServidorService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.alunoSelecionado = JSON.parse(params.special);
        console.log("Meus dados:", this.alunoSelecionado); }})
  }

  CadastrarHorario(){
    console.log("Este horario",this.horarioAgenda);
    // const teste: string = "2021-07";
    // console.log("substring ", teste.substring(0,4));
    // const mesAno: string = this.horarioAgenda.mesAno.toDateString();
    const dados = {
      aluno: this.alunoSelecionado.IDCliente,
      mes: this.horarioAgenda.mesAno.substring(5,7),
      ano: this.horarioAgenda.mesAno.substring(0,4),
      hora: this.horarioAgenda.horario.substring(11,13),
      semana: this.horarioAgenda.diaSemana
    };
    console.log(dados);
    this.servidor.MarcacaoClienteMesSemana(dados, this.entidade);
    this.ngOnInit();
  }

  ngOnInit() {
  }

}
