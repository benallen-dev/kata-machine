type Node<T> = {
	value: T;
	prev?: Node<T>;
};

export default class Stack<T> {
	public length: number;
	private head?: Node<T>;

	constructor() {
		this.length = 0;
		this.head = undefined;
	}

	push(item: T): void {
		this.length++;

		const newNode = {
			value: item,
			prev: this.head
		};

		this.head = newNode;
	}

	pop(): T | undefined {
		if (!this.head) {
			return undefined;
		}

		const head = this.head;
		
		this.length--;
		this.head = head.prev;

		return head.value;
	}

	peek(): T | undefined {
		return this.head?.value;
	}
}
