
//linear search
function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i
        }
    }

    return -1
}



//Binary Search
function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start
    var end = end === undefined ? array.length : end

    if (start > end) {
        return -1
    }

    const index = Math.floor((start + end) / 2)
    const item = array[index]

    console.log(start, end)
    if(item === value) {
        return index    
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end)
    }
    else if(item > value) {
        return binarySearch(array, value, start, index - 1)
    }
}



//Depth-first search
class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key
        this.value = value
        this.parent = parent
        this.left = null
        this.right = null
    }

    //depth-first search 
    dfs(value=[]) {
        if (this.left) {
            values = this.left.dfs(values)
        }
        values.push(this.value)

        if(this.right) {
            values = this.right.dfs(values)
        }
        return values
    }


    //breadth-first search (level by level)
    bfs(tree, values = []) {
        const queue = new Queue()
        const node = tree.root
        queue.enqueue(node)
        while (queue.length) {
            const node = queue.dequeue()
            values.push(node.value)

            if(node.left) {
                queue.enqueue(node.left)
            }

            if(node.right) {
                queue.enqueue(node.right)
            }
        }

        return values
    }
}

let testArray = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]


binarySearch(testArray, 8)
binarySearch(testArray, 16)