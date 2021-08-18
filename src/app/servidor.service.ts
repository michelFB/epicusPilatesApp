import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from './models/usuario';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {
  
  public urlLocal = 'http://192.168.100.24:82/pilatesApp/';
  // public urlLocal = 'https://espacoepicus.000webhostapp.com/';


  public API = '';
  usuario : Usuario;
  public listausuarios = [];

  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router) { 
         
    }

  // método para logar usuário
  LoginUsuarioService(parans): any {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.urlLocal + 'API_loginUsuarios.php', parans, { headers })
  }

  rotaService(entidade) {
    console.log('root entidade', entidade);
    switch (entidade) {
      case 'Cliente': { this.API = 'API_Cliente.php'; break; }
      case 'Usuario': { this.API = 'API_Usuario.php'; break; }
      case 'Evento': { this.API = 'API_Evento.php'; break; }
      case 'Pacote': { this.API = 'API_Pacote.php'; break;}
      case 'Fisio': { this.API = 'API_Fisio.php'; break;}   
    }
  }


  //CREATE
  inserirService(dados, entidade) {
    this.rotaService(entidade);
    console.log(dados);
    const JsonDados: any = { key: 'create', dados };
    console.log('Json de criar: ', JsonDados);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.http.post(this.urlLocal + this.API, JsonDados, { headers })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  //READ
  consultarService(entidade) {
    this.rotaService(entidade);
    console.log('Dentro do Service -READ API CHAMADA', this.API);
    const JsonDados: any = { key: 'select', dados:'' };
    console.log('Json CONSULTAR', JsonDados);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.urlLocal + this.API, JsonDados, { headers }); //retorna o Json da API 
  }

  //DELETE
  deletarService(id, entidade) {
    this.rotaService(entidade);
    const JsonDados: any = { key: 'delete', dados: id };
    console.log('Json Deletar', JsonDados);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.http.post(this.urlLocal + this.API, JsonDados, { headers })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  //UPDATE
  alteraService(dados, entidade) {
    this.rotaService(entidade);
    const JsonDados: any = { key: 'update', dados };
    console.log('Json Alterar:', JsonDados);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.urlLocal + this.API, JsonDados, { headers })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  //EXLUSIVO PARA OBTER AS MARCAÇÕES POR CLIENTE
  consultarMarcacaoCliente(entidade){
    this.rotaService(entidade);
    const id = this.usuario.ID;
    const JsonDados: any = { key: 'select', dados: id };
    console.log('Json COnsultar Marcação por Cliente', JsonDados);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.urlLocal + this.API, JsonDados, { headers }); //retorna o Json da API
  }

  // CONSULTA TODOS HORARIOS DA AGENDA DE AULAS
  consultarHorarios(entidade) {
    this.rotaService(entidade);
    const id = this.usuario.ID;
    const JsonDados: any = { key: 'select_all', dados: id };
    console.log('Json COnsultar Todos Horarios', JsonDados);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.urlLocal + this.API, JsonDados, { headers }); //retorna o Json da API
  }
  
  //EXLUSIVO PARA OBTER AS MARCAÇÕES POR CLIENTE
  MarcacaoClienteMesSemana(dados, entidade) {
    this.rotaService(entidade);
    const JsonDados: any = { key: 'create_Mes_semana', dados};
    console.log('Json Marcação por Cliente na Semana', JsonDados);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.http.post(this.urlLocal + this.API, JsonDados, { headers }) //retorna o Json da API
        .subscribe(data => {
          console.log(data);
        }, error => {
          console.log(error);
        });
  }

  verificaReposicao(entidade){
    this.rotaService(entidade);
    const id = this.usuario.ID;
    const JsonDados: any = { key: 'verificaReposicao', dados: id };
    console.log('Json Consultar Reposicao', JsonDados);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.urlLocal + this.API, JsonDados, { headers }); //retorna o Json da API
  }

  VerificaCancelamento(entidade) {
    this.rotaService(entidade);
    const id = this.usuario.ID;
    const JsonDados: any = { key: 'VerificaCancelamento', dados: id };
    console.log('Json Consultar Reposicao', JsonDados);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.urlLocal + this.API, JsonDados, { headers }); //retorna o Json da API
  }

  //REPOSIÇÃO DE CLIENTE
  EfetuarReposicao(dados, entidade) {
    this.rotaService(entidade);
    console.log(dados);
    const JsonDados: any = { key: 'MarcarReposicao', dados };
    console.log('Json de criar: ', JsonDados);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.http.post(this.urlLocal + this.API, JsonDados, { headers })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  checaDiaReposto(dados, entidade) {
    this.rotaService(entidade);
    const id = this.usuario.ID;
    const JsonDados: any = { key: 'checaDiaReposto', dados };
    console.log('Json Consultar Reposicao', JsonDados);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.urlLocal + this.API, JsonDados, { headers }); //retorna o Json da API
  }


  // uploadimagem(image){
  //   const JsonDados =  image;
  //   console.log('Json salvar imagem:', JsonDados);
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //   this.http.post(this.urlLocal + 'teste.php', JsonDados, { headers }).subscribe((
  //     response:any) => {
  //       console.log(response);
  //     })
  // }


  //   ObterPerfilService(id, entidade){
  //   this.rotaService(entidade);
  //   const JsonDados: any = { key: 'obterperfil', dados: id }; //Cria o Json com os dados que que será passado para API
  //   console.log('Json Verifica Perfil de Usuario', JsonDados);
  //   console.log('Obtendo o perfil de usuário na API', this.API);

  //   return this.http.get(this.urlLocal + this.API);
  // }



  // AprovaUsuarioService(id, entidade) {
  //   this.rotaService(entidade);
  //   const JsonDados: any = { key: 'aprova', dados: id };
  //   console.log('Json APROVAR', JsonDados);
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //   this.http.post(this.urlLocal + this.API, JsonDados, { headers })
  //     .subscribe(data => {
  //       console.log(data);
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  // DesaprovaUsuarioService(id, entidade) {
  //   this.rotaService(entidade); // Escolhe a entidade que será tratada
  //   const JsonDados: any = { key: 'desaprova', dados: id }; //Cria o Json com os dados que que será passado para API
  //   console.log('Json DESAPROVAR', JsonDados);
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //   this.http.post(this.urlLocal + this.API, JsonDados, { headers })
  //     .subscribe(data => {
  //       console.log(data);
  //     }, error => {
  //       console.log(error);
  //     });
  // }



}