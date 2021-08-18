import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../servidor.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
  constructor(public servidor: ServidorService, private router: Router) {
  }

  agenda(){
   this.router.navigate(['/evento']);
  }
  alunos() {
    this.router.navigate(['/clientes-consultar']);
  }
  fisios() {
    this.router.navigate(['/fisio-consultar']);
  }
  pacotes() {
    this.router.navigate(['/pacotes-consultar']);
  }
  pagamentos() {
    this.router.navigate(['/evento']);
  }
  salarios() {
    this.router.navigate(['/evento']);
  }







  ngOnInit() {
  }


}
