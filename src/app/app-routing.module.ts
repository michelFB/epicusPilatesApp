import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'evento', loadChildren: './evento/evento.module#EventoPageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'usuario-cadastro', loadChildren: './usuario-cadastro/usuario-cadastro.module#UsuarioCadastroPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'editar-perfil', loadChildren: './editar-perfil/editar-perfil.module#EditarPerfilPageModule' },
  { path: 'clientes-consultar', loadChildren: './clientes-consultar/clientes-consultar.module#ClientesConsultarPageModule' },
  { path: 'cliente-horario', loadChildren: './cliente-horario/cliente-horario.module#ClienteHorarioPageModule' },
  { path: 'cliente-anaminese', loadChildren: './cliente-anaminese/cliente-anaminese.module#ClienteAnaminesePageModule' },
  { path: 'cliente-cadastro', loadChildren: './cliente-cadastro/cliente-cadastro.module#ClienteCadastroPageModule' },
  { path: 'pacotes-consultar', loadChildren: './pacotes-consultar/pacotes-consultar.module#PacotesConsultarPageModule' },
  { path: 'fisio-consultar', loadChildren: './fisio-consultar/fisio-consultar.module#FisioConsultarPageModule' },
  { path: 'fisio-cadastro', loadChildren: './fisio-cadastro/fisio-cadastro.module#FisioCadastroPageModule' },
  { path: 'usuario-alterar-senha', loadChildren: './usuario-alterar-senha/usuario-alterar-senha.module#UsuarioAlterarSenhaPageModule' },
  { path: 'cliente-alterar', loadChildren: './cliente-alterar/cliente-alterar.module#ClienteAlterarPageModule' },
  { path: 'horarios', loadChildren: './horarios/horarios.module#HorariosPageModule' },
  { path: 'gerar-horarios', loadChildren: './gerar-horarios/gerar-horarios.module#GerarHorariosPageModule' },
  { path: 'fisio-alterar', loadChildren: './fisio-alterar/fisio-alterar.module#FisioAlterarPageModule' },
  // { path: 'pacotes', loadChildren: './pacotes/pacotes.module#PacotesPageModule' },
  // { path: 'horario-consulta', loadChildren: './horario-consulta/horario-consulta.module#HorarioConsultaPageModule' }
  // { path: 'cliente-consulta', loadChildren: './cliente-consulta/cliente-consulta.module#ClienteConsultaPageModule' },
  // { path: 'cliente-alteracao', loadChildren: './cliente-alteracao/cliente-alteracao.module#ClienteAlteracaoPageModule' },
  // { path: 'pacote', loadChildren: './pacote/pacote.module#PacotePageModule' },
  // { path: 'usuario-consulta', loadChildren: './usuario-consulta/usuario-consulta.module#UsuarioConsultaPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
