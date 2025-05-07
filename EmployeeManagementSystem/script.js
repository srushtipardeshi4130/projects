window.onload = function() {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const employeeList = document.getElementById("employee-list");
    employeeList.innerHTML = "";
  
    if (employees.length === 0) {
      employeeList.innerHTML = "<tr><td colspan='4'>No employees available</td></tr>";
    } else {
      employees.forEach((employee, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${employee.name}</td>
          <td>${employee.email}</td>
          <td>${employee.phone}</td>
          <td>
            <button onclick="editEmployee(${index})">Edit</button>
            <button onclick="deleteEmployee(${index})">Delete</button>
          </td>
        `;
        employeeList.appendChild(row);
      });
    }
  };
  
  function editEmployee(index) {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const employee = employees[index];
  
    const name = prompt("Enter new name:", employee.name)?.trim();
    const email = prompt("Enter new email:", employee.email)?.trim();
    const phone = prompt("Enter new phone:", employee.phone)?.trim();
  
    if (name && email && phone) {
      employees[index] = { name, email, phone };
      localStorage.setItem("employees", JSON.stringify(employees));
      alert("Employee updated successfully!");
      window.location.reload();
    } else {
      alert("Update cancelled or invalid input.");
    }
  }
  
  function deleteEmployee(index) {
    if (confirm("Are you sure you want to delete this employee?")) {
      const employees = JSON.parse(localStorage.getItem("employees")) || [];
      employees.splice(index, 1);
      localStorage.setItem("employees", JSON.stringify(employees));
      alert("Employee deleted successfully!");
      window.location.reload();
    }
  }
  