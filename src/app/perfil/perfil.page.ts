import { Component, OnInit } from '@angular/core';
import { Usuario } from './../models/usuario';
import { ServidorService } from './../servidor.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public usuarioLocal: Usuario;
  public id: number;
  public entidade = 'Usuario';

  constructor(public servidor: ServidorService, public loadingController: LoadingController,
    public alertController: AlertController,  private router: Router) {
    
  }


  ConsultarUsuarios() {
    this.usuarioLocal = this.servidor.usuario;
    console.log(this.usuarioLocal);
  }

  alteraUsuario(){
    this.router.navigate(['/editar-perfil']);
  }

  async confirmação(mensagem, id) {
    const alert = await this.alertController.create({
      message: mensagem,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.ngOnInit();
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            // if (id === 1) { this.servidor.AprovaUsuarioService(this.usuarioLocal.CPF, this.entidade); }
            // if (id === 2) { this.servidor.DesaprovaUsuarioService(this.usuarioLocal.CPF, this.entidade); }
            if (id === 3) { this.servidor.deletarService(this.usuarioLocal.CPF, this.entidade); }
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
    this.ConsultarUsuarios();
    console.log('Loading dismissed!');
  }

  ngOnInit() {
    this.ConsultarUsuarios();
    this.presentLoading();
  //   this.usuarioLocal = {
  //   CPF: "06054220446",
  //   Endereco: "Avenida das garças, 1110, Padre Cícero, Petrolina-PE",
  //   ID: "1",
  //   Login: "michelfb",
  //   Nome: "michel ferreira",
  //   RG: "1379672414",
  //   Senha: "1234",
  //   Telefone: "74988093117",
  //   Whatsapp: "87999011877"
  // }
    console.log('Página perfil Atualizanda!!!');
  }

}
