"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var banckClient_1 = require("../models/banckClient");
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.activeClient = null;
    }
    AuthService.prototype.register = function (name, email) {
        var newClient = new banckClient_1.BankClient(name, email);
        console.log("Usuario ".concat(newClient.name, " (").concat(newClient.email, ") registrado y activado."));
        return newClient;
    };
    AuthService.prototype.getCurrentClient = function () {
        return this.activeClient;
    };
    return AuthService;
}());
exports.AuthService = AuthService;
