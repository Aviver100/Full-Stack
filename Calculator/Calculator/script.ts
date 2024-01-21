function calculateCompoundInterest() {
    const initialDeposit = parseFloat((document.getElementById('initialDeposit') as HTMLInputElement).value) || 0;
    const monthlyDeposit = parseFloat((document.getElementById('monthlyDeposit') as HTMLInputElement).value) || 0;
    const annualInterest = parseFloat((document.getElementById('annualInterest') as HTMLInputElement).value) || 0;
    const numberOfYears = parseInt((document.getElementById('numberOfYears') as HTMLInputElement).value) || 0;
    const monthlyDepositYears = parseInt((document.getElementById('monthlyDepositYears') as HTMLInputElement).value) || 0;

    const monthlyInterestRate = annualInterest / 12 / 100;
    const totalMonths = numberOfYears * 12;

    let totalDeposited = initialDeposit + monthlyDeposit * 12 * monthlyDepositYears;
    let totalProfit = 0;

    for (let month = 1; month <= totalMonths; month++) {
        totalDeposited += monthlyDeposit;
        totalProfit += (totalDeposited + monthlyDeposit) * monthlyInterestRate;
    }

    const totalSavings = totalDeposited + totalProfit;

    const resultDiv = document.getElementById('result');

    if (resultDiv) {
        resultDiv.innerHTML = `
            <p>Total Amount Deposited: ש"ח${totalDeposited.toFixed(2)}</p>
            <p>Profit Obtained: ש"ח${totalProfit.toFixed(2)}</p>
            <p>Total Savings at the End: ש"ח${totalSavings.toFixed(2)}</p>
        `;
    }
}
