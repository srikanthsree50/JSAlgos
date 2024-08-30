class Node {
constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
}
}
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
const newNode = new Node(value);
if(this.root === null){
this.root = newNode;
}
else{
   let currentNode = this.root;
while(true){
    if(value < currentNode.value){
if(!currentNode.left){
currentNode.left = newNode;
return this; 
}
else{
currentNode = currentNode.left;
}
    }
    else{
if(!currentNode.right){
    currentNode.right = newNode;
    return this;
}
currentNode = currentNode.right;
    }
}
}
    }

    printBst(){
        const printNode = (node) => {
            if(node === null) return;
            printNode(node.left);
            console.log(node.value)
            printNode(node.right);
        }
        printNode(this.root);
    }

    lookUp(value){
let currentNode = this.root;
if(!currentNode) return null;
while(currentNode){
    if(value < currentNode.value){
        currentNode = currentNode.left;
    }
    else if(value > currentNode.value){
        currentNode = currentNode.right;
    }
    else if(value === currentNode.value){
        return currentNode;
    }
}
return null;
    }
remove(value){
const removeNode = (node,value) => {
    if(node === null) return null;
    if(value < node.value){
        node.left = removeNode(node.left,value)
        return node;
    }
    else if (value > node.value){
        node.right = removeNode(node.right,value);
        return node;
    }
    else{
        if(node.left === null){
            return node.right;
        }
        else if(node.right === null){
            return node.left;
        }
        let tempNode = node.right;
        while(tempNode.left !== null){
            tempNode = tempNode.left;
        }
        node.value = tempNode.value; 
        node.right =removeNode(node.right,tempNode.value);
        return node;
    }
}
this.root = removeNode(this.root , value)
}

isValidBst(root){
    let isValidSubtree = (node , min ,max) => {
        if(!node) return true;
        if(
            (min !== null && node.value <= min) || (max !== null && node.value >= max)
        ){
return false
        }
        return (
             isValidSubtree(node.left , min , node.value) &&
            isValidSubtree(node.right , node.value , max)
             )
            }
            return isValidSubtree(root , null ,null);
}

}
const bst = new BinarySearchTree();
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(2)
// bst.remove(5)
//bst.printBst();
//console.log(bst.lookUp(10))
//////////////////
bst.insert(8)
bst.insert(4)
bst.insert(7)
bst.insert(2)
bst.insert(6)
bst.printBst();
console.log(bst.isValidBst(8))