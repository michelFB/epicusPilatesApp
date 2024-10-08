import { Component, OnInit } from '@angular/core';
import { Usuario } from './../models/usuario';
import { ServidorService } from './../servidor.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  public usuarioAlterar: any = {};
  public entidade = 'Usuario';
  image: any;
  public formCadCliente: FormGroup;

  constructor(public servidor: ServidorService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public formBuilder: FormBuilder,
    private router: Router) {
    this.formCadCliente = this.formBuilder.group({
      'ID': [this.servidor.usuario.ID],
      'Nome': [this.servidor.usuario.Nome, Validators.compose([Validators.required])],
      'CPF': [this.servidor.usuario.CPF, Validators.compose([Validators.required])],
      'RG': [this.servidor.usuario.RG],
      'Nascimento': [this.servidor.usuario.Nascimento],
      'Endereco': [this.servidor.usuario.Endereco],
      'Telefone': [this.servidor.usuario.Telefone],
      'Whatsapp': [this.servidor.usuario.Whatsapp],
      'Email': [this.servidor.usuario.Email],
      'Login': [this.servidor.usuario.Login, Validators.compose([Validators.required])],
      'Senha': [this.servidor.usuario.Senha, Validators.compose([Validators.required])],
    });
  }

  AlterarUsuario() {
    this.usuarioAlterar = this.formCadCliente.value;
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
            this.servidor.usuario = this.usuarioAlterar;
            console.log('Estes são os dados de Update do usuario', this.servidor.usuario);
            this.servidor.alteraService(this.usuarioAlterar, this.entidade);
            this.router.navigate(['/perfil']);
            
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

  }


}
