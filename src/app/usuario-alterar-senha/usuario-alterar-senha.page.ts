import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServidorService } from './../servidor.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-usuario-alterar-senha',
  templateUrl: './usuario-alterar-senha.page.html',
  styleUrls: ['./usuario-alterar-senha.page.scss'],
})
export class UsuarioAlterarSenhaPage implements OnInit {

  public usuario: any = {};
  public entidade = 'Usuario';

  constructor(public servidor: ServidorService, private route: ActivatedRoute, private router: Router,
    public toastController: ToastController) { }

  AlterarSenhaUsuario() {
    // this.servidor.alteraService(this.usuario, this.entidade);
    // this.presentToast("aguarde o Administrador lhe contatar para concluir seu acesso!")
    this.router.navigate(['/home']);
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
