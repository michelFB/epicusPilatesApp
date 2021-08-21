import { Usuario } from './usuario';

export class Fisio extends Usuario {
     public crefito: string;

     //Contrutor
     constructor(pID: number, pLogin: string, pSenha: string, pNome: string,
          pCPF: string, pRG: string, pNascimento: string, pEndereco: string,
          pTelefone: string, pWhatsapp: string, pEmail: string,pCrefito: string) {
          super(pID, pLogin, pSenha, pNome, pCPF, pRG, pNascimento, pEndereco,
               pTelefone, pWhatsapp, pEmail);
          this.crefito = pCrefito;
     }
}