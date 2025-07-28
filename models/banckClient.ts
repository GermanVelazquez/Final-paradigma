import { CreditCard } from './CreditCard';
import { generateUniqueId } from '../utils/idGenerator';

export class BankClient {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly cards: CreditCard[];

  constructor(name: string, email: string, cards: CreditCard[] = []) {
    this.id = generateUniqueId();
    this.name = name;
    this.email = email;
    this.cards = cards;
  }

  // Función pura: devuelve un nuevo BankClient con la nueva tarjeta añadida
  requestCard(type: 'Visa' | 'Mastercard'): { client: BankClient, card: CreditCard } {
    const newCard = new CreditCard(this.name, type);
    const newCards = [...this.cards, newCard];
    const newClient = new BankClient(this.name, this.email, newCards);
    return { client: newClient, card: newCard };
  }

  // Función pura: solo lee datos, no modifica nada
  getCardsByType(type: 'Visa' | 'Mastercard'): CreditCard[] {
    return this.cards.filter(card => card.type === type);
  }

  // Función pura: devuelve un nuevo BankClient sin la tarjeta eliminada
  removeCard(cardNumber: string): BankClient {
    const newCards = this.cards.filter(card => card.number !== cardNumber);
    return new BankClient(this.name, this.email, newCards);
  }
}