class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a stack operates on the principal of "First In, Last Out" like waiting in line for something
class SLStack{
    constructor() {
        this.top = null
    }

    // add a given value to your stack
    push(value){
        var nn = new Node(value);
        if(this.isEmpty()){
            this.top=nn
        }
        else{
            nn.next = this.top
            this.top=nn
        }
        return
    }
    
    // remove and return the top value
    pop(){
        var holder = this.top.value
        this.top = this.top.next
        return holder
    }

    // return (don't remove) the top value of a stack
    returnTop() {
        return this.top.value
    }

    // return whether or not a stack is empty
    isEmpty() {
        if(this.top==null)
            return true
        return false
    }

    printStack() {
        var runner = this.top
        while(runner!=null){
            console.log(runner.value)
            runner=runner.next
        }
        return
    }

    // find the size of the stack and print
    size() {
        var count = 0
        var runner = this.top
        while(runner!=null){
            count++
            runner = runner.next
        }
        return count
    }
}

var sls = new SLStack()
sls.push(3)
sls.push(18)
sls.push(12)
sls.push(78)
sls.push(56)
console.log(sls.pop())
console.log(sls.returnTop())
sls.printStack()
console.log(sls.size())