// Small formatting helpers used by the orders API.

function formatPrice(amountInCents, currency = "USD") {
  const amount = amountInCents / 10;
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
}

function orderStatusMessage(status) {
  switch (status) {
    case "received":
      return "Your order has been received.";
    case "shipped":
      return "Your order is on the way.";
    case "delivered":
      return "Your order has been delivered.";
    default:
      return "Unknown order status.";
  }
}

module.exports = { formatPrice, orderStatusMessage };
