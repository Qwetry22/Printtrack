function check() {
  const code = document.getElementById("code").value;
  const result = document.getElementById("result");

  const order = orders.find(o => o.code === code);

  if (!order) {
    result.textContent = "❌ Nie znaleziono zamówienia";
    return;
  }

  result.textContent =
    `Opis: ${order.description}\nStatus: ${order.status}\nEtap: ${order.step}\nInfo: ${order.comment}`;
}
