// =======================================
// None of this is my code! :,( (Bad Day!)
// =======================================



class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue{
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the end of queue
    enqueue(value) {
        var nn = new Node(value)
        if(this.tail == null){
            this.tail = nn
            this.head = nn
            nn.next = null
        }
        else{
            this.tail.next = nn
            nn.next = null
            this.tail = nn
        }
    }

    // remove and return the front value from the queue
    dequeue() {
        if(this.isEmpty()){
            console.log("List is empty")
            return
        }
        var value = this.head.value
        this.head = this.head.next
        return value
    }

    //return true/false based on whether you find the given value in a queue
    contains(value) {
        var runner = this.head
        while(runner != null){
            if(runner.value == value){
            return true
            }
            runner = runner.next
        }
        return false
    }

    // write an algo that prints the values in a queue in order; try and identify the FRONt and TAIL as well
    displayQueue(){
        var runner = this.head
        while(runner != null){
            console.log(runner.value)
            runner = runner.next
        }
    }

    // return the value of the front node without removing from list
    front() {
        if(this.isEmpty()){
            console.log("The list is empty")
        }
        else{
            console.log(this.head.value)
        }
    }

    // return whether or not a list is empty
    isEmpty() {
        if(this.head == null){
            return true
        }
        else{
        return false
        }
    }
    size(){
        var counter = 0
        var runner = this.head
        while(runner != null){
        runner = runner.next
        counter++
        }
        return counter
    }
}


var q = new SLQueue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(3);
q.enqueue(2);
q.enqueue(1);
q.displayQueue()