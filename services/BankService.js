"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankService = void 0;
var BankService = /** @class */ (function () {
    function BankService() {
    }
    BankService.prototype.getBalance = function (client) {
        return 1000; // Simulación de saldo
    };
    BankService.prototype.showTransactions = function (client) {
        console.log('Mostrando transacciones...');
    };
    BankService.prototype.showPayments = function (client) {
        console.log('Mostrando pagos...');
    };
    return BankService;
}());
exports.BankService = BankService;
