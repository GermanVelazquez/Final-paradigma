import { BankClient } from '../models/banckClient';


export class AuthService {
  private activeClient: BankClient | null;

  constructor() {
    this.activeClient = null;
  }

  register(name: string, email: string): BankClient {
    
    const newClient = new BankClient(name, email);
    console.log(`Usuario ${newClient.name} (${newClient.email}) registrado y activado.`);

    return  newClient;
  }

  getCurrentClient(): BankClient | null {
    return this.activeClient;
  }
}
