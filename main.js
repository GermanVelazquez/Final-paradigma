"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var AuthService_1 = require("./services/AuthService");
var menuUtils_1 = require("./utils/menuUtils");
// Crear una instancia del AuthService (sin clientes al principio)
var authService = new AuthService_1.AuthService();
var name = readlineSync.question('Ingrese su nombre: ');
var email = readlineSync.question('Ingrese su correo electronico: ');
// Intentar iniciar sesión solo con el email
var currentClient = authService.register(name, email);
console.log("Usuario registrado exitosamente. \u00A1Bienvenido, ".concat(currentClient.name, "!"));
// Mostrar el menú principal
(0, menuUtils_1.showMainMenu)(currentClient);
