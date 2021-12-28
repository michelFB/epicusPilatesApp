// import { ServidorService } from './../servidor.service';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { ServidorService } from '../servidor.service';
import { LoadingController } from '@ionic/angular';
import { Evento } from '../models/evento';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-evento',
  templateUrl: 'evento.page.html',
  styleUrls: ['evento.page.scss'],
})
export class EventoPage implements OnInit {
  @ViewChild(CalendarComponent) meuCalendario: CalendarComponent;
  eventoNew: any[];
  minDate = new Date().toISOString();
  eventSource = [];
  viewTitle;
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  event: Evento;
  entidade = 'Evento';
  entidade2 = 'usuario';
  buttonDisabled: boolean;
  numRep = 0;
  numCancelamento = 0
  opcaoEventos: string = "minhas_aulas";


  constructor(public loadingController: LoadingController, public servidor: ServidorService,
    private alertCtrl: AlertController,
    public toastController: ToastController, @Inject(LOCALE_ID) private locale: string) {

  }

  // Cria um evento atraves do card****************************************************
  VerificaRep() {
    this.servidor.verificaReposicao(this.entidade)
      .subscribe(
        (data: any) => {
          // console.log(data);
          // console.log(data.Flag);
          this.numRep = data.Qtdd;
          if (parseInt(data.Flag)) {
            this.buttonDisabled = true;
          } else {
            this.buttonDisabled = false;
          };
        }, error => {
          console.log(error);
        });
  }

