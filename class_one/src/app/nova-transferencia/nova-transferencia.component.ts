import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();
  valor: number;
  destino: number;
  transferir() {
    console.log('Solicitada nova transferência');

    if (this.ehValido()) {
      let valorEmitdo = { valor: this.valor, destino: this.destino };
      this.aoTransferir.emit(valorEmitdo);
      this.limparCampos();
    }
  }
  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

  private ehValido() {
    const valido = this.valor > 0 && this.destino > 0;
    if (!valido) {
      this.valoresComErro.emit('Informe um valor e um destino válido');
    }
    return valido;
  }
}
