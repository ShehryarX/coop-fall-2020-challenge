const Stack = require("./stack");

/**
 * EventSourcer class.
 * Manages summation of integers with support for undo and redo.
 */
class EventSourcer {
  /**
   * Constructor.
   */
  constructor() {
    this._value = 0;
    this._valueStack = new Stack();
    this._redoStack = new Stack();
  }

  /**
   * Adds a value.
   * @param {num} num
   */
  add(num) {
    this._valueStack.push(num);
    this._value += num;
  }

  /**
   * Subtracts a value.
   * @param {num} num
   */
  subtract(num) {
    this._valueStack.push(-1 * num);
    this._value -= num;
  }

  /**
   * Performs an undo operation if possible.
   */
  undo() {
    if (this._valueStack.empty()) {
      return;
    }

    const top = this._valueStack.pop();
    this._value -= top;
    this._redoStack.push(-1 * top);
  }

  /**
   * Performs a redo operation if possible.
   */
  redo() {
    if (this._redoStack.empty()) {
      return;
    }

    const top = this._redoStack.pop();
    this._value -= top;
    this._valueStack.push(-1 * top);
  }

  /**
   * Undos in bulk as long as it's possible.
   * @param {num} num the number of undos to perform.
   */
  bulk_undo(num) {
    let completed = 0;
    while (completed < num && !this._valueStack.empty()) {
      this.undo();
      completed += 1;
    }
  }

  /**
   * Redos in bulk as long as it's possible.
   * @param {num} num the number of redos to perform.
   */
  bulk_redo(num) {
    let completed = 0;
    while (completed < num && !this._redoStack.empty()) {
      this.redo();
      completed += 1;
    }
  }

  /**
   * Returns the value of the current summation.
   * @returns {value} value
   */
  get value() {
    return this._value;
  }
}

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
