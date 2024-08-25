class Stack {
    constructor(){
        this.maxSize = 100;
        this.stack = [];
        this.size = -1;
    }

    push(value){
if(this.isFull())
{
    return " Call Stack max limit Exceeded"
}
this.size++;
this.stack[this.size] = value;
return true;
    }

    pop(){
        if(this.isEmpty()){
            return null;
        }
        this.size--;
        return  this.stack.pop()
    }

    isEmpty(){
        return this.size === -1;
    }
    isFull(){
        return this.size === this.maxSize - 1;
    }
    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.stack[this.size]
    }
}

// const st = new Stack;
// st.push(1);
// st.push(2)
// st.push("s");
// st.push(3);
// st.pop();
// st.peek()
// console.log(st)

// REVERSE A STRING
// const reversedStr = function(str){
// const stack = new Stack();
// for(let i=0;i<str.length;i++){
//     stack.push(str[i])
// }
// let reversed = "";
// while(!stack.isEmpty()){
//     reversed += stack.pop();
// }
// return reversed;
// }
// let result = reversedStr("hello man")

function balancedParanthesis(str){
    const stack = new Stack();
for(let i =0 ;i< str.length;i++){
if(str[i] === '('){
    stack.push(str[i])
}
else if(str[i] === ")"){
    if(stack.isEmpty()){
        return false;
    }
    stack.pop();
}
}
return stack.isEmpty();
}
const result = balancedParanthesis("()")
console.log(result)

