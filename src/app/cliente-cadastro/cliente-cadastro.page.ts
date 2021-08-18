import {Router, ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServidorService } from './../servidor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public formCadCliente: FormGroup;

  constructor(public servidor: ServidorService,
    public formBuilder: FormBuilder,
    private router: Router) {
    this.formCadCliente = this.formBuilder.group({
      'Nome': [null, Validators.compose([Validators.required])],
      'CPF': [null, Validators.compose([Validators.required])],
      'RG': [null],
      'Nascimento': [null],
      'Endereco': [null],
      'Telefone': [null],
      'Whatsapp': [null],
      'Email': [null],
      'Pacote': [null, Validators.compose([Validators.required])],
      'Login': [null, Validators.compose([Validators.required])],
      'Senha': [null, Validators.compose([Validators.required])],

    });
      this.ConsultarPacotes();
    
  }
  InserirClientes() {
    // console.log(this.formCadCliente.value);
    this.cliente = this.formCadCliente.value;
    console.log("o cliente que vai: ",this.cliente);

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
    this.ConsultarPacotes();
  }
}
