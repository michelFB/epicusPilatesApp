import { Fisio } from "./fisio";

export class Salario{
     public IDSalario: number;
     public fisio: Fisio;
     public SalarioMesReferencia: string;
     public SalarioValor : number;
     
     //Contrutor
     constructor(pIDSalario: number, pFisio: Fisio, pSMRF : string,
           pSalarioValor: number) {
          this.IDSalario = pIDSalario;
          this.fisio = pFisio;
          this.SalarioMesReferencia = pSMRF;
          this.SalarioValor = pSalarioValor;
     }
}