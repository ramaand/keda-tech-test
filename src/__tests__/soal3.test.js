import { sumEvenNumbers } from '../soal/soal3';

describe("sumEvenNumbers", () => {
	it("should return the sum of all even numbers in the nested object", () => {
		const obj1 = {
			outer: 2,
			obj: {
				inner: 2,
				otherObj: {
					superInner: 2,
					notANumber: true,
					alsoNotANumber: "yup",
				},
			},
		};
		const expected1 = 6;
		const result1 = sumEvenNumbers(obj1);
		expect(result1).toEqual(expected1);

		const obj2 = {
			a: 2,
			b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
			c: { c: { c: 2 }, cc: "ball", ccc: 5 },
			d: 1,
			e: { e: { e: 4 }, ee: "car" },
		};
		const expected2 = 12;
		const result2 = sumEvenNumbers(obj2);
		expect(result2).toEqual(expected2);
	});

	it("should return 0 when there is no even number in the nested object", () => {
		const obj = {
			outer: 3,
			obj: {
				inner: 5,
				otherObj: {
					superInner: 7,
					notANumber: true,
					alsoNotANumber: "yup",
				},
			},
		};
		const expected = 0;
		const result = sumEvenNumbers(obj);
		expect(result).toEqual(expected);
	});

	it("should return 0 when the object parameter is empty", () => {
		const obj = {};
		const expected = 0;
		const result = sumEvenNumbers(obj);
		expect(result).toEqual(expected);
	});

	it("should return 0 when the object parameter is null", () => {
		const obj = null;
		const expected = 0;
		const result = sumEvenNumbers(obj);
		expect(result).toEqual(expected);
	});
});
