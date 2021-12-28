import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServidorService } from './../servidor.service';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-fisio-consultar',
  templateUrl: './fisio-consultar.page.html',
  styleUrls: ['./fisio-consultar.page.scss'],
})
export class FisioConsultarPage implements OnInit {

  public Fisio: any = [];
  public id: number;
  public entidade = 'Fisio';

  // tslint:disable-next-line:max-line-length
  constructor(
    public loadingController: LoadingController,
    public servidor: ServidorService,
    public alertController: AlertController,
    private router: Router,
    public navCtrl: NavController) {
    this.ConsultarFisios();
  }

  AdicionarFisio() {
    this.router.navigate(['/fisio-cadastro']);
  }

  ConsultarFisios() {
    this.servidor.consultarService(this.entidade)
      .subscribe(
        (data) => {
          this.Fisio = data;
          console.log('Consultando as Fisios', data);
        },
        (err) => {
          console.log(err);
        });
  }

  HorarioFisio(FisioSelecionado) {
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     special: JSON.stringify(FisioSelecionado),
    //   }
    // };
    // this.router.navigate(['/Fisio-horario'], navigationExtras);
   }

  AtualizaFisio(FisioSelecionado){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(FisioSelecionado),
      }
    };
    this.router.navigate(['/fisio-alterar'], navigationExtras);
    this.ConsultarFisios();
  }

  DeletaFisio(Fisio) {
    this.id = Fisio.CPF;
    this.alertaDeletar();
  }

  async alertaDeletar() {
    const alert = await this.alertController.create({
      message: 'Tem certeza que deseja excluir esse <strong>Fisio</strong>?',
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
    this.ConsultarFisios();
    // this.presentLoading()
  }

}
