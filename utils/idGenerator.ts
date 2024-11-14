export function generateUniqueId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
  
  export function generateUniqueCardNumber(): string {
    return Math.random().toString().slice(2, 18); // Simulación de número único de tarjeta
  }
  