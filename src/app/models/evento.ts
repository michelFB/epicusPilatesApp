export class Evento {
     public id: string;
     public title: string;
     public desc: string;
     public startTime: Date;
     public endTime: Date;
     public Reposicao: string;

   
     // constructor(){}
     constructor(a: string, b: string, c: string, d: Date, e: Date, f: string) {
          this.id = a;
          this.title = b;
          this.desc = c;
          this.startTime = d;
          this.endTime = e;
          this.Reposicao = f;
     }

}
