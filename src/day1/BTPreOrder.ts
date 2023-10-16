function walk (curr: BinaryNode<number> | null, path: number[]): number[] {
	// Base case
	if (!curr) {
		return path
	}

	// Pre
	path.push(curr.value);	
	
	// Recurse
	walk(curr.left, path);
	walk(curr.right, path);

	// Post
	return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
	return walk(head, []);
}
