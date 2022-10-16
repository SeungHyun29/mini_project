export function changeNumber(number) {
    let arr = number.split('')
    return arr.fill("*",8).join('')
}
