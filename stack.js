/**
 * Node class. Internal, simple data class.
 * Holds current value and a reference to next element.
 */
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

/**
 * Stack data structure.
 * Supports pop(), top(), push(), and size() in constant time.
 */
class Stack {
  /**
   * Constructor.
   */
  constructor() {
    this._head = null;
    this._size = 0;
  }

  /**
   * Pushes a value on the stack.
   * @param {value} value to push onto the stack.
   * O(1) time and O(1) space complexity.
   */
  push(value) {
    const newNode = new Node(value);
    if (this._head) {
      newNode.next = this._head;
      this._head = newNode;
    } else {
      this._head = newNode;
    }
    this._size += 1;
  }

  /**
   * Pops the first element off the stack.
   * @returns {value} value at the top of the stack.
   * O(1) time and O(1) space complexity.
   */
  pop() {
    const top = this._head.value;
    this._head = this._head.next;
    this._size -= 1;
    return top;
  }

  /**
   * @returns {size} size of the stack.
   * O(1) time and O(1) space complexity.
   */
  size() {
    return this._size;
  }

  /**
   * @returns {bool} bool true if stack is non-empty, otherwise false.
   * O(1) time and O(1) space complexity.
   */
  empty() {
    return this._size <= 0;
  }

  /**
   * @returns {value} value at the top of the stack.
   * O(1) time and O(1) space complexity.
   */
  top() {
    return this._head.value;
  }
}

module.exports = Stack;
