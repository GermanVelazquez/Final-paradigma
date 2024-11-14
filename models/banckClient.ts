import { CreditCard } from './CreditCard';
import { generateUniqueId } from '../utils/idGenerator';

export class BankClient {
  id: string;
  name: string;
  email: string;
  cards: CreditCard[] = [];

  constructor(name: string, email: string) {
    this.id = generateUniqueId();
    this.name = name;
    this.email = email;
  }

  requestCard(type: 'Visa' | 'Mastercard'): CreditCard {
    const newCard = new CreditCard(this.name, type);
    this.cards = [...this.cards, newCard]; // Inmutabilidad
    return newCard;
  }

  getCardsByType(type: 'Visa' | 'Mastercard'): CreditCard[] {
    return this.cards.filter(card => card.type === type);
  }

  removeCard(cardNumber: string): void {
    this.cards = this.cards.filter(card => card.number !== cardNumber);
  }
}