  VerificaCancelamento() {
    this.servidor.VerificaCancelamento(this.entidade)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.numCancelamento = data.Qtdd;
        }, error => {
          console.log(error);
        });
  }

  // Verifica se o dia selecionado já foi reposto, impedindo de cancelar
  checaDiaCancelamento(dia) {
    var data = new Date();
    var hoje = formatDate(data, 'yyyy-MM-dd HH:mm:ss', this.locale);
    var ultimoDia = new Date(data.getFullYear(), data.getMonth() + 1, 0);
    var ultimoDiaMes = formatDate(ultimoDia, 'yyyy-MM-dd HH:mm:ss', this.locale);
        console.log("Hoje ", hoje)
    this.servidor.checaDiaReposto(dia, this.entidade)
      .subscribe(
        (data: any) => {
          // console.log(data.Flag);
          if (parseInt(data.Flag)) {
            this.presentToast("Não é permitido Cancelamento de dias marcados como Reposição!");
          } else if (dia < hoje) {
            this.presentToast("Não é permitido Cancelamento de dias anteriores a data atual!");
          } else if (this.numCancelamento > 1) {
            this.presentToast("Numero máximo de Cancelamentos do mês atingido!");
          }
          else if (dia > ultimoDiaMes) {
          this.presentToast("Não é permitido Cancelamento de dias fora do mês atual!");
        }
          else { this.servidor.deletarService(dia, this.entidade); };
        }, error => {
          console.log(error);
        });
  }

  // Verifica se o dia selecionado já foi reposto, impedindo de cancelar
  checaDiaReposicao(dados) {
    var data = new Date();
    var hoje = formatDate(data, 'yyyy-MM-dd HH:mm:ss', this.locale);
    var maisUmMes = data.setDate(data.getDate() + 30);
    var UmMes = formatDate(maisUmMes, 'yyyy-MM-dd HH:mm:ss', this.locale);
    if (dados.DataHora < hoje) {
      this.presentToast("Não é permitido Marcar Reposição de dias anteriores a data atual!");
    } else if (dados.DataHora > UmMes) {
      this.presentToast("Não é permitido Marcar Reposição para dias superiores a 1 mês da data atual!");
    }
    else { this.servidor.EfetuarReposicao(dados, this.entidade); };

  }


  InserirEvento() {
    const selected = new Date(this.event.startTime);
    selected.setHours(selected.getHours() - 3);
    const dados = {
      datahora: selected,
      IDcliente: this.servidor.usuario.ID,
      Reposicao: this.event.Reposicao ? 1 : 0
    };
    console.log(dados.Reposicao);
    this.servidor.inserirService(dados, this.entidade);
    this.ngOnInit();
  }

  // Consulta todas as aulas para Reposição *************************************************
  ConsultarTodasAulas() {
    this.opcaoEventos = "reposicao";
    this.servidor.consultarHorarios(this.entidade)
      .subscribe(
        (data: any) => {
          this.eventSource = [];
          // console.log('Conteudo de data', data);
          for (let i = 0; i < data.length; i++) {
            const selected = new Date(data[i].HorDataHora);
            const startTime = selected.toISOString();
            selected.setHours(selected.getHours() + 1);
            const endTime = (selected.toISOString())
            const eventAtual = new Evento("", "", "", selected, selected, "");
            if (data[i].HorVagas == 0 || data[i].HorVagas == 3) {
              eventAtual.id = "";
              eventAtual.title = "INDISPONIVEL";
              eventAtual.startTime = new Date(startTime);
              eventAtual.endTime = new Date(endTime);
              eventAtual.desc = "";
            } else {
              eventAtual.id = "";
              eventAtual.title = "DISPONIVEL PARA REPOSIÇÃO - VAGAS: " + data[i].HorVagas,
                eventAtual.startTime = new Date(startTime);
              eventAtual.endTime = new Date(endTime);
              eventAtual.desc = "";
            }
            // console.log('Listando todos os eventos: ' + i, eventCopy);
            this.eventSource.push(eventAtual);
          }
          this.meuCalendario.loadEvents();
        },
        (err: any) => {
          console.log(err);
        });
  }

  // Consulta um evento **************************************************************************
  ConsultarEvento() {
    this.opcaoEventos = "minhas_aulas";
    this.servidor.consultarMarcacaoCliente(this.entidade)
      .subscribe(
        (data: any) => {
          this.eventSource = [];
          this.eventoNew = data;
          for (let i = 0; i < this.eventoNew.length; i++) {
            const selected = new Date(this.eventoNew[i].HorDataHora);
            const startTime = selected.toISOString();
            selected.setHours(selected.getHours() + 1);
            const endTime = (selected.toISOString())
            const eventCopy = {
              id: "",
              title: "VOCÊ TEM AULA",
              startTime: new Date(startTime),
              endTime: new Date(endTime),
              desc: ""
            };
            // console.log('Listando todos os eventos: ' + i, eventCopy);
            this.eventSource.push(eventCopy);
          }
          this.meuCalendario.loadEvents();
        },
        (err: any) => {
          console.log(err);
        });
  }
  // // Change current month/week/day
  next() {
    // const swiper = document.querySelector('.swiper-container').swiper;
    // swiper.slideNext();
  }

  back() {
    // const swiper = document.querySelector('.swiper-container').swiper;
    // swiper.slidePrev();
  }
  // Change between month/week/day
  changeMode(mode) {
    this.calendar.mode = mode;
  }
  // Focus today
  today() {
    this.calendar.currentDate = new Date();
  }
  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // Evento de seleção de um Horário
  async onEventSelected(event) {
    const start = formatDate(event.startTime, 'yyyy-MM-dd HH:mm:ss', this.locale);
    const end = formatDate(event.endTime, 'yyyy-MM-dd', this.locale);

    // SE O USUARIO SELECIONOU UM HORARIO NA TELA DE "MINHAS AULAS"
    if (this.opcaoEventos == "minhas_aulas") {

      const alert = await this.alertCtrl.create({
        header: "DESEJA CANCELAR ESTA AULA? ",
        message: "Desta Forma você não perderá sua aula e poderá "
          + "remarcá-la até o prazo máximo de 1 mês apartir desta data.",
        buttons: [
          {
            text: 'Cancelar',
            role: 'excluir',
            cssClass: 'secondary',
            handler: () => {
              this.checaDiaCancelamento(start);
              // this.servidor.deletarService(start, this.entidade);
              this.ngOnInit();
            }
          }, {
            text: 'Voltar',
            handler: (blah) => {
            }
          }
        ]
      });
      alert.present();
    } else
    // CASO CONTRÁRIO O USUARIO SELECIONOU UM HORARIO NA TELA DE "REPOSIÇÃO"
    {
      const dados = {
        IDCliente: this.servidor.usuario.ID,
        DataHora: start
      }; // DADOS ARA REPOSIÇÃO

      const alert = await this.alertCtrl.create({
        header: "DESEJA MARCAR ESTA AULA COMO REPOSIÇÃO? ",
        message: "Desta Forma você não perderá suas reposições.",
        buttons: [
          {
            text: 'Marcar',
            role: 'Marcar',
            cssClass: 'secondary',
            handler: () => {
              this.checaDiaReposicao(dados);
              // this.servidor.EfetuarReposicao(dados, this.entidade);
              this.ngOnInit();
            }
          }, {
            text: 'Voltar',
            handler: (blah) => {
            }
          }
        ]
      });
      alert.present();
    }
  }

  // Evento chamado ao clicar no calendário - Atualiza StartTime e EndTime
  onTimeSelected(ev) {
    const selected = new Date(ev.selectedTime);
    this.event.startTime = selected;
    // console.log("Data atual: ", this.event.startTime);
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = selected;
  }

  resetEvent() {
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Atualizando!',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.ConsultarEvento();
    console.log('Loading dismissed!');
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
    this.resetEvent();
    this.ConsultarEvento();
    this.presentLoading();
    this.VerificaRep();
    this.VerificaCancelamento();
    console.log('Página de Eventos Carregada!');
  }
}
