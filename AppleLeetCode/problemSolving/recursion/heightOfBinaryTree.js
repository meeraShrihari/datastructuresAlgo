function BST (value){
    this.value = value;
    this.left = null;
    this.right = null;
}
  
BST.prototype.insert = function(value){
    if(value <= this.value){
      if(!this.left) this.left = new BST(value);
      else this.left.insert(value);
    }else {
      if(!this.right) this.right = new BST(value);
      else this.right.insert(value);
    }
}

/*BST.prototype.findHeight = function(node) {
    
}*/

function heightOfBinaryTree(node) {
    if(node === null) return 0;
    let leftHeight = heightOfBinaryTree(node.left);
    let rightHeight = heightOfBinaryTree(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
}

var bst = new BST(50);
  bst.insert(30);
  bst.insert(70);
  bst.insert(100);
  bst.insert(60);
  bst.insert(59);
  bst.insert(20);
  bst.insert(45);
  bst.insert(35);
  bst.insert(85);
  bst.insert(105);
  bst.insert(10);

  console.log(heightOfBinaryTree(bst));

