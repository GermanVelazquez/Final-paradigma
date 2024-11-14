import { BankClient } from '../models/banckClient';
import { CreditCard } from '../models/CreditCard';

export class CardService {
  showCards(cards: CreditCard[]): void {
    console.log('\n--- Tarjetas ---');
    cards.forEach((card, index) => {
      console.log(`${index + 1}. ${card.type} - Número: ${card.number} - Nombre: ${card.name}`);
    });
  }

  filterCards(client: BankClient, type: 'Visa' | 'Mastercard'): CreditCard[] {
    return client.getCardsByType(type);
  }

  modifyCard(card: CreditCard, newName: string): void {
    card.updateCardOwnerName(newName);
    console.log(`Nombre de la tarjeta actualizado a ${newName}`);
  }

  deleteCard(client: BankClient, cardNumber: string): void {
    client.removeCard(cardNumber);
    console.log('Tarjeta eliminada.');
  }
}
