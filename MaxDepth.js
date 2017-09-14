// Max Depth of a Binary Search Tree
// Gregory Raudenbush

function MaxDepth(node){
    if(!node){
        return 0; 
    }
    var leftDepth = MaxDepth(node.left);
    var rightDepth = MaxDepth(node.right);

    if(leftDepth > rightDepth){
        return leftDepth + 1;
    }else{
        return rightDepth + 1;
    }
}