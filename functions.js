

let colors = [
    'green',
    'yellow',
    ' red',
    'black',
    'orange'
]
colors.forEach((color) => { console.log(`My favorite color is ${color}`) })

let elements = colors.map((
    color => {
        return `<div> ${color}<div> `

    }))

console.log(elements)
