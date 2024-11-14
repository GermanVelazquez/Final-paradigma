"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueId = generateUniqueId;
exports.generateUniqueCardNumber = generateUniqueCardNumber;
function generateUniqueId() {
    return Math.random().toString(36).substring(2, 15);
}
function generateUniqueCardNumber() {
    return Math.random().toString().slice(2, 18); // Simulación de número único de tarjeta
}
