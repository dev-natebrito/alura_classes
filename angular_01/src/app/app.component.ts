import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];

  transferir($event) {
    console.log(
      '🚀 ~ file: app.component.ts ~ line 11 ~ AppComponent ~ transferir ~ $event',
      $event
    );
    const transferencia = { ...$event, data: new Date() };
    this.transferencias.push(transferencia);
  }
  exibirModalErro(mensagem) {
    alert(mensagem);
  }
}
