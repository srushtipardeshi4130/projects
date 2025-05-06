const studentForm = document.getElementById("studentForm");
const studentTable = document.querySelector("#studentTable tbody");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const courseInput = document.getElementById("course");
const studentIndexInput = document.getElementById("studentIndex");

let students = JSON.parse(localStorage.getItem("students")) || [];

window.addEventListener("DOMContentLoaded", () => {
  const successFlag = localStorage.getItem("editSuccess");
  if (successFlag === "true") {
    showPopup("Student updated successfully!");
    localStorage.removeItem("editSuccess");
  }

  renderTable(); 
});

function renderTable() {
  studentTable.innerHTML = "";

  students.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td data-label="Name">${student.name}</td>
      <td data-label="Age">${student.age}</td>
      <td data-label="Course">${student.course}</td>
      <td data-label="Actions">
        <button class="action-btn edit-btn" onclick="editStudent(${index})">Edit</button>
        <button class="action-btn delete-btn" onclick="deleteStudent(${index})">Delete</button>
      </td>
    `;

    studentTable.appendChild(row);
  });
}

function saveToLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}

studentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const age = ageInput.value;
  const course = courseInput.value;

  if (!name || !age || !course) {
    alert("Please fill all fields!");
    return;
  }

  const student = { name, age, course };
  const editIndex = studentIndexInput.value;

  if (editIndex === "") {
    students.push(student);
  } else {
    students[editIndex] = student;
  }

  saveToLocalStorage();
  renderTable();
  studentForm.reset();
  studentIndexInput.value = "";
});

function deleteStudent(index) {
  if (confirm("Are you sure you want to delete this student?")) {
    students.splice(index, 1);
    saveToLocalStorage();
    renderTable();
  }
}

function editStudent(index) {
  localStorage.setItem("editIndex", index);
  window.location.href = "edit.html";
}

function showPopup(message) {
  const popup = document.createElement("div");
  popup.textContent = message;
  popup.style.position = "fixed";
  popup.style.top = "20px";
  popup.style.left = "50%";
  popup.style.transform = "translateX(-50%)";
  popup.style.backgroundColor = "#28a745"; 
  popup.style.color = "white";
  popup.style.padding = "10px 20px";
  popup.style.borderRadius = "8px";
  popup.style.boxShadow = "0px 2px 10px rgba(0,0,0,0.2)";
  popup.style.zIndex = "9999";
  popup.style.fontWeight = "bold";
  popup.style.fontSize = "16px";
  document.body.appendChild(popup);

  popup.style.backgroundColor = "#28a745";

  setTimeout(() => {
    popup.remove();
  }, 3000);
}
