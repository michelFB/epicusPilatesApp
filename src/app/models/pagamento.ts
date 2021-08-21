import { Cliente } from "./cliente";

export class Pagamento {
     public IDPagamento: number;
     public cliente: Cliente;
     public PagamentoMesReferencia: string;
     public PagamentoValor: number;

     //Contrutor
     constructor(pIDPagamento: number, pCliente: Cliente, pSMRF: string,
          pPagamentoValor: number) {
          this.IDPagamento = pIDPagamento;
          this.cliente = pCliente;
          this.PagamentoMesReferencia = pSMRF;
          this.PagamentoValor = pPagamentoValor;
     }
}