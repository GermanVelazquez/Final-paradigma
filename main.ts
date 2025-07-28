import * as readlineSync from 'readline-sync';
import { AuthService } from './services/AuthService';
import { showMainMenu } from './utils/menuUtils';

// Crear una instancia del AuthService (sin clientes al principio)
let authService = new AuthService();
const name = readlineSync.question('Ingrese su nombre: ');
const email = readlineSync.question('Ingrese su correo electronico: ');

// Intentar iniciar sesión solo con el email
let currentClient = authService.register(name, email);
console.log(`Usuario registrado exitosamente. ¡Bienvenido, ${currentClient.name}!`);


// Mostrar el menú principal
showMainMenu(currentClient);