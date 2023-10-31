export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

	// Base case
	// 1. Both nodes are null
	if (a === null && b === null) {
		return true;
	}

	// 2. One node is null
	if (a === null || b === null) {
		return false;
	}

	// 3. Values are not equal
	if (a.value !== b.value) {
		return false;
	}

	// Recurse
	return compare(a.left, b.left) && compare(a.right, b.right);
}
