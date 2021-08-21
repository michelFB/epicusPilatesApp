export class Pacote {
     private _Id: number;
     private _Descricao: string;
     private _Naula: number;
     private _Periodo: string;
     private _Valor: number;


     // constructor
     constructor(a: number, b: string, c: number, d: string, e: number) {
          this.Id = a;
          this.Descricao = b;
          this.Naula = c;
          this.Periodo = d;
          this.Valor = e;
     }

     public get Id(): number {
          return this._Id;
     }
     public set Id(value: number) {
          this._Id = value;
     }

     public get Descricao(): string {
          return this._Descricao;
     }
     public set Descricao(value: string) {
          this._Descricao = value;
     }

     public get Naula(): number {
          return this._Naula;
     }
     public set Naula(value: number) {
          this._Naula = value;
     }
     public get Periodo(): string {
          return this._Periodo;
     }
     public set Periodo(value: string) {
          this._Periodo = value;
     }

     public get Valor(): number {
          return this._Valor;
     }
     public set Valor(value: number) {
          this._Valor = value;
     }




}
