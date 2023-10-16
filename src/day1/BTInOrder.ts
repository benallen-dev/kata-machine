function walk (curr: BinaryNode<number> | null, path: number[]): number[] {
	// Base case
	if (!curr) {
		return path
	}

	// Pre
	
	// Recurse
	walk(curr.left, path);
	path.push(curr.value);	
	walk(curr.right, path);

	// Post
	return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
	return walk(head, []);
}
