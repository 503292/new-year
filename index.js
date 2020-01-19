export class CountdownTimer {
  constructor({ selector, targetDate, birthDay }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      year: document.querySelector(` [data-value="end-years"]`),
      day: document.querySelector(`${this.selector} [data-value="days"]`),
      hour: document.querySelector(`${this.selector} [data-value="hours"]`),
      min: document.querySelector(`${this.selector} [data-value="mins"]`),
      sec: document.querySelector(`${this.selector} [data-value="secs"]`)
    };
    // створює кожен раз новий таймер
    this.startTimer();
  }

  startTimer() {
    setInterval(() => {
      // різниця між датою яку ми очікуєм і яка є на даний момент
      const differenceTime = this.targetDate - new Date().getTime(); // або Date.now()

      if (differenceTime >= 0) {
        // формули для часу
        const days = pad(Math.floor(differenceTime / (1000 * 60 * 60 * 24)));
        const hours = pad(
          Math.floor(
            (differenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          )
        );
        const mins = pad(
          Math.floor((differenceTime % (1000 * 60 * 60)) / (1000 * 60))
        );
        const secs = pad(Math.floor((differenceTime % (1000 * 60)) / 1000));

        this.refs.day.textContent = days;
        this.refs.hour.textContent = hours;
        this.refs.min.textContent = mins;
        this.refs.sec.textContent = secs;
      } else {
        // зупинка таймера при обнуленні
        clearInterval(this.startTimer);
      }
    }, 1000);
  }
}

// функція для забивання символами '0' пустих місць
export function pad(value) {
  return String(value).padStart(2, "0");
}

const timeBirthday_100 = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 01, 2021")
});
