function generateCertificate() {
  const name = document.getElementById('nameInput').value;
  const course = document.getElementById('courseInput').value;
  const date = new Date().toLocaleDateString();

  if (!name || !course) {
    alert("Please enter both name and course.");
    return;
  }

  document.getElementById('certName').innerText = `${name}`;
  document.getElementById('certCourse').innerText = course;
  document.getElementById('certDate').innerText = `Date Issued: ${date}`;

  document.getElementById('certificate').style.display = 'block';
  document.getElementById('downloadBtn').style.display = 'inline-block';
}

function downloadCertificate() {
  html2canvas(document.getElementById('certificate')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'certificate.png';
    link.href = canvas.toDataURL();
    link.click();
  });
  showDownloadMessage();
}

function showDownloadMessage() {
  alert("Your certificate has been downloaded successfully!");
}