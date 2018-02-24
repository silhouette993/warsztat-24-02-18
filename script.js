console.log('Hello Sylwia!')

// data types in JS

// primitives

// string
var textVariable = "Sylwia"
console.log(textVariable)

// numer
var numberVariable = 43
console.log(numberVariable)

// boolean
var boolVariable = true
console.log(boolVariable)

// null
var nullVariable = null
console.log(nullVariable)

//undefined
var undefinedVariable = undefined
console.log(undefinedVariable)

// objects


// objects with data
var simplestObj = {
    name: "Sylwia",
    lastname: "Krakowiak"
}
console.log(simplestObj)

// objects with data
var nastedObj = {
    name: "Sylwia",
    car: {
        brand: "Peugeot",
        model: 407 
    }
}
console.log(nastedObj)
console.log(nastedObj.car.model)
console.log(nastedObj.car.year)

// arrays
var simpleArray = [1,
    {name: "Sylwia", array: [1,4,6]},
    3,
    4,
    5]
console.log(simpleArray)
console.log(simpleArray[4])
console.log(simpleArray[1].name)

