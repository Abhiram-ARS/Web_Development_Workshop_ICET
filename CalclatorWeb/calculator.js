function average(){
    const a=Number(getValue()[0])
    const b=Number(getValue()[1])
    let c=(a+b)/2
    document.getElementById("demo").innerHTML= "Average ="+c
    console.log(c)
}

function add(){
    const a=Number(getValue()[0])
    const b=Number(getValue()[1])
    let c=(a+b)
    document.getElementById("demo").innerHTML= "Sum ="+c
    console.log(c)
}

function substract(){
    const a=Number(getValue()[0])
    const b=Number(getValue()[1])
    let c=a-b
    document.getElementById("demo").innerHTML= "Difference ="+c
    console.log(c)
}
function multiply(){
    const a=Number(getValue()[0])
    const b=Number(getValue()[1])
    let c=a*b
    document.getElementById("demo").innerHTML= "Product ="+c
    console.log(c)
}

function getValue(){
    const n1 = document.getElementById("num1").value
    const n2 = document.getElementById("num2").value
    console.log("n1="+n1)
    console.log("n2="+n2)
    return [n1,n2]
}

