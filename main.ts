import * as readlineSync from 'readline-sync';
import { AuthService } from './services/AuthService';
import { showMainMenu } from './utils/menuUtils';

const name = readlineSync.question('Ingrese su nombre: ');
const email = readlineSync.question('Ingrese su correo electrónico: ');

// Intentar iniciar sesión solo con el email
let currentClient = AuthService.login(email);

// Si el cliente no existe, registrarlo
if (!currentClient) {
  console.log('Usuario no encontrado. Registrando nuevo usuario...');
  currentClient = AuthService.register(name, email);
  console.log(`Usuario registrado exitosamente. ¡Bienvenido, ${currentClient.name}!`);
} else {
  console.log(`¡Bienvenido de nuevo, ${currentClient.name}!`);
}

// Mostrar el menú principal
showMainMenu(currentClient);
