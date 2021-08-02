import { Component, OnInit } from '@angular/core';
import { ServidorService } from './../servidor.service';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { LoadingController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Pacote } from '../models/pacote';

@Component({
  selector: 'app-pacotes-consultar',
  templateUrl: './pacotes-consultar.page.html',
  styleUrls: ['./pacotes-consultar.page.scss'],
})
export class PacotesConsultarPage implements OnInit {

  public entidade = 'Pacote';
  public pacotes: any = [];
  public pacote: Pacote;

  public id: number;

  constructor(public loadingController: LoadingController, public servidor: ServidorService,
    private alertController: AlertController, private route: ActivatedRoute,
    private router: Router, public navCtrl: NavController) { }


  ConsultarPacotes() {
    this.servidor.consultarService(this.entidade)
      .subscribe(
        (data) => {
          this.pacotes = data;
          console.log('Consultando os Pacotes', data);
        },
        (err) => {
          console.log(err);
        });
  }
// this.servidor.alteraService(this.usuarioAlterar, this.entidade);
  EditarPacote(pacotes){
    this.pacote = pacotes;
    this.alertEditar();
  }
async alertEditar() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Alterar Pacote',
    inputs: [
      {
        name: 'descricao',
        type: 'text',
        placeholder: 'Descrição',
        value: this.pacote.Descricao
      },
      {
        name: 'periodo',
        type: 'text',
        // value: 'hello',
        placeholder: 'Período',
        value: this.pacote.Periodo
      },

      {
        name: 'aulas',
        type: 'number',
        min: 0,
        max: 5,
        placeholder: 'Número de Aulas',
        value: this.pacote.Naula
      },
      {
        name: 'valor',
        type: 'number',
        placeholder: 'Valor',
        value: this.pacote.Valor
      }

    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: data => {
          this.pacote = new Pacote(this.pacote.Id, data.descricao, data.periodo, data.aulas, data.valor);
          console.log(this.pacote);
          this.servidor.alteraService(this.pacote, this.entidade);
          this.ngOnInit();
          console.log('Confirm Ok');
        }
      }
    ]
  });
  await alert.present();
}

  AdicionarPacote() {
    this.alertAdicionar();
  }
  async alertAdicionar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Novo Pacote',
      inputs: [
        {
          name: 'descricao',
          type: 'text',
          placeholder: 'Descrição'
        },
        {
          name: 'periodo',
          type: 'text',
          // value: 'hello',
          placeholder: 'Período'
        },

        {
          name: 'aulas',
          type: 'number',
          min: 0,
          max: 5,
          placeholder: 'Número de Aulas'
        },
        {
          name: 'valor',
          type: 'number',
          placeholder: 'Valor'
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            console.log("data",data);
            this.pacote = new Pacote("", data.descricao, data.periodo, data.aulas, data.valor);
            console.log(this.pacote);
            this.servidor.inserirService(this.pacote, this.entidade);
            this.ngOnInit();
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  DeletaPacote(pacote) {
    this.id = pacote.Id;
    this.alertaDeletar();
  }

  async alertaDeletar() {
    const alert = await this.alertController.create({
      message: 'Tem certeza que deseja excluir esse <strong>Pacote</strong>?',
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

  ngOnInit() {
    this.ConsultarPacotes();
  }

}
