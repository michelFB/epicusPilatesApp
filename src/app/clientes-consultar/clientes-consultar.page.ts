import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ElementRef } from '@angular/core/src/linker/element_ref';
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
    public alertController: AlertController, private route: ActivatedRoute,
    private router: Router, public navCtrl: NavController) {
    this.ConsultarClientes();
  }

  AdicionarCliente(){
    this.router.navigate(['/cliente-cadastro']);
    // this.navCtrl.navigateForward(['cliente-horario'], navigationExtras);
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

  HorarioCliente(clienteSelecionado) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(clienteSelecionado),
      }
    };
    this.router.navigate(['/cliente-horario'], navigationExtras);
    // this.navCtrl.navigateForward(['cliente-horario'], navigationExtras);

  }

  Anaminese(clienteSelecionado) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(clienteSelecionado)
      }
    };
    this.router.navigate(['/cliente-anaminese'], navigationExtras);
  }

  DeletaCliente(cliente) {
    this.id = cliente.CPF;
    this.alertaDeletar();
  }

  async alertaDeletar() {
    const alert = await this.alertController.create({
      message: 'Tem certeza que deseja excluir esse <strong>cliente</strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.servidor.deletarService(this.id, this.entidade);
            this.ngOnInit();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Aguarde!',
      duration: 1000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


  ngOnInit() {
    this.ConsultarClientes();
    // this.presentLoading()
  }

 
}
