function number_Reverser(num) {
    let reversedNumber = []
    let holder = num.toString()
    for(i = holder.length - 1; i >= 0 - 1; i--) {
       let holder2 = reversedNumber.push(holder[i])
    }
    let finalNumber = parseInt(reversedNumber.join(''))
    console.log(finalNumber)
}

module.exports = number_Reverser