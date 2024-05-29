document
  .getElementById("form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
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