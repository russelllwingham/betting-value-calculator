function calc() {
    const odds = document.getElementById('odds').value;
    const prob = document.getElementById('prob').value / 100;
    const resultDiv = document.getElementById('result');
    
    if(!odds || !prob) return;

    // The Formula: (Prob * Odds) - 1
    const ev = (prob * odds) - 1;
    const evPct = (ev * 100).toFixed(2);

    if (ev > 0) {
        resultDiv.innerHTML = `<span style="color:#2ecc71">VALUE FOUND: +${evPct}%</span>`;
    } else {
        resultDiv.innerHTML = `<span style="color:#e74c3c">NO VALUE: ${evPct}%</span>`;
    }
}
