export class BankService {

  
  
    getBalance(client: any): number {
      return 1000; // Simulación de saldo
    }
  
    showTransactions(client: any): void {
      console.log('Mostrando transacciones...');
    }
  
    showPayments(client: any): void {
      console.log('Mostrando pagos...');
    }
  }
  