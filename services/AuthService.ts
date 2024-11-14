import { BankClient } from '../models/banckClient';

export class AuthService {
  private static clients: BankClient[] = [];

  // Método para registrar un nuevo cliente
  static register(name: string, email: string): BankClient {
    const newClient = new BankClient(name, email);
    this.clients.push(newClient);
    return newClient;
  }

  // Método para iniciar sesión solo con el email
  static login(email: string): BankClient | null {
    const client = this.clients.find(c => c.email === email);
    return client ? client : null;
  }
}
