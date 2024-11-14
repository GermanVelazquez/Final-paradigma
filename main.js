"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var AuthService_1 = require("./services/AuthService");
var menuUtils_1 = require("./utils/menuUtils");
var name = readlineSync.question('Ingrese su nombre: ');
var email = readlineSync.question('Ingrese su correo electrónico: ');
// Intentar iniciar sesión solo con el email
var currentClient = AuthService_1.AuthService.login(email);
// Si el cliente no existe, registrarlo
if (!currentClient) {
    console.log('Usuario no encontrado. Registrando nuevo usuario...');
    currentClient = AuthService_1.AuthService.register(name, email);
    console.log("Usuario registrado exitosamente. \u00A1Bienvenido, ".concat(currentClient.name, "!"));
}
else {
    console.log("\u00A1Bienvenido de nuevo, ".concat(currentClient.name, "!"));
}
// Mostrar el menú principal
(0, menuUtils_1.showMainMenu)(currentClient);
