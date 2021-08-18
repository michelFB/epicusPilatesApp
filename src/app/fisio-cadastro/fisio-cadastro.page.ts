import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServidorService } from './../servidor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fisio-cadastro',
  templateUrl: './fisio-cadastro.page.html',
  styleUrls: ['./fisio-cadastro.page.scss'],
})
export class FisioCadastroPage implements OnInit {

  public Fisio: any = {};
  public myDate = new Date().toISOString();
  public entidade = 'Fisio';
  ionicForm: FormGroup;

  constructor(public servidor: ServidorService,
    public formBuilder: FormBuilder,
    private router: Router) {
  }
  InserirFisios() {
    console.log(this.Fisio);
    this.servidor.inserirService(this.Fisio, this.entidade);
    this.router.navigate(['/fisio-consultar']);
  }

  showdate() {
    console.log(this.myDate);
  }

  ngOnInit() {
  }

}
