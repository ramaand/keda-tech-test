/**
 * Menemukan jumlah maksimum subarray dengan panjang tertentu
 * @param {Array<number>} numbers - Array angka
 * @param {number} length - Panjang subarray yang dicari
 * @returns {number} Jumlah maksimum subarray dengan panjang `length`
 */
export function findMaximumSubarraySum(numbers, length) {
  if (!Array.isArray(numbers)) {
    throw new Error('Input harus berupa array');
  }
  
  if (numbers.some(isNaN)) {
    throw new Error('Array hanya boleh berisi angka');
  }

  if (numbers.length < length) {
    throw new Error('Panjang subarray tidak boleh melebihi panjang array');
  }

  let sum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < length; i++) {
    sum += numbers[i];
  }

  maxSum = sum;

  for (let i = length; i < numbers.length; i++) {
    sum = sum - numbers[i - length] + numbers[i];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}