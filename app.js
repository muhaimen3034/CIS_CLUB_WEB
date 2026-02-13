document.getElementById("enrollForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fields = ["fullname", "email", "phone", "dept", "batch", "hometown", "wp", "fb", "comment"];
    let valid = true;

    fields.forEach(id => {
      const value = document.getElementById(id).value.trim();
      if (value === "") valid = false;
    });

    const emailValue = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) valid = false;

    if (!valid) {
      document.getElementById("errorMsg").style.display = "block";
      return;
    }

    document.getElementById("errorMsg").style.display = "none";
    alert("Form submitted successfully! (You can connect backend later)");
    document.getElementById("enrollForm").reset();
  });