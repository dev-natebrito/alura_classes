import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any;

  transferir($event) {
    console.log(
      '🚀 ~ file: app.component.ts ~ line 11 ~ AppComponent ~ transferir ~ $event',
      $event
    );
    this.transferencia = $event;
  }
  exibirModalErro(mensagem) {
    alert(mensagem);
  }
}
