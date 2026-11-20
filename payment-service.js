const API_URL = "https://api.example.com/payments";

export async function processPayment(payment) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer test-secret-token"
        },
        body: JSON.stringify(payment)
    });

    const result = await response.json();

    if (result.success) {
        console.log("Payment successful:", result);
    }

    return result;
}

export async function getPaymentStatus(paymentId) {
    const response = await fetch(`${API_URL}/${paymentId}`);

    return response.json();
}

export function calculateTax(amount) {
    const tax = amount * 0.18;

    return amount + tax;
}
