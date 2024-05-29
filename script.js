document
  .getElementById("form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let dateStr = document.getElementById("birthdate").value;
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
  });

  function formatDateString(dateStr) {
    let dateArray = dateStr.split("/");
    let newDate = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
    return newDate;
  }