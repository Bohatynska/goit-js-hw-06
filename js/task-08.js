const formRef = document.querySelector(".login-form");
// console.log(formRef);
formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const formData = new FormData(formRef);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log(data);
  console.log(`email: ${email.value}, password: ${password.value}`);
  formRef.reset();
});
