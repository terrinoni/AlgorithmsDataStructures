class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  add(value) {
    // declare the new node
    var node = {
      value : value,
      left : null,
      right : null
    }

    if(this._root == null) { // first insert
      this._root = node;
    } else {
      var currNode = this._root;
      var done = false;

      while(!done) { // iterate over the various nodes
        if(value < currNode.value) { // left side
          if(currNode.left == null) { // no left node, insert the new one
            currNode.left = node;
            done = true;
          } else {
            currNode = currNode.left; // move to the next node and iterate
          }
        } else if(value > currNode.value) { // right side
          if(currNode.right == null) { // no right node, insert the new one
            currNode.right = node;
            done = true;
          } else {
            currNode = currNode.right; // move to the next node and iterate
          }
        } else {
          done = true; // the element is already in the tree, not neet to insert it again
        }
      }
    }
  }

  contains(value) {
    var found = false;
    var currNode = this._root;

    while(!found && currNode != null) {
      if(value < currNode.value)
        currNode = currNode.left;
      else if(value > currNode.value)
        currNode = currNode.right
      else
        found = true;
    }

    return found;
  }

  traverse(method) {
    function preOrder(node) {
      // process current node
      method.call(this, node);

      // go on the left
      if(node.left != null)
        inOrder(node.left)

      // go on the right
      if(node.right != null)
        inOrder(node.right);
    }

    function inOrder(node) {
      // go on the left
      if(node.left != null)
        inOrder(node.left)

      // process current node
      method.call(this, node);

      // go on the right
      if(node.right != null)
        inOrder(node.right);
    }

    function postOrder(node) {
      // go on the right
      if(node.right != null)
        inOrder(node.right);

      // go on the left
      if(node.left != null)
        inOrder(node.left)

      // process current node
      method.call(this, node);
    }

    inOrder(this._root) // execute the method
  }

  remove (value) {
  }

  size () {
    var length = 0;

    if(this._root == null)
      return length;
    else {
      this.traverse((node) => {
        length++;
      });
    }

    return length;
  }

  toPropArray () {
    var result = [];

    this.traverse((node) => {
      result.push(node);
    })

    return result;
  }

  toRepString () {
    return this.
      toPropArray(). // recall previous toArray method
      toString(); // print the string
  }
};
