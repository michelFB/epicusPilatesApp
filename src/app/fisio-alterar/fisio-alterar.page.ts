import { Component, OnInit } from '@angular/core';
import { ServidorService } from './../servidor.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pacote } from '../models/pacote';

@Component({
  selector: 'app-fisio-alterar',
  templateUrl: './fisio-alterar.page.html',
  styleUrls: ['./fisio-alterar.page.scss'],
})
export class FisioAlterarPage implements OnInit {

  public FisioAlterar: any = {};
  public entidade = 'Fisio';
  image: any;
  public formCadFisio: FormGroup;
  public fisioSelecionado: any = {};
 

  constructor(public servidor: ServidorService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
     this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.fisioSelecionado = JSON.parse(params.special);
        console.log("Meus dados:", this.fisioSelecionado);
      }
    });
  }

  AlterarFisio() {
    this.FisioAlterar = this.formCadFisio.value;
    console.log("Fisio que será atualizado:", this.FisioAlterar);
    this.alertaAlterar();
  }

  async alertaAlterar() {
    const alert = await this.alertController.create({
      message: '<strong>Tem certeza</strong> que deseja alterar seus dados?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'danger',
          handler: (blah) => {
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.servidor.alteraService(this.FisioAlterar, this.entidade);
            this.router.navigate(['/fisio-consultar']);
          }
        }
      ]
    });
    await alert.present();
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Aguarde!',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  ngOnInit() {
    this.formCadFisio = this.formBuilder.group({
      'ID': [this.fisioSelecionado.IDFisio],
      'Nome': [this.fisioSelecionado.Nome, Validators.compose([Validators.required])],
      'CPF': [this.fisioSelecionado.CPF, Validators.compose([Validators.required])],
      'RG': [this.fisioSelecionado.RG],
      'Nascimento': [this.fisioSelecionado.Nascimento],
      'Endereco': [this.fisioSelecionado.Endereco],
      'Telefone': [this.fisioSelecionado.Telefone],
      'Whatsapp': [this.fisioSelecionado.Whatsapp],
      'Email': [this.fisioSelecionado.Email],
      'Crefito': [this.fisioSelecionado.Crefito],
      'Login': [this.fisioSelecionado.Login, Validators.compose([Validators.required])],
      'Senha': [this.fisioSelecionado.Senha, Validators.compose([Validators.required])],
    });
  }

}
