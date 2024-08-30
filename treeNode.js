class TreeNode{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
const a = new TreeNode('a');
const b = new TreeNode('b');
const c = new TreeNode('c');
const d = new TreeNode('d');
const e = new TreeNode('e');
const f = new TreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(a)
