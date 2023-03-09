/**
 * Menghitung jumlah semua bilangan genap dalam nested objek
 * @param {object} obj - Nested objek
 * @returns {number} Jumlah semua bilangan genap dalam nested objek
 */
export function sumEvenNumbers(obj) {
  let sum = 0;
  
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      if (obj[key] % 2 === 0) {
        sum += obj[key];
      }
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      sum += sumEvenNumbers(obj[key]);
    }
  }

  return sum;
}