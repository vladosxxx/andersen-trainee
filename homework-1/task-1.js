let a = prompt('First num')
let b = prompt('Second num')
if (isNaN(a) || isNaN(b)) {
  console.log('Некорректный ввод!')
} else {
  console.log(parseInt(a, 10).toString(b))
}
