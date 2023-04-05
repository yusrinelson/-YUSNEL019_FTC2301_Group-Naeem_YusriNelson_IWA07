const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = "R " + (parseFloat(leoBalance * -1) + parseFloat(sarahBalance * -1)).toFixed(2) //added * -1 to create +
const leo = `${leoName} ${leoSurname} (Owed: R  ${(leoBalance * -1).toFixed(2)})`
const sarah =`${sarahName} ${sarahSurname} (Owed: R  ${(sarahBalance * -1).toFixed(2)})` //gives decimal
const total = "Total amount owed: "
const result = `${leo}
${sarah} 

${divider} 
  ${total}${(owed)}
${divider} ` //used backtick to adjust layout

console.log(result)
