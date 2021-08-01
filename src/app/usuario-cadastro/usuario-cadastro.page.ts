import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { ServidorService } from './../servidor.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.page.html',
  styleUrls: ['./usuario-cadastro.page.scss'],
})
export class UsuarioCadastroPage implements OnInit {
 public usuario: any = {};
 public entidade = 'Usuario';

  constructor(public servidor: ServidorService, private route: ActivatedRoute, private router: Router,
    public toastController: ToastController) { }

  InserirUsuario() {
    this.servidor.inserirService(this.usuario, this.entidade);
    this.presentToast("aguarde o Administrador lhe contatar para concluir seu acesso!")
    this.router.navigate(['/login']);
  }
  async presentToast(mensagem) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
    });
    toast.present();
  }
  ngOnInit() {
  }

}
