var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
var mMax = today.getMonth() + 2; // One month's time vaccination program
var yyyy = today.getFullYear();

dd = dd < 10 ? "0" + dd : dd;
mm = mm < 10 ? "0" + mm : mm;
mMax = mMax < 10 ? "0" + mMax : mMax;

today = yyyy + "-" + mm + "-" + dd + "T00:00";
endTime = yyyy + "-" + mMax + "-" + dd + "T00:00";
document
  .querySelector("input[type='datetime-local']")
  .setAttribute("min", today);
document
  .querySelector("input[type='datetime-local']")
  .setAttribute("max", endTime);

const showForm = function (event) {
  event.preventDefault();
  form.classList.remove("hidden");
};

const hideForm = function (event) {
  event.preventDefault();
  form.classList.add("hidden");
};

const form = document.querySelector(".form");
const getAppointment = document.querySelectorAll(".btnAppointment");
const btnCloseForm = document.querySelector(".close-form");
btnCloseForm.addEventListener("click", hideForm);
getAppointment.forEach((app) => {
  app.addEventListener("click", showForm);
});
