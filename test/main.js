//Promise – это специальный объект, который содержит своё состояние.
//Вначале pending (ожидание), затем – одно из: fulfilled (выполнено успешно) и rejected (выполнено с ошибкой)
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("время вышло!"));
  }, 2000);
});
promise
  .then(
    result => alert("Fulfilled: " + result),
    error => alert("Rejected: " + error.message)
  );


//Объявление async function определяет асинхронную функцию, которая возвращает объект AsyncFunction.
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });
  let result = await promise;
  alert(result);
}
f();

//Контекст выполнения — это,концепция, описывающая окружение, в котором производится выполнение кода на JavaScript.
//Код всегда выполняется внутри некоего контекста.
const test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

console.log(test.func());

//Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена.
function person() {
  let name = 'Peter';

  return function displayName() {
    console.log(name);
  };
}
let peter = person();
peter();


//У стрелочных функций нет this. Если происходит обращение к this, его значение берётся снаружи,также нет переменной arguments.
//стрелочная функция —Это способ сэкономить строки кода и сделать код читаемым.
const getSomething=()=>{
  console.log();
};