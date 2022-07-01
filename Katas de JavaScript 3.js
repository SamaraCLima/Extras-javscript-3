//--------------------------------------
function kata1 () {
        for (var i = 1; i <= 25; i++) {
        console.log(i)
   } 
}
kata1()
// -------------------------------------
function kata2() {
    for (i = 25; i >= 1; i--) {
      console.log(i);
    }
  }
  kata2();
// -------------------------------------
function kata3 () {
    for (let i = -1; i >= -25; i--){
    console.log(i)
} 
}
kata3()
// -------------------------------------
function kata4 () {
    for (let i = -25; i <= -1; i++){
    console.log(i)
} 
}
kata4()
// -------------------------------------
function kata5() {
    for (let i = -25; i <= 25; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

kata5();
//--------------------------------------
function kata6() {
    for (var i = 1; i < 100; i++) {
        if ((i % 3) == 0) {
            console.log(i);
        }
    }
}

kata6();
// -------------------------------------
function kata7() {
    for (var i = 1; i < 100; i++) {
        if ((i % 7) == 0) {
            console.log(i);
        }
    }
}

kata7();
//-------------------------------------
function kata8() {
    for (let i = 100; i >= 0; i--) {
        if (i % 3 === 0) {
            console.log(i)}
        if (i % 7 === 0) {
            console.log(i)}
    }
}
kata8();
//-------------------------------------
function kata9() {
    for (var i = 5; i < 100; i++) {
        if (i % 5 === 0 && i % 2 !== 0) {
            console.log(i);
        }
    }
}

kata9();
//-------------------------------------
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]
function kata10() {
    return sampleArray
}
console.log(kata10())
//-------------------------------------
function kata11(){
    for (let i = 0; i <= sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            console.log(sampleArray[i])
        }
    }
}
kata11()
//-------------------------------------
function kata12(){
    for (let i = 0; i <= sampleArray.length; i++) {
        if (sampleArray[i] % 2 !== 0) {
            console.log(sampleArray[i])
        }
    }
}
kata12()
//-------------------------------------
function kata13(){
    for (let i = 0; i <= sampleArray.length; i++) {
        if (sampleArray[i] % 8 === 0) {
            console.log(sampleArray[i])
        }
    }
}
kata13()
//-------------------------------------
function kata14() {
    for ( let i = 0; i <= sampleArray.length; i++ ){
        console.log(sampleArray[i] * sampleArray[i])
    }
}
kata14()
//-------------------------------------
function kata15(){
    let result = []
    let soma = 0
    for (let i = 1; i <= 20; i++) {
        result.push(i)}
    for (let i = 0; i < result.length; i++) {
        soma += result[i]}
    return result
}
console.log(kata15())
//-------------------------------------
function kata16() {
    let soma = 0
    for (let i = 0; i < sampleArray.length; i++) {
            soma += sampleArray[i]}
    return soma
}
console.log(kata16())
//-------------------------------------
function kata17() {
    let menor = Math.min(...sampleArray)
        return menor
    }
console.log(kata17())
//------------------------------------
function kata18() {
    let maior = Math.max(...sampleArray)
        return maior
    }
console.log(kata18())
//------------------------------------

