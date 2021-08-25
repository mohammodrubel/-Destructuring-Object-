const myPc = {
    pc : 40000,
    ssd :7000,
    graphic : 8000,
    matherbord : 20000,
    address:'Dhaka Bashaboo',
    mobile : '01907626245',
}
const {pc,address}=myPc
console.log(pc,address)

const myObj = {
    name:'abdul Hamid',
    position :'CEO',
    company:{ employe:200,
              companyCost:500000,
              mobile:'01907626245',
              pcCostMonthly:20000,
            }
    
}
const {position}=myObj
const {mobile,pcCostMonthly}=myObj.company
console.log(position)
console.log(mobile,pcCostMonthly)



// main example 
const myArray = [12,34,56,78,90,123,456,798,765,432]
const [num1,num2,num3,num4,num5,num6,...x] =myArray
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)

console.log(x)


let a=23,b=34;
[a,b] = [b,a]
console.log(a)
console.log(b)

const myObj = {
    name:'Mohammod rubel',
    roll:'234567',
    class:'eleven',
    address:'Bashaboo',
    mobile:'01907626245',
    mega:{name:'fardin Tazbeed',roll:'23456',class:'seven',mobile:'01907626245'},
    result:{fastAnaulExam:'flastClass',SecondAnaulExam:'secondClass',ThirdAnaulExam:'thirdClass'}
}
console.log(myObj)
console.log(myObj.name)
console.log(myObj.roll)
console.log(myObj.class)
console.log(myObj.address)
console.log(myObj.mobile)
console.log(myObj.result.fastAnaulExam)
console.log(myObj.mega.mobile)

const {name,roll}=myObj
console.log(name,roll)
const {SecondAnaulExam}=myObj.result
console.log(SecondAnaulExam)
const {mobile}=myObj.mega;
console.log(mobile)

// arro function and implement object and maltidimantional object 
const studentInfo = {
    name:'Mohammod rubel',
    class:'BBA',
    mobile:'01907626245'
}
const getOutput =()=>{
    console.log(`${studentInfo.name} ${studentInfo.class} ${studentInfo.mobile}`)
}
getOutput(studentInfo)


