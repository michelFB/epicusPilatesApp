import { Pacote } from './pacote';
import { Usuario } from './usuario';

export class Cliente extends Usuario {
     public pacote: Pacote;
     public contrato: string;
    
     
     //Contrutor
     constructor(pID: number, pLogin: string, pSenha: string, pNome: string,
          pCPF: string, pRG: string, pNascimento: string, pEndereco: string,
          pTelefone: string, pWhatsapp: string, pEmail: string, pPerfil: string,
          pPacote: Pacote, pContrato: string) {
          super(pID, pLogin, pSenha, pNome, pCPF, pRG, pNascimento, pEndereco,
               pTelefone, pWhatsapp, pEmail, pPerfil);
          this.pacote = pPacote;
          this.contrato = pContrato;
     }
}