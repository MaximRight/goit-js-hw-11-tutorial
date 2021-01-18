// Метод setTimeout

// Можно делать как инлайн так и внешнюю функции
// setTimeout(() => {
//   console.log('Лог при вызове callback-функции через 3 секунды');
// }, 3000);

// пример внешней функции
// const log = () => {
//   console.log('Лог при вызове callback-функции через 3 секунды');
// };

// setTimeout(log, 3000);

// Асинхронность кода

console.log('До вызова setTimeout');
// setTimeout(log, 3000);

// если через ноль секунд, все равно после выполнения синхронного кода
// setTimeout(log, 0);
console.log('После вызова setTimeout');

// Очистка таймаута с clearTimeout()

const logger = time => {
  console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
};

const timerId = setTimeout(logger, 2000, 2000);
console.log(timerId);
// clearTimeout(timerId);

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(timerId);
}
