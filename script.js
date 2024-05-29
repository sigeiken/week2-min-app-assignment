document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let dateStr = document.getElementById("birthdate").value;

  if (!isDayValid(dateStr)) {
    alert("Please enter a valid day.");
    return;
  }

  if (!isMonthValid(dateStr)) {
    alert("Please enter a valid month.");
    return;
  }

  if (!isYearValid(dateStr)) {
    alert("Please enter a valid year.");
    return;
  }

  const birthdate = new Date(formatDateString(dateStr));
  if (!isDateValid(birthdate)) {
    alert("Please enter a valid birthdate.");
    return;
  }

  const gender = document.querySelector('input[name="gender"]:checked').value;
  const dayOfWeek = birthdate.getUTCDay();
  const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
  };

  const akanName = akanNames[gender][dayOfWeek];
  document.getElementById(
    "result"
  ).innerText = `Your Akan name is: ${akanName}`;

  var form = document.getElementById("form");
  form.reset();
});

function formatDateString(dateStr) {
  let dateArray = dateStr.split("/");
  let newDate = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
  return newDate;
}

function isDayValid(dateStr) {
  let dateArray = dateStr.split("/");
  let day = dateArray[0];
  return day <= 0 || day > 31 ? false : true;
}

function isMonthValid(dateStr) {
  let dateArray = dateStr.split("/");
  let month = dateArray[1];
  return month <= 0 || month > 12 ? false : true;
}

function isYearValid(dateStr) {
  let dateArray = dateStr.split("/");
  let year = dateArray[2];
  return year > 1900 && year < new Date().getFullYear() ? true : false;
}

function isDateValid(birthdate) {
  return !isNaN(new Date(birthdate));
}
