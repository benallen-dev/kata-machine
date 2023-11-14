function find(node: BinaryNode<number> | null, needle: number): boolean {
	if (!node) {
		return false;
	}

	if (node.value === needle) {
		return true;
	}

	if (node.value < needle) {
		return find(node.right, needle);
	}
	if (node.value > needle) {
		// Yes this could be just the default case but this is more explicit
		return find(node.left, needle);
	}

	return false;
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
	return find(head, needle);	
}
