export class Usuario {
   private _ID: number;
   private _Login: string;
   private _Senha: string;
   private _Nome: string;
   private _CPF: string;
   private _RG: string
   private _Nascimento: string;
   private _Endereco: string;
   private _Telefone: string;
   private _Whatsapp: string;
   private _Email: string;
   private _Perfil: string;

   constructor(pID: number, pLogin: string, pSenha: string, pNome: string,
      pCPF: string, pRG: string, pNascimento: string, pEndereco: string,
      pTelefone: string, pWhatsapp: string, pEmail: string, pPerfil: string) {
      this.ID = pID;
      this.Login = pLogin;
      this.Senha = pSenha;
      this.Nome = pNome;
      this.CPF = pCPF;
      this.RG = pRG;
      this.Nascimento = pNascimento;
      this.Endereco = pEndereco;
      this.Telefone = pTelefone;
      this.Whatsapp = pWhatsapp;
      this.Email = pEmail;
      this.Perfil = pPerfil;
   }

   public get ID(): number {
      return this._ID;
   }
   public set ID(value: number) {
      this._ID = value;
   }
   public get Login(): string {
      return this._Login;
   }
   public set Login(value: string) {
      this._Login = value;
   }
   public get Senha(): string {
      return this._Senha;
   }
   public set Senha(value: string) {
      this._Senha = value;
   }
   public get Nome(): string {
      return this._Nome;
   }
   public set Nome(value: string) {
      this._Nome = value;
   }
   public get CPF(): string {
      return this._CPF;
   }
   public set CPF(value: string) {
      this._CPF = value;
   }
   public get RG(): string {
      return this._RG;
   }
   public set RG(value: string) {
      this._RG = value;
   }
   public get Nascimento(): string {
      return this._Nascimento;
   }
   public set Nascimento(value: string) {
      this._Nascimento = value;
   }
   public get Endereco(): string {
      return this._Endereco;
   }
   public set Endereco(value: string) {
      this._Endereco = value;
   }
   public get Telefone(): string {
      return this._Telefone;
   }
   public set Telefone(value: string) {
      this._Telefone = value;
   }
   public get Whatsapp(): string {
      return this._Whatsapp;
   }
   public set Whatsapp(value: string) {
      this._Whatsapp = value;
   }
   public get Email(): string {
      return this._Email;
   }
   public set Email(value: string) {
      this._Email = value;
   }
   public get Perfil(): string {
      return this._Perfil;
   }
   public set Perfil(value: string) {
      this._Perfil = value;
   }


}
