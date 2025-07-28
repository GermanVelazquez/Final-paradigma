import { BankClient } from '../models/banckClient';
import { BankService } from '../services/BankService';
import { CardService } from '../services/CardService';
import * as readlineSync from 'readline-sync';

const bankService = new BankService();
const cardService = new CardService();

export function showMainMenu(client: BankClient): void {
  const mainMenuOptions = {
    '1': () => console.log(`Saldo de la cuenta: ${bankService.getBalance(client)}`),
    '2': () => bankService.showTransactions(client),
    '3': () => bankService.showPayments(client),
    '4': () => manageCardsMenu(client),
    '5': () => console.log('Saliendo...')
  };

  const mainMenuDescriptions = {
    '1': 'Mostrar saldo de la cuenta',
    '2': 'Mostrar transacciones realizadas',
    '3': 'Mostrar pagos realizados',
    '4': 'Gestionar tarjetas de crédito',
    '5': 'Salir de la aplicación'
  };

  executeMenu('--- Menu Principal ---', mainMenuOptions, mainMenuDescriptions, client);
}

function manageCardsMenu(client: BankClient): void {
  const cardMenuOptions = {
    '1': () => cardService.showCards(client.cards),
    '2': () => cardService.showCards(client.getCardsByType('Visa')),
    '3': () => cardService.showCards(client.getCardsByType('Mastercard')),
    '4': () => {
      const cardNumber = readlineSync.question('Ingrese el numero de tarjeta a eliminar: ');
      client.removeCard(cardNumber);
      console.log('Tarjeta eliminada.');
    },
    '5': () => {
      const type = readlineSync.keyInSelect(['Visa', 'Mastercard'], 'Seleccione el tipo de tarjeta: ');
      if (type !== -1) {
        const cardType = type === 0 ? 'Visa' : 'Mastercard';
        const newCard = client.requestCard(cardType);
        console.log(`Tarjeta ${cardType} solicitada con numero: ${newCard.card.number}`);
      }
      
    },
    '6': () => console.log('Volviendo al menu principal...')
  };

  const cardMenuDescriptions = {
    '1': 'Ver todas las tarjetas',
    '2': 'Ver tarjetas Visa',
    '3': 'Ver tarjetas Mastercard',
    '4': 'Eliminar una tarjeta',
    '5': 'Solicitar una nueva tarjeta',
    '6': 'Volver al menu principal'
  };

  executeMenu('--- Menu de Tarjetas ---', cardMenuOptions, cardMenuDescriptions, client);
}

function executeMenu(menuTitle: string, menuOptions: { [key: string]: () => void }, menuDescriptions: { [key: string]: string }, client: BankClient): void {
  let option: string;
  do {
    console.log(`\n${menuTitle}`);
    Object.keys(menuOptions).forEach(key => {
      console.log(`${key}. ${menuDescriptions[key] || 'Opcion desconocida'}`);
    });
    option = readlineSync.question('Seleccione una opcion: ');
    (menuOptions[option] || (() => console.log('Opción no valida.')))();
  } while (option !== '6' && option !== '5');
}
