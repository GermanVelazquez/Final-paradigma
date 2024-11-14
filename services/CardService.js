"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardService = void 0;
var CardService = /** @class */ (function () {
    function CardService() {
    }
    CardService.prototype.showCards = function (cards) {
        console.log('\n--- Tarjetas ---');
        cards.forEach(function (card, index) {
            console.log("".concat(index + 1, ". ").concat(card.type, " - N\u00FAmero: ").concat(card.number, " - Nombre: ").concat(card.name));
        });
    };
    CardService.prototype.filterCards = function (client, type) {
        return client.getCardsByType(type);
    };
    CardService.prototype.modifyCard = function (card, newName) {
        card.updateCardOwnerName(newName);
        console.log("Nombre de la tarjeta actualizado a ".concat(newName));
    };
    CardService.prototype.deleteCard = function (client, cardNumber) {
        client.removeCard(cardNumber);
        console.log('Tarjeta eliminada.');
    };
    return CardService;
}());
exports.CardService = CardService;
