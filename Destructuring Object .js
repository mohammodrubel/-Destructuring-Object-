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
