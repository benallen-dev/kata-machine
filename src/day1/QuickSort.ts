function qs(arr: number[], lo: number, hi: number): void {
	// Base case
	if (lo >= hi) {
		return; // It's done!
	}

	const pivotIdx = partition(arr, lo, hi);
	
	qs(arr, lo, pivotIdx - 1);
	qs(arr, pivotIdx + 1, hi);
}

/**
 * Partition weak-sorts the array and returns the index of the pivot
 *
 * @param {number[]} arr - The array to sort
 * @param {number} lo - The lower bound (inclusive)
 * @param {number} hi - The upper bound (inclusive)
 *
 * @returns {number} The pivot index
 */
function partition(arr: number[], lo: number, hi: number): number {

	const pivot = arr[hi];

	let idx = lo - 1;

	for (let i = lo; i < hi; ++i) {
		if (arr[i] <= pivot) {
			idx++;

			const tmp = arr[i];
			arr[i] = arr[idx];
			arr[idx] = tmp;
		}
	}

	// swap pivot with idx
	idx++;
	arr[hi] = arr[idx];
	arr[idx] = pivot;

	return idx;
}

export default function quick_sort(arr: number[]): void {
	// Hurry the fuck up Prime I gotta start work in 20 minutes
	
	/* Quicksort TLDR
	 *
	 * take array
	 * take pivot index, probably like halfway up the array
	 * move anything <= *pivot into 'left' array
	 * move anything > *pivot into 'right' array
	 * repeat until array has length 1
	 * concat arrays
	 *
	 * or if you're smart, use an arraybuffer and just use
	 * the single spot in memory or something idk I'm not
	 * that smart
	 */
	
	qs(arr, 0, arr.length - 1);
}
