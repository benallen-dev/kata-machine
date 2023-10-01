type Node<T> = {
	value: T;
	next?: Node<T>;
};

export default class SinglyLinkedList<T> {
	public length: number;
	private tail: Node<T> | undefined;
	private head: Node<T> | undefined;

	private logTheWholeThing(hint: string) {
		if (!this.head) return console.log("Empty list");

		let node = this.head;
		let str = hint + ':\n' ;

		for (let i = 0; i < this.length; ++i) {
			str += `${node.value} -> `;

			if (!node.next) {
				str += 'null';
				break;
			}

			node = node?.next;
		}
		console.log(str);
	}

	constructor() {
		this.length = 0;
		this.tail =	this.head = undefined;
	}

	prepend(item: T): void {
		this.logTheWholeThing(`prepend(${item})`);

		this.length++;

		const node: Node<T> = {
			value: item,
			next: this.head,
		};

		this.head = node;

		this.logTheWholeThing('after prepend');
	}

	insertAt(item: T, idx: number): void {
		// Guess this entire method isn't tested lol
		
		this.length++;

		if (idx === 0) {
			this.prepend(item);
			return;
		}

		if (idx === this.length) {
			this.append(item);
			return;
		}

		if (idx > this.length) {
			return;
		}

		let node = this.head as Node<T>;

		const newNode: Node<T> = {
			value: item,
		};

		// Fetch the node before the target
		for (let i = 0; i < idx - 1; ++i) {
			if (!node?.next) {
				return;
			}

			node = node.next as Node<T>;
		}

		newNode.next = node.next?.next;
		node.next = newNode;
	}

	append(item: T): void {
		
		this.length++;

		const node: Node<T> = {
			value: item,
		};

		if (!this.head) {
			this.head = node;
		} else if (!this.tail) {
			this.head.next = node;
		} else {
			this.tail.next = node;
		}

		this.tail = node;
		
		this.logTheWholeThing(`append(${item})`);
	}

	remove(item: T): T | undefined {
		if (!this.head) return undefined;

		let node = this.head;

		if (node.value === item) {
			this.head = node.next;
			this.length--;

			this.logTheWholeThing(`remove(${item})`);

			return item;
		}
		
		while (node.next) {
			if (node.next.value === item) {
				console.log(`Found ${item}!`);
				// bingo
				node.next = node.next.next;
				this.length--;

				return item;
			}
			node = node.next;
		}

		this.logTheWholeThing(`remove(${item})`);

		return undefined;
	}

	get(idx: number): T | undefined {
		let node = this.head;

		for (let i = 0; i < idx; ++i) {
			node = node?.next;
		}

		return node?.value;
	}

	removeAt(idx: number): T | undefined {
		
		if (idx > this.length - 1 || !this.head) {
			return undefined;
		}

		if (idx === 0) {
			const oldHead = this.head;
			this.head = this.head.next;
			this.length--;

			this.logTheWholeThing(`removeAt(${idx})`);

			return oldHead.value;

		}

		let node = this.head;
	
		// Fetch the node before the target
		for (let i = 0; i < idx - 1 ; ++i) {
			if (!node.next) {
				return undefined;
			}

			node = node.next
		}

		this.length--;

		const removedNode = node.next;
		node.next = removedNode?.next; 

		this.logTheWholeThing(`removeAt(${idx})`);

		return removedNode?.value;
	}
}
