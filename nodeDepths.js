let myNode = ` 1
              /  \
            2     3
           / \    / \
          4   5  6   7
         / \ 
        8   9 `

function nodeDepths(root) {
    let sumOfDepths = 0;
    let depth = 0;
    for(let i = 0; i < root.length - 1; i++) {
       console.log(root);
    }
}

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

console.log(nodeDepths(myNode));