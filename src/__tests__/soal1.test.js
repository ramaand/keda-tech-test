import { render, screen } from '@testing-library/react';

import { bubbleSort } from '../soal/soal1';

test("sorting [1, 2, 4, 3, 5, 3, 2, 1] should return [5, 4, 3, 3, 2, 2, 1, 1]", () => {
	const arr = [1, 2, 4, 3, 5, 3, 2, 1];
	const sortedArr = bubbleSort(arr);
	expect(sortedArr).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
});

test("sorting [] should return []", () => {
	const arr = [];
	const sortedArr = bubbleSort(arr);
	expect(sortedArr).toEqual([]);
});

test("sorting [1] should return [1]", () => {
	const arr = [1];
	const sortedArr = bubbleSort(arr);
	expect(sortedArr).toEqual([1]);
});
