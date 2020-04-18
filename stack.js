class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        //if stack is empty, then node will be top of stack
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        //if stack has something, creat new node, add data to node, and have pointer point to top
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop() {
        //in order to remove, point pointer to next item, which becomes top of stack
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function peek() {
    if (this.top === null) {
        return;
    }
    else {
        return this.top;
    }
}

function isEmpty() {
    if (this.top === null) {
        return console.log('Stack is empty');
    }
    else {
        return this.top;
    }
}

function display() {
    if (this.top === null) {
        return;
    }
    else {
        return this.top;
    }
}