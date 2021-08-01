export class Usuario {
   public ID: string;
   public login: string;
   public senha: string;
   public nome: string;
   public CPF: string;
   public RG: string;
   public endereco: string;
   public telefone: string;
   public whatsapp: string;

   constructor(a: string, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: string) {
      this.ID = a;
      this.login = b;
      this.senha = c;
      this.nome = d;
      this.CPF = e;
      this.RG = f;
      this.endereco = g;
      this.telefone = h;
      this.whatsapp = i;
   }
}
