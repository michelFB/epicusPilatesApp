import { Cliente } from './../models/cliente';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './../models/usuario';
import { ServidorService } from './../servidor.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-alterar',
  templateUrl: './cliente-alterar.page.html',
  styleUrls: ['./cliente-alterar.page.scss'],
})
export class ClienteAlterarPage implements OnInit {
  public usuarioAlterar: any = {};
  public entidade = 'Cliente';
  image: any;
  public formCadCliente: FormGroup;
  public alunoSelecionado: any = {};

  constructor(public servidor: ServidorService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.alunoSelecionado = JSON.parse(params.special);
        console.log("Meus dados:", this.alunoSelecionado);
      }
    });
  }

  AlterarUsuario() {
    this.usuarioAlterar = this.formCadCliente.value;
    console.log("Cliente que será atualizado:", this.usuarioAlterar);
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
            this.servidor.alteraService(this.usuarioAlterar, this.entidade);
            this.router.navigate(['/clientes-consultar']);
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
    this.formCadCliente = this.formBuilder.group({
      'ID': [this.alunoSelecionado.IDCliente],
      'Nome': [this.alunoSelecionado.Nome, Validators.compose([Validators.required])],
      'CPF': [this.alunoSelecionado.CPF, Validators.compose([Validators.required])],
      'RG': [this.alunoSelecionado.RG],
      'Nascimento': [this.alunoSelecionado.Nascimento],
      'Endereco': [this.alunoSelecionado.Endereco],
      'Telefone': [this.alunoSelecionado.Telefone],
      'Whatsapp': [this.alunoSelecionado.Whatsapp],
      'Email': [this.alunoSelecionado.Email],
      'Login': [this.alunoSelecionado.Login, Validators.compose([Validators.required])],
      'Senha': [this.alunoSelecionado.Senha, Validators.compose([Validators.required])],
    });
  }

}
