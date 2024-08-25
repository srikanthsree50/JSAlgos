class Queue {
    constructor(){
        this.queue = [];
        this.maxSize = 100;
        this.head = 0;
        this.tail = 0;
    }
    enqueue(item){
     if(this.isFull()){
return false
     }
     this.queue[this.tail] = item;
     this.tail++;
     return true;
    }
    isFull(){
        return this.getLength() === this.maxSize;
    }
    getLength(){
        return this.tail - this.head;
    }
    isEmpty(){
        return this.getLength === 0;
    }
    dequeue(){
        const item = this.queue[this.head];
        this.head++;
        return item;
    }
    peek(){
        return this.queue[this.head]
    }
}

//QUEUE iMPLEMENTATION
// const que = new Queue()
// que.enqueue("a")
// que.enqueue("b")
// que.enqueue("c")
// que.dequeue()
// console.log(que.peek());

const reversedQueue = (str) => {
   const size = str.length;
  
    const queue = new Queue();
    for(let i = size - 1;i>=0;i--){
queue.enqueue(str[i]);
    }
    let reversedStr = "";
    while(!queue.isEmpty()){
        reversedStr += queue.dequeue()
    }
    return reversedStr;
}
const reverse = reversedQueue("hello");
console.log(reverse)
