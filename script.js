const form = document.querySelector("#login-form");
const message = document.querySelector("#message");
const password = document.querySelector("#password");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  const showing = password.type === "text";
  password.type = showing ? "password" : "text";
  toggle.textContent = showing ? "显示" : "隐藏";
  toggle.setAttribute("aria-label", showing ? "显示密码" : "隐藏密码");
  toggle.setAttribute("aria-pressed", String(!showing));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const account = form.account.value.trim();
  const secret = form.password.value;

  if (!account || !secret) {
    message.hidden = false;
    message.textContent = "请填写账户和密码。";
    return;
  }

  message.hidden = false;
  message.textContent = "账号或密码错误，请重新输入";
});
