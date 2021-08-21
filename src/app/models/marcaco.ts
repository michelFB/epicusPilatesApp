import { Cliente } from "./cliente";
import { Horario } from './horarios';

export class Marcacao {
     public cliente: Cliente;
     public horario: Horario;
     public DataHora: string;
     public Reposicao: boolean;
     public Cancelamento: boolean;

     //Contrutor
     constructor(pHorario: Horario, pDataHora: string, pReposicao: boolean,
          pCancelamento: boolean) {
          this.horario = pHorario;
          this.DataHora = pDataHora;
          this.Reposicao = pReposicao;
          this.Cancelamento = pCancelamento;
     }
}