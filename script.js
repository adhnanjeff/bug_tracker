document.addEventListener("DOMContentLoaded", function () {
  const bugForm = document.getElementById("bugForm");
  const bugList = document.getElementById("bugList");

  bugForm.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const title = document.getElementById("bugTitle").value.trim();
    const description = document.getElementById("bugDescription").value.trim();
    const priority = document.getElementById("bugPriority").value;

    if (title === "" || description === "" || priority === "") {
      alert("Please fill out all fields.");
      return;
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${title}</strong> - ${description} [Priority: ${priority.charAt(0).toUpperCase() + priority.slice(1)}]`;
    bugList.appendChild(listItem);

    // Optional: clear form fields
    bugForm.reset();
  });
});
