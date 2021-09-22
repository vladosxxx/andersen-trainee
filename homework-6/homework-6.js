button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 1'))
  console.log('Listener 1')
})
button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 2'))
  console.log('Listener 2')
})
/*
  Answer 1: 
  1. Listener 1
  2. Microtask 2
  3. Listener 2
  4. Microtask 2

  Когда происходит клик по кнопке, слушатели выполняются один за другим. Сначала выполняется первый слушатель, 
  так как интерпретатор проходится сверху вниз.
  Вначале выполнится промис resolve и then поместиться в очередь микротасков, затем выполнится синхронная операция console.log('Listener 1').
  После этого как весь синхронный код в Call stack выполнится и очистится, будет выполняться код из очереди микротасков, 
  выполнится наш then с console.log('Microtask 1'). Аналогично для следуещего слушателя.
*/
button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 1'))
  console.log('Listener 1')
})
button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 2'))
  console.log('Listener 2')
})

button.click()
/*
  Answer 2: 
  1. Listener 1
  2. Listener 2
  3. Microtask 1
  4. Microtask 2

  Когда мы вешаем на кнопку метод click(), при загрузке страницы он попадает в Call stack 
  и слушатели вызываются в том порядке в котором объявлены.
  Сначала выполняется первый слушатель и вначале resolve и then поместиться в очередь микротасков, 
  затем выполнится синхронная операция console.log('Listener 1') и удалится с Call stack.
  Но так как button.click() еще находится в Call stack, то микротаски пока что не выполняются.
  Начинает выполняться второй слушатель, аналогично первому. В нашем стеке удаляется button.click(),
  теперь наш Call stack пуст и eventloop переходит к выполнению микротасков.
*/
