class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._length = 0;
    this.head = null;
  }

  add(data) {
    var node = new Node(data);
    var currNode = this.head;
    if(currNode == null) {
      this.head = node;
      this._length++;
    } else {
      while (currNode.next != null) {
        currNode = currNode.next;
      }
      currNode.next = node;
      this._length++
    }
  }

  get(index)
}

var list = new LinkedList();
list.add(3);
list.add("Marco");
list.add("aa");

list.printAll();
