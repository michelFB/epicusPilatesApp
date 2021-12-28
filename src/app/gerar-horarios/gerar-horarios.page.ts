import { Horario } from './../models/horarios';
import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../servidor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Fisio } from '../models/fisio';

@Component({
  selector: 'app-gerar-horarios',
  templateUrl: './gerar-horarios.page.html',
  styleUrls: ['./gerar-horarios.page.scss'],
})
export class GerarHorariosPage implements OnInit {

  horarioAgenda = {
    diamesAno: "",
    Fisio: ""
  };
  public fisios: Fisio;
  public entidade = 'Evento';
  public entidade_Fisio = 'Fisio';
  alunoSelecionado: any;


  constructor(public servidor: ServidorService, private route: ActivatedRoute, private router: Router, public toastController: ToastController) {
  
  }

  ConsultarFisios() {
    this.servidor.consultarService(this.entidade_Fisio)
      .subscribe(
        (data: any) => {
          this.fisios = data;
          console.log(data);
        },
        (err: any) => {
          console.log(err);
        });
  }


  CadastrarHorarioMensal() {
    console.log("Este horario", this.horarioAgenda);
    const dados = {
      mes: this.horarioAgenda.diamesAno.substring(5, 7),
      ano: this.horarioAgenda.diamesAno.substring(0, 4),
      Fisio: this.horarioAgenda.Fisio };
    console.log(dados);
    this.servidor.GerarHorarioMensal(dados, this.entidade);
    this.presentToast('Marcação Realizada com Sucesso!!');
    this.router.navigate(['/horarios'])
  }

  //MENSAGEM NA TELA
  async presentToast(mensagem) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
    });
    toast.present();
  }


  ngOnInit() {
    this.ConsultarFisios();
  }

}
