'use strict';

class Nd {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertHead(val) {
    let nd = new Nd(val, this.head);
    this.head = nd;
    if (!this.tail) this.tail = nd;
    return this;
  }

  insertTail(val) {
    let nd = new Nd(val);
    if (this.tail) this.tail.next = nd;
    if (!this.head) this.head = nd;
    this.tail = nd;
    return this;
  }
}

module.exports = SLL;