import {Router, ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServidorService } from './../servidor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MaskPipe } from 'ngx-mask';


@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.page.html',
  styleUrls: ['./cliente-cadastro.page.scss'],
})
export class ClienteCadastroPage implements OnInit {

  public cliente: any = {};
  public pacotes: any[];
  public myDate = new Date().toISOString();
  public entidade = 'Cliente';
  public entidade2 = 'Pacote';
  ionicForm: FormGroup;

  constructor(public servidor: ServidorService,
    // private maskPipe: MaskPipe, 
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.ConsultarPacotes();
  }
  InserirClientes() {
    // console.log(this.cliente);
    this.servidor.inserirService(this.cliente, this.entidade);
    this.router.navigate(['/clientes-consultar']);
  }

   ConsultarPacotes() {
    this.servidor.consultarService(this.entidade2)
      .subscribe(
      (data: any) => {
        this.pacotes = data;
        console.log(data);
      },
      (err: any) => {
        console.log(err);
      });
  }

  showdate() {
    console.log(this.myDate);
  }

  ngOnInit() {
  }
}
