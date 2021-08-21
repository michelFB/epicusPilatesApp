import { Fisio } from "./fisio";

export class Horario{
     public IDHorario: number;
     public fisio: Fisio;
     public DataHora: string;
     public HorarioVagas : number;
     
     //Contrutor
     constructor(pIDHorario: number, pFisio: Fisio, pDataHora : string,
           pHorarioVagas: number) {
          this.IDHorario = pIDHorario;
          this.fisio = pFisio;
          this.DataHora = pDataHora;
          this.HorarioVagas = pHorarioVagas;
     }
}