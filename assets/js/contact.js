const button = document.getElementById("submit");
const form = document.getElementById("my-form");

const onSubmit = (e) => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  e.preventDefault();
  if (
    name.value === undefined ||
    email.value === "" ||
    email.value === undefined ||
    message.value === undefined ||
    message.value === ""
  ) {
    alert("Please fill the form first, all fields are required!");
  } else {
    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    fetch("http://206.189.143.80:7001/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        alert("Your message is sent successfully.");
        name.value = "";
        email.value = "";
        message.value = "";
      }
    });
  }
};

form.addEventListener("submit", onSubmit);

// button.addEventListener("click", function () {
//   form.removeEventListener("submit", submitHandler);
// });
