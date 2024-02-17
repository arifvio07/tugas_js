function panggilNestedArray(value) {
    let a = []
    for(let i = 0 ;i < value[0].length ; i++) {
        a.push(value.map(kedalam => kedalam[i]))
    }
    console.log(a)
}
var nestedArray = [
    [1,2,3,4],
    ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
    ['Facebook', 'Tesla', 'Microsoft', 'Apple']
 ]
panggilNestedArray(nestedArray)

