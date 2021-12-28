import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../servidor.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  buttonDisabled: boolean;
  entidade = 'usuario';


  constructor(public servidor: ServidorService, private router: Router) {
  }

  VerificaNivelAcesso() {
  
    console.log("Nivel de acesso: "+this.servidor.usuario.Perfil)
    if (this.servidor.usuario.Perfil == "Admin") {
      this.buttonDisabled = false;
    } else {
      this.buttonDisabled = true;
    };
    console.log("Retorno do Botão: " + this.buttonDisabled);
    
  }

  agenda() {
    this.router.navigate(['/evento']);
  }
  perfil() {
    this.router.navigate(['/perfil']);
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
  horarios(){
    this.router.navigate(['/horarios']);
  }

  ngOnInit() {
    this.VerificaNivelAcesso();

  }
}
