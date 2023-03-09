import { findMaximumSubarraySum } from '../soal/soal2';

describe("findMaximumSubarraySum", () => {
	it("should return 700 for [100, 200, 300, 400] and 2", () => {
		const input = [100, 200, 300, 400];
		const subarrayLength = 2;
		const expectedOutput = 700;
		const actualOutput = findMaximumSubarraySum(input, subarrayLength);
		expect(actualOutput).toEqual(expectedOutput);
	});

	it("should return 39 for [1, 4, 2, 10, 23, 3, 1, 0, 20] and 4", () => {
		const input = [1, 4, 2, 10, 23, 3, 1, 0, 20];
		const subarrayLength = 4;
		const expectedOutput = 39;
		const actualOutput = findMaximumSubarraySum(input, subarrayLength);
		expect(actualOutput).toEqual(expectedOutput);
	});

	it("should throw an error if input array contains non-number values", () => {
		const input = [1, 2, "not a number"];
		const subarrayLength = 2;
		expect(() => findMaximumSubarraySum(input, subarrayLength)).toThrow("Array hanya boleh berisi angka");
	});

	it("should throw an error if length of subarray is greater than array length", () => {
		const input = [1, 2, 3];
		const subarrayLength = 4;
		expect(() => findMaximumSubarraySum(input, subarrayLength)).toThrow(
			"Panjang subarray tidak boleh melebihi panjang array"
		);
	});

	it("should return the correct sum for [100, 200, 300, 400] with subarray length 2", () => {
		const input = [100, 200, 300, 400];
		const subarrayLength = 2;
    const expectedOutput = 700;
		const actualOutput = findMaximumSubarraySum(input, subarrayLength);
		expect(actualOutput).toEqual(expectedOutput);
	});

	it("should return the correct sum for [1, 4, 2, 10, 23, 3, 1, 0, 20] with subarray length 4", () => {
		const input = [1, 4, 2, 10, 23, 3, 1, 0, 20];
		const subarrayLength = 4;
    const expectedOutput = 39;
		const actualOutput = findMaximumSubarraySum(input, subarrayLength);
		expect(actualOutput).toEqual(expectedOutput);
	});

	it("should return the correct sum for [-3, 4, 0, -2, 6, -1] with subarray length 2", () => {
    const input = [-3, 4, 0, -2, 6, -1];
		const subarrayLength = 2;
    const expectedOutput = 5;
		const actualOutput = findMaximumSubarraySum(input, subarrayLength);
		expect(actualOutput).toEqual(expectedOutput);
	});
});
