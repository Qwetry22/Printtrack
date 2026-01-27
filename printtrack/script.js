function checkStatus() {
  const code = document.getElementById("orderCode").value;
  const status = document.getElementById("status");

  if (code === "TEST123") {
    status.textContent = "Status: Drukuje się 🔄";
  } else {
    status.textContent = "Nie znaleziono zamówienia ❌";
  }
}