
class BinaryTree {
    constructor(spec) {
        const layers = spec.split('\n');
      const thisNodeSpec = layers[0];
      this.value = +thisNodeSpec;
      const posInSpec = thisNodeSpec.length - thisNodeSpec.trimLeft().length;
      let nodes = [this];
      let nodePosInSpec = [posInSpec];
      for (let i=1; i<layers.length; i++) {
          const {newChildNodes, newChildNodePosInSpec} = this._buildLayer(nodes, nodePosInSpec, layers[i]);
          nodes = newChildNodes;
          nodePosInSpec = newChildNodePosInSpec;
      }
    }
  
    print() {
        const nodes = [this];
        while (nodes.length) {
            const node = nodes.shift();
            if (node.left || node.right) {
              console.log(`${node.value}: (${node.left ? node.left.value : " "}, ${node.right ? node.right.value : " "})`);
            }
            if (node.left) nodes.push(node.left);
            if (node.right) nodes.push(node.right);
        }
    }
  
    _buildLayer(nodes, nodePosInSpec, layerSpec) {
        //console.log(nodes, nodePosInSpec, layerSpec);
        const newChildNodes = [];
        const newChildNodePosInSpec = [];
        let nextNode = 0;
        const harvester = /\S+/g;
        let nextChildSpec = harvester.exec(layerSpec);
        while (nextChildSpec) {
            const childString = nextChildSpec[0];
            const isLeft = childString.startsWith('(');
            const childPosInSpec = nextChildSpec.index;
            while (nextNode < nodes.length && nodePosInSpec[nextNode] < childPosInSpec ) {
                nextNode++;
            }
            //console.log(childString, childPosInSpec, nextNode);
            if (isLeft) {
                const theNode = nodes[nextNode];
                console.assert(theNode);
                const newChild = new BinaryTree(childString.slice(1));
                newChildNodes.push(newChild);
                newChildNodePosInSpec.push(childPosInSpec);
                theNode.left = newChild;
                nextNode++;
            }
            else {
                const theNode = nodes[nextNode - 1];
                console.assert(theNode);
                const newChild = new BinaryTree(childString.slice(0, -1));              
                newChildNodes.push(newChild);
                newChildNodePosInSpec.push(childPosInSpec);
                theNode.right = newChild;
            }
            nextChildSpec = harvester.exec(layerSpec);
        }
        return {newChildNodes, newChildNodePosInSpec};
    }
  }
  
  /* Requirement for the spec:
   * the left node should be prefixed with '(' and placed to the left of the parent,
   * and the right node should be postfixed with ')' and placed to the right of the parent.
   */
  const spec0 =
  `                          42
                (12                     45)
            (10     14)           (44         80)
          (0  11)     30)      (43        (70    90)
        (-1             40)                                 `;
  
  
        
        const btree = new BinaryTree(spec0);

        btree.print();
  
//   function depthFirstTraverse(root) {
//     if (root.left) {
//         depthFirstTraverse(root.left);
//     }
//     console.log(root.value);
//     if (root.right) {
//         depthFirstTraverse(root.right);
//     }
//   }

  function nodeDepths(root, level) {
    let sumOfDepths = 0;
    if (root.left !== undefined) {
      sumOfDepths += nodeDepths(root.left, level + 1);
    }
    console.log(root.value, level);
    sumOfDepths += level;
    if (root.right !== undefined) {
      sumOfDepths += nodeDepths(root.right, level + 1);
    }
   return sumOfDepths;
  }


console.log("results",nodeDepths(btree, 0));
