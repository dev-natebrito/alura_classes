// See https://aka.ms/new-console-template for more information
using ByteBank;

ContaCorrente contaNate = new ContaCorrente();
contaNate.agencia = 666;
contaNate.numero = 666369;
contaNate.saldo = 2.99;
contaNate.titular = "Nate";
Console.WriteLine($"Olá {contaNate.titular} bem-vindo ao ByteBank,\n" +
                  $"sua agencia é a {contaNate.agencia}\n" +
                  $"o numero da sua conta é o {contaNate.numero}\n" +
                  $"no momento vc tem o saldo de {contaNate.saldo}\n");

