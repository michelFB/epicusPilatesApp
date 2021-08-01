import { Component, OnInit } from '@angular/core';
import { Usuario } from './../models/usuario';
import { ServidorService } from './../servidor.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
public usuarioLocal: Usuario;
public usuarioAlterar: any = {};
public entidade = 'Usuario';
image: any;

  constructor(public servidor: ServidorService, public loadingController: LoadingController,
    public alertController: AlertController, private router: Router) {
      
  }


  // selectedFile(event) {
  //   this.image = event.target.files[0];
  // }
  // onClick(){
  //   const formData = new FormData();
  //   formData.append('image', this.image);
  //   this.servidor.uploadimagem(formData);
  // }

  AlterarUsuario() {
    this.usuarioAlterar = this.usuarioLocal;
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
            console.log('esse é o que ta indo pro banco', this.usuarioAlterar);
            this.servidor.alteraService(this.usuarioAlterar, this.entidade);
            this.router.navigate(['/perfil']);
          }
        }
      ]
    });
    await alert.present();
  }


  ngOnInit() {
    // this.usuarioLocal = {
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
    this.usuarioLocal = this.servidor.usuario;
    console.log(this.usuarioLocal);
  }
  

}
