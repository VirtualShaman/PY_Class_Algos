class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SLList{
    constructor(){
        this.head = null
    }

    addToFront(value) {
        // step #1) create an instance of a Node, using the input value
        var nn = new Node(value);
        // // step #1a [EDGE CASE]) check the edge case of nothing in your list
        // if(this.head == null) {
        //     // set this.head equal to whatever node I've created
        //     this.head = nn
        //     // return 'this' to end function and allow chaining of methods
        //     return this
        // }
        // step #2) point our node into the list
        nn.next = this.head
        // step #3) move the head pointer to the correct location
        this.head = nn
    }

    // given a value, add it to the back of your singly linked list
    // what if the list is empty?
    addToBack(value) {
        // step #1) create an instance of a Node, using the input value
        var nn = new Node(value);
        // step #1a [EDGE CASE]) check the edge case of nothing in your list
        if(this.head == null) {
            console.log("Nothing in list, so simply add to this.head")
            // set this.head equal to whatever node I've created
            this.head = nn
            // return 'this' to end function and allow chaining of methods
            return this
        }
        // step #2) traverse to the location where you want to add the node (aka, the final node in the list)
        var runner = this.head;

        while(runner.next != null) {
            runner = runner.next
        }
        // step #3) change runner's .next pointer, to point at our new node
        runner.next = nn
    }

    // // given a value, print whether the list contains that value
    // contains(value) {
    //     // your code here
    // }
    
    // print the singly linked list
    printValues() {
        // step #0 [EDGE CASE]) handle a case where there is nothing in the list
        if(this.head == null){
            console.log("There's nothing in the list! Dummy!")
            return this
        }
        //step #1) establish a runner to traverse through the list
        var runner = this.head;

        // NOTE: we can move runner all the way into null because our loop will exit as soon as runner hits null, avoiding any errors with printing
        while(runner != null) {
            // step #2) print the values at each iteration before moving the runner!
            console.log(`The current value is: ${runner.value}`)
            runner = runner.next
        }
        console.log("We have hit the end of the list!")
        return this;
    }

}

const sll = new SLList();
sll.addToFront(9)
sll.addToFront(3)
sll.addToFront(-4)
sll.addToFront(16)
sll.addToFront(7)
sll.addToBack(5)
// sll.addToBack(48)
// sll.addToBack(-5)
// sll.addToBack(-15)
// sll.addToBack(14)
sll.printValues()