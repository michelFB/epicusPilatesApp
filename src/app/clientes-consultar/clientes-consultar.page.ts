import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ServidorService } from './../servidor.service';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-clientes-consultar',
  templateUrl: './clientes-consultar.page.html',
  styleUrls: ['./clientes-consultar.page.scss'],
})
export class ClientesConsultarPage implements OnInit {

  public cliente: any = [];
  public id: number;
  public entidade = 'Cliente';

  // tslint:disable-next-line:max-line-length
  constructor(public loadingController: LoadingController, public servidor: ServidorService,
    public alertController: AlertController,
    private router: Router, public navCtrl: NavController) {
    this.ConsultarClientes();
  }

  ConsultarClientes() {
    this.servidor.consultarService(this.entidade)
      .subscribe(
        (data) => {
          this.cliente = data;
          console.log('Consultando os clientes', data);
        },
        (err) => {
          console.log(err);
        });
  }

  AdicionarCliente(){
    this.router.navigate(['/cliente-cadastro']);
  }

  AtualizaCliente(clienteSelecionado) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(clienteSelecionado),
      }
    };
    this.router.navigate(['/cliente-alterar'], navigationExtras);
    this.ConsultarClientes();
  }

  HorarioCliente(clienteSelecionado) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(clienteSelecionado),
      }
    };
    this.router.navigate(['/cliente-horario'], navigationExtras);
  }

  AgendaCliente(clienteSelecionado){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(clienteSelecionado),
      }
    };
    this.router.navigate(['/cliente-agenda'], navigationExtras);
  }

  Anaminese(clienteSelecionado) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(clienteSelecionado)
      }
    };
    this.router.navigate(['/cliente-anaminese'], navigationExtras);
  }

  // async presentLoading() {
  //   const loading = await this.loadingController.create({
  //     message: 'Aguarde!',
  //     duration: 1000
  //   });
  //   await loading.present();
  //   const { role, data } = await loading.onDidDismiss();
  //   console.log('Loading dismissed!');
  // }

  ngOnInit() {
    this.ConsultarClientes();
    // this.presentLoading()
  }

 
}
