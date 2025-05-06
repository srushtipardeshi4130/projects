const editForm = document.getElementById("editForm");
const nameInput = document.getElementById("editName");
const ageInput = document.getElementById("editAge");
const courseInput = document.getElementById("editCourse");

const students = JSON.parse(localStorage.getItem("students")) || [];
const editIndex = localStorage.getItem("editIndex");

if (editIndex !== null && students[editIndex]) {
  const student = students[editIndex];
  nameInput.value = student.name;
  ageInput.value = student.age;
  courseInput.value = student.course;
}

editForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const age = ageInput.value;
  const course = courseInput.value;

  if (!name || !age || !course) {
    alert("Please fill all fields!");
    return;
  }

  students[editIndex] = { name, age, course };
  localStorage.setItem("students", JSON.stringify(students));
  localStorage.setItem("editSuccess", "true");
  window.location.href = "index4.html";
});


