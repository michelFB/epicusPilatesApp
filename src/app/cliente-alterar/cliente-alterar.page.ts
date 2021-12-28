import { Component, OnInit } from '@angular/core';
import { ServidorService } from './../servidor.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pacote } from '../models/pacote';

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
  public pacotes: Pacote;
  public entidade_Pacote = 'Pacote';

  constructor(public servidor: ServidorService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.ConsultarPacotes();
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

  DeletaCliente() {
    this.alertaDeletar();
  }

  async alertaDeletar() {
    const alert = await this.alertController.create({
      message: 'Tem certeza que deseja excluir esse <strong>cliente</strong>?',
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
            this.servidor.deletarService(this.alunoSelecionado.IDCliente, this.entidade);
            this.router.navigate(['/clientes-consultar']);
          }
        }
      ]
    });
    await alert.present();
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


  ConsultarPacotes() {
    this.servidor.consultarService(this.entidade_Pacote)
      .subscribe(
        (data: any) => {
          this.pacotes = data;
          console.log(data);
        },
        (err: any) => {
          console.log(err);
        });
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
      'Pacote': [this.alunoSelecionado.Pacote, Validators.compose([Validators.required])],
      'Contrato': [this.alunoSelecionado.Contrato],
      'Login': [this.alunoSelecionado.Login, Validators.compose([Validators.required])],
      'Senha': [this.alunoSelecionado.Senha, Validators.compose([Validators.required])],
    });
  }

}
