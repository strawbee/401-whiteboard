'use strict';

let TreeNode = require('./treenode'); 

module.exports = class BST {
  constructor(root = null) {
    this.root = root;
  }

  insert(val, node = this.root) {
    if (node === null) this.root = new TreeNode(val);
    else if (val < node.value) {
      if (!node.left) node.left = new TreeNode(val);
      else this.insert(val, node.left);
    }
    else if (val > node.value) {
      if (!node.right) node.right = new TreeNode(val);
      else this.insert(val, node.right);
    }
  }

  find(val, node = this.root) {
    if (!node) return null;
    if (val === node.value) return node;
    else if (val < node.value) return this.find(val, node.left);
    else return this.find(val, node.right);
  }

  remove(val, node = this.root, parent = null) {
    if (!node) return null;

    let prnt = null;
    const _deleteMin = (nd) => {
      if (!nd.left) {
        let min = nd.value;
        prnt.left = null;
        return min;
      }
      else {
        prnt = nd;
        return _deleteMin(nd.left);
      }
    };
    
    if (val < node.value) {
      parent = node;
      return this.remove(val, node.left, parent);
    }
    else if (val > node.value) {
      parent = node;
      return this.remove(val, node.right, parent);
    }
    else if (val === node.value) {
      if (!parent) this.root = null;
      else if (!node.right && !node.left) {
        if (val < parent.value) parent.left = null;
        else if (val > parent.value) parent.right = null;
      } 
      else if (node.right && !node.left) parent.right = node.right;
      else if (!node.right && node.left) parent.left = node.left;
      else if (node.right && node.left) node.value = _deleteMin(node);
    }
  }

  isBalanced() {
    if (!this.root) return null;
    const _maxHeight = node => {
      if (!node) return null;
      return 1 + Math.max(_maxHeight(node.left), _maxHeight(node.right));
    };
    const _minHeight = node => {
      if (!node) return null;
      return 1 + Math.min(_minHeight(node.left), _minHeight(node.right));
    };
    return _maxHeight(this.root) - _minHeight(this.root) <= 1;
  }

  isMirrored() {
    if (!this.root) return null;
    let left = '', right = '';

    const _leftTraversal = node => {
      if (node.left) {
        left += '0';
        _leftTraversal(node.left);
      }
      left += '1';
      if (node.right) {
        left += '2';
        _leftTraversal(node.right);
      }
    };

    const _rightTraversal = node => {
      if (node.right) {
        right += '0';
        _rightTraversal(node.right);
      }
      right += '1';
      if (node.left) {
        right += '2';
        _rightTraversal(node.left);
      }
    };

    if (this.root.left) _leftTraversal(this.root.left);
    if (this.root.right) _rightTraversal(this.root.right);
    return left === right;
  }
};
