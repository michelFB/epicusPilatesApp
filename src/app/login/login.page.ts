import { ServidorService } from './../servidor.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { Component, ViewChild, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from '../models/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public usuario: any = {};
  public usuarioAuxiliar: any = [];

  constructor(public loadingController: LoadingController, public servidor: ServidorService,
    public alertController: AlertController, private route: ActivatedRoute,
    private router: Router, public toastController: ToastController) {
    this.fazerLogin()
    
  }

  // FAZER LOGIN
  fazerLogin() {
    const autentica = {
      // login: this.usuario.login,
      // senha: this.usuario.senha
      login: "michelfb", 
      senha: "1234"
    };
    console.log("Dados de Autenticação",autentica);
    this.servidor.LoginUsuarioService(autentica)
      .subscribe(data => {       
        // this.usuarioAuxiliar = data;
        this.servidor.usuario = data;
        console.log(this.servidor.usuario);
        console.log('Usuario encontrado, Logando com Sucesso!! ');
        this.router.navigate(['/home']);
      }, error => {
        console.log(error);
        console.log('Usuario não encontrado!!! ');
        this.presentToast("Usuario não encontrado!");
      });
    
  }
  // CADASTRAMENTO 
  fazerCadastramento() {
    this.router.navigate(['/usuario-cadastro']);
  }

  //MENSAGEM NA TELA
  async presentToast(mensagem) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
    });
    toast.present();
  }

  // TELA DE CARREGAMENTO
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Aguarde!',
      duration: 1000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    // this.ConsultarPacotes();
    // console.log('Loading dismissed!');
  }

  ngOnInit() {
    this.presentLoading();
    // console.log('Página login Atualizanda!!!');
  }

}
