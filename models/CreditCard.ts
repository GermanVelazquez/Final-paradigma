import { generateUniqueCardNumber } from '../utils/idGenerator';

export class CreditCard {
  number: string;
  name: string;
  type: 'Visa' | 'Mastercard';

  constructor(name: string, type: 'Visa' | 'Mastercard') {
    this.number = generateUniqueCardNumber();
    this.name = name;
    this.type = type;
  }

  updateCardOwnerName(newName: string): void {
    this.name = newName;
  }
}
