"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showMainMenu = showMainMenu;
var BankService_1 = require("../services/BankService");
var CardService_1 = require("../services/CardService");
var readlineSync = require("readline-sync");
var bankService = new BankService_1.BankService();
var cardService = new CardService_1.CardService();
function showMainMenu(client) {
    var mainMenuOptions = {
        '1': function () { return console.log("Saldo de la cuenta: ".concat(bankService.getBalance(client))); },
        '2': function () { return bankService.showTransactions(client); },
        '3': function () { return bankService.showPayments(client); },
        '4': function () { return manageCardsMenu(client); },
        '5': function () { return console.log('Saliendo...'); }
    };
    var mainMenuDescriptions = {
        '1': 'Mostrar saldo de la cuenta',
        '2': 'Mostrar transacciones realizadas',
        '3': 'Mostrar pagos realizados',
        '4': 'Gestionar tarjetas de crédito',
        '5': 'Salir de la aplicación'
    };
    executeMenu('--- Menu Principal ---', mainMenuOptions, mainMenuDescriptions, client);
}
function manageCardsMenu(client) {
    var cardMenuOptions = {
        '1': function () { return cardService.showCards(client.cards); },
        '2': function () { return cardService.showCards(client.getCardsByType('Visa')); },
        '3': function () { return cardService.showCards(client.getCardsByType('Mastercard')); },
        '4': function () {
            var cardNumber = readlineSync.question('Ingrese el numero de tarjeta a eliminar: ');
            client.removeCard(cardNumber);
            console.log('Tarjeta eliminada.');
        },
        '5': function () {
            var type = readlineSync.keyInSelect(['Visa', 'Mastercard'], 'Seleccione el tipo de tarjeta: ');
            if (type !== -1) {
                var cardType = type === 0 ? 'Visa' : 'Mastercard';
                var newCard = client.requestCard(cardType);
                console.log("Tarjeta ".concat(cardType, " solicitada con numero: ").concat(newCard.card.number));
            }
        },
        '6': function () { return console.log('Volviendo al menu principal...'); }
    };
    var cardMenuDescriptions = {
        '1': 'Ver todas las tarjetas',
        '2': 'Ver tarjetas Visa',
        '3': 'Ver tarjetas Mastercard',
        '4': 'Eliminar una tarjeta',
        '5': 'Solicitar una nueva tarjeta',
        '6': 'Volver al menu principal'
    };
    executeMenu('--- Menu de Tarjetas ---', cardMenuOptions, cardMenuDescriptions, client);
}
function executeMenu(menuTitle, menuOptions, menuDescriptions, client) {
    var option;
    do {
        console.log("\n".concat(menuTitle));
        Object.keys(menuOptions).forEach(function (key) {
            console.log("".concat(key, ". ").concat(menuDescriptions[key] || 'Opcion desconocida'));
        });
        option = readlineSync.question('Seleccione una opcion: ');
        (menuOptions[option] || (function () { return console.log('Opción no valida.'); }))();
    } while (option !== '6' && option !== '5');
}
