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
    function BankClient(name, email) {
        this.cards = [];
        this.id = (0, idGenerator_1.generateUniqueId)();
        this.name = name;
        this.email = email;
    }
    BankClient.prototype.requestCard = function (type) {
        var newCard = new CreditCard_1.CreditCard(this.name, type);
        this.cards = __spreadArray(__spreadArray([], this.cards, true), [newCard], false); // Inmutabilidad
        return newCard;
    };
    BankClient.prototype.getCardsByType = function (type) {
        return this.cards.filter(function (card) { return card.type === type; });
    };
    BankClient.prototype.removeCard = function (cardNumber) {
        this.cards = this.cards.filter(function (card) { return card.number !== cardNumber; });
    };
    return BankClient;
}());
exports.BankClient = BankClient;
