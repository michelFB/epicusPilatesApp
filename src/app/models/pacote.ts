export class Pacote {
     public Id: string;
     public Descricao: string;
     public Periodo: string;
     public Naula: Date;
     public Valor: Date;


     // constructor(){}
     constructor(a: string, b: string, c: string, d: Date, e: Date) {
          this.Id = a;
          this.Descricao = b;
          this.Periodo = c;
          this.Naula = d;
          this.Valor = e;
     }

}
