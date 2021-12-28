import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { ServidorService } from '../servidor.service';
import { LoadingController } from '@ionic/angular';
import { Evento } from '../models/evento';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-agenda',
  templateUrl: './cliente-agenda.page.html',
  styleUrls: ['./cliente-agenda.page.scss'],
})
export class ClienteAgendaPage implements OnInit {

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
  alunoSelecionado: any;


  constructor(public loadingController: LoadingController, public servidor: ServidorService,
    private alertCtrl: AlertController, private route: ActivatedRoute,
    public toastController: ToastController, @Inject(LOCALE_ID) private locale: string) {

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.alunoSelecionado = JSON.parse(params.special);
        console.log("Meus dados:", this.alunoSelecionado);
      }
    })
  }

 
  // Consulta um evento **************************************************************************
  ConsultarEvento() {
    this.opcaoEventos = "minhas_aulas";
    this.servidor.consultarMarcacaoCliente(this.entidade, this.alunoSelecionado.IDCliente)
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
    // this.VerificaRep();
    // this.VerificaCancelamento();
    console.log('Página de Eventos Carregada!');
  }
}
