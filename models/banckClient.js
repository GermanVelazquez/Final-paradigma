"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankClient = void 0;
var CreditCard_1 = require("./CreditCard");
var idGenerator_1 = require("../utils/idGenerator");
var BankClient = /** @class */ (function () {
    function BankClient(name, email, cards) {
        if (cards === void 0) { cards = []; }
        this.id = (0, idGenerator_1.generateUniqueId)();
        this.name = name;
        this.email = email;
        this.cards = cards;
    }
    // Función pura: devuelve un nuevo BankClient con la nueva tarjeta añadida
    BankClient.prototype.requestCard = function (type) {
        var newCard = new CreditCard_1.CreditCard(this.name, type);
        var newCards = __spreadArray(__spreadArray([], this.cards, true), [newCard], false);
        var newClient = new BankClient(this.name, this.email, newCards);
        return { client: newClient, card: newCard };
    };
    // Función pura: solo lee datos, no modifica nada
    BankClient.prototype.getCardsByType = function (type) {
        return this.cards.filter(function (card) { return card.type === type; });
    };
    // Función pura: devuelve un nuevo BankClient sin la tarjeta eliminada
    BankClient.prototype.removeCard = function (cardNumber) {
        var newCards = this.cards.filter(function (card) { return card.number !== cardNumber; });
        return new BankClient(this.name, this.email, newCards);
    };
    return BankClient;
}());
exports.BankClient = BankClient;
