"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var banckClient_1 = require("../models/banckClient");
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    // Método para registrar un nuevo cliente
    AuthService.register = function (name, email) {
        var newClient = new banckClient_1.BankClient(name, email);
        this.clients.push(newClient);
        return newClient;
    };
    // Método para iniciar sesión solo con el email
    AuthService.login = function (email) {
        var client = this.clients.find(function (c) { return c.email === email; });
        return client ? client : null;
    };
    AuthService.clients = [];
    return AuthService;
}());
exports.AuthService = AuthService;
