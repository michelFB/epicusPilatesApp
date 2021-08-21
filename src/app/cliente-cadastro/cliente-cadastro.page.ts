import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServidorService } from './../servidor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../models/cliente';
import { Pacote } from '../models/pacote';
@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.page.html',
  styleUrls: ['./cliente-cadastro.page.scss'],
})
export class ClienteCadastroPage implements OnInit {

  public cliente: Cliente;
  public Teste: Cliente;
  public pacotes: Pacote;
  public myDate = new Date().toISOString();
  public entidade_Cliente = 'Cliente';
  public entidade_Pacote = 'Pacote';
  public formCadCliente: FormGroup;

  constructor(public servidor: ServidorService, public formBuilder: FormBuilder,
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
    this.cliente = this.formCadCliente.value;
    console.log("Novo Cliente que será cadastrado no banco -->>: ", this.cliente.pacote);
    this.servidor.inserirService(this.cliente, this.entidade_Cliente);
    this.router.navigate(['/clientes-consultar']);
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
    this.ConsultarPacotes();
  }
}
