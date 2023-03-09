/**
 * Fungsi untuk mengurutkan array dari terbesar ke terkecil dengan algoritma Bubble Sort.
 * @param {number[]} arr - Array of number yang akan diurutkan.
 * @returns {number[]} Array of number yang telah diurutkan.
 */
export function bubbleSort(arr) {
	const n = arr.length;

	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] < arr[j + 1]) {
				// Menukar posisi elemen jika elemen yang sedang dibandingkan lebih kecil daripada elemen berikutnya.
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}

	return arr;
}
