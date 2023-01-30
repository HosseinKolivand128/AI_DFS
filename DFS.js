// import { Queue } from "./queue.js";
/*
class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }
.add(element) {
        this.items[this.tail] = element;
        this.tail++;
    }
    dequeue() {
        const item = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return item;
    }
    peek() {
        return this.items[this.head];
    }
    get length() {
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.length === 0;
    }
}
*/

class Stack {
    constructor() {
        this.items = [];
    }

    // add element to the stack
    add(element) {
        return this.items.push(element);
    }

    // remove element from the stack
    remove() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }

    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }

    // check if the stack is empty
    isEmpty() {
        return this.items.length == 0;
    }

    // the size of the stack
    size() {
        return this.items.length;
    }

    // empty the stack
    clear() {
        this.items = [];
    }
}

//1->wall 0->way 
//from left -> Top Right Bottom left
const matrix = [
    [[0, 1, 0, 0, 1], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 1, 1, 0, 0], [0, 0, 1, 0, 1]],
    [[0, 0, 0, 0, 1], [0, 1, 0, 1, 0], [0, 1, 1, 0, 0], [0, 1, 0, 0, 1], [0, 1, 1, 0, 0], [0, 0, 1, 0, 1], [0, 0, 1, 0, 1]],
    [[0, 0, 1, 0, 1], [0, 1, 1, 0, 1], [0, 0, 0, 1, 1], [0, 0, 1, 1, 0], [0, 0, 1, 0, 1], [0, 0, 1, 1, 1], [0, 0, 1, 0, 1]],
    [[0, 0, 0, 0, 1], [0, 0, 0, 1, 0], [0, 1, 0, 1, 0], [0, 1, 1, 0, 0], [0, 0, 0, 1, 1], [0, 1, 0, 1, 0], [0, 0, 1, 0, 0]],
    [[0, 0, 0, 1, 1], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 0, 0, 1, 0], [0, 1, 1, 1, 0], [0, 1, 0, 1, 1], [0, 0, 1, 1, 0]],
];
// console.log(matrix);

const startNode_i = 1, startNode_j = 0;
const endNode_i = 0, endNode_j = 6;
const dfs = new Stack();
dfs.add([startNode_i, startNode_j]);
search([startNode_i, startNode_j]);
function search(node) {
    // console.log(dfs.items);
    let currentNode_i = node[0], currentNode_j = node[1];
    if (currentNode_i == endNode_i && currentNode_j == endNode_j) {

        console.log("Search DONE");
        return;
    }
    //visiting the node

    const currentNodeValue = matrix[node[0]][node[1]];
    let nextNodeValue;
    //check RIGHT
    if (currentNodeValue[2] == 0 && currentNodeValue[0] == 0) {
        nextNodeValue = matrix[currentNode_i][currentNode_j + 1];
        if (nextNodeValue[0] == 0) {
            currentNodeValue[0] = 1;
            dfs.add([currentNode_i, currentNode_j + 1]);
            search([currentNode_i, currentNode_j + 1]);
        }

    }

    //check TOP
    if (currentNodeValue[1] == 0 && currentNodeValue[0] == 0) {
        nextNodeValue = matrix[currentNode_i - 1][currentNode_j];
        if (nextNodeValue[0] == 0) {
            currentNodeValue[0] = 1;
            dfs.add([currentNode_i - 1, currentNode_j]);
            search([currentNode_i - 1, currentNode_j]);
        }

    }

    //check BOTTOM
    if (currentNodeValue[3] == 0 && currentNodeValue[0] == 0) {
        nextNodeValue = matrix[currentNode_i + 1][currentNode_j];
        if (nextNodeValue[0] == 0) {
            currentNodeValue[0] = 1;
            dfs.add([currentNode_i + 1, currentNode_j]);
            search([currentNode_i + 1, currentNode_j]);
        }
    }
    console.log(dfs.remove());
    // console.log(dfs.items);
}