(() => {
  const inputChangeHandler = (e) => {
    alert(`Отправляем ${e.target.value}`);
  };
  const debounce = (cb, delay) => {
    let timeout;

    return (...args) => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => cb(...args), delay);
    };
  };

  const withoutDebounceInput = document.querySelector(
    "#without_debounce_input"
  );

  withoutDebounceInput.addEventListener("keyup", inputChangeHandler);

  const debounceInput = document.querySelector("#debounce_input");

  debounceInput.addEventListener("keyup", debounce(inputChangeHandler, 1000));
})();

(() => {
  const createMouseMoveHandler = (el) => () => {
    const n = el.innerHTML ? Number(el.innerHTML) : 0;

    el.innerHTML = String(n + 1);
  };

  const throttle = (cb, delay) => {
    let isThrottled = false;

    return (...args) => {
      if (isThrottled) {
        return;
      }

      cb(...args);
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
      }, delay);
    };
  };

  const withoutThrottle = document.querySelector("#without-throttle");
  const withThrottle = document.querySelector("#throttle");

  document.addEventListener(
    "mousemove",
    createMouseMoveHandler(withoutThrottle)
  );
  document.addEventListener(
    "mousemove",
    throttle(createMouseMoveHandler(withThrottle), 1000)
  );
})();
