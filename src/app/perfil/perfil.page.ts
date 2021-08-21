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
  public id: number;
  public entidade = 'Usuario';

  constructor(public servidor: ServidorService, public loadingController: LoadingController,
    public alertController: AlertController,  private router: Router) {
  }


  alteraUsuario(){
    this.router.navigate(['/editar-perfil']);
  }

  ngOnInit() {

    console.log('Página perfil Atualizanda!!!');
  }

}
