let num1 = +prompt("1-sonni kiriting")
let num2 = +prompt("2-sonni kiriting")
let num3 = +prompt("3-sonni kiriting")
if ((num1>num2 && num1<num3) || (num1<num2 && num1>num3)) {
    alert(`O'rta qiymat: ${num1}`)
} else if((num2>num1 && num2<num3) || (num2<num1 && num2>num3)){
    alert(`O'rta qiymat: ${num2}`)
} else{
    alert(`O'rta qiymat: ${num3}`)
}