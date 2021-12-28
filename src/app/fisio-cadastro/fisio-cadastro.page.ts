import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServidorService } from './../servidor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fisio } from '../models/fisio';
@Component({
  selector: 'app-fisio-cadastro',
  templateUrl: './fisio-cadastro.page.html',
  styleUrls: ['./fisio-cadastro.page.scss'],
})
export class FisioCadastroPage implements OnInit {

  public fisio: Fisio;
  public Teste: Fisio;
  public myDate = new Date().toISOString();
  public entidade_Fisio = 'Fisio';
  public formCadFisio: FormGroup;

  constructor(public servidor: ServidorService, public formBuilder: FormBuilder,
    private router: Router) {
    this.formCadFisio = this.formBuilder.group({
      'Nome': [null, Validators.compose([Validators.required])],
      'CPF': [null, Validators.compose([Validators.required])],
      'RG': [null],
      'Nascimento': [null],
      'Endereco': [null],
      'Telefone': [null],
      'Whatsapp': [null],
      'Email': [null],
      'Crefito': [null],
      'Login': [null, Validators.compose([Validators.required])],
      'Senha': [null, Validators.compose([Validators.required])],
    });
  
  }

  InserirFisios() {
    this.fisio = this.formCadFisio.value;
    this.servidor.inserirService(this.fisio, this.entidade_Fisio);
    this.router.navigate(['/fisio-consultar']);
  }

 
  ngOnInit() {
   
  }

}
