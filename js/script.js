document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("check-button");
  const message = document.getElementById("status-message");

  if (button && message) {
    button.addEventListener("click", () => {
      message.textContent = "JavaScript работает корректно! Скрипт успешно подключён.";
    });
  }
});
