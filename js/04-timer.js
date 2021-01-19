const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockFace: document.querySelector('.js-clockface'),
};

//Разбираем что по датам/времени

// const date = new Date(5000000);
// console.log(date.getTime());
// console.log(date);
// console.log(date.getMinutes());

// const currentDate = Date.now();
// console.log(currentDate);

// const delta = currentDate - date.getTime();

// console.log(delta);

// Проверочка
// setInterval(() => {
//   console.log(new Date());
// }, 1000);

// Таймер

const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    updateClockface(0);
    console.log(this);
    this.isActive = true;
    const startTime = Date.now();
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();

      //   console.log('startTime', startTime);
      //   console.log('currentTime', currentTime);

      const deltaTime = currentTime - startTime;
      //   console.log(deltaTime);

      updateClockface(deltaTime);
    }, 1000);
  },
  stop() {
    console.log(this);
    clearInterval(this.intervalId);
    this.intervalId = null;
    updateClockface(0);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// timer.start();

function updateClockface(time) {
  /**
   * Копипаста со стека 💩
   */
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  //   console.log(`${hours}:${mins}:${secs}`);

  refs.clockFace.textContent = `${hours}:${mins}:${secs}`;
}

function pad(value) {
  // 1 -> 01
  // '1' -> '01'
  return String(value).padStart(2, '0');
}
