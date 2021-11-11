const form = document.querySelector(".form");
const btnGetAppointment = document.querySelector("#zhbutton");
const btnCloseForm = document.querySelector(".close-form");

const showForm = function () {
  form.classList.remove("hidden");
};

btnGetAppointment.addEventListener("click", showForm);
const hideForm = function () {
  form.classList.add("hidden");
};
btnCloseForm.addEventListener("click", hideForm);