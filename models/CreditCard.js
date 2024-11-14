"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCard = void 0;
var idGenerator_1 = require("../utils/idGenerator");
var CreditCard = /** @class */ (function () {
    function CreditCard(name, type) {
        this.number = (0, idGenerator_1.generateUniqueCardNumber)();
        this.name = name;
        this.type = type;
    }
    CreditCard.prototype.updateCardOwnerName = function (newName) {
        this.name = newName;
    };
    return CreditCard;
}());
exports.CreditCard = CreditCard;
