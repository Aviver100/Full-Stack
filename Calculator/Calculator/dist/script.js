function calculateCompoundInterest() {
    var initialDeposit = parseFloat(document.getElementById('initialDeposit').value);
    var monthlyDeposit = parseFloat(document.getElementById('monthlyDeposit').value);
    var annualInterest = parseFloat(document.getElementById('annualInterest').value);
    var numberOfYears = parseInt(document.getElementById('numberOfYears').value);
    var monthlyDepositYears = parseInt(document.getElementById('monthlyDepositYears').value);
    var monthlyInterestRate = annualInterest / 12 / 100;
    var totalMonths = numberOfYears * 12;
    var totalDeposited = initialDeposit + monthlyDeposit * 12 * monthlyDepositYears;
    var totalProfit = 0;
    for (var month = 1; month <= totalMonths; month++) {
        totalDeposited += monthlyDeposit;
        totalProfit += (totalDeposited + monthlyDeposit) * monthlyInterestRate;
    }
    var totalSavings = totalDeposited + totalProfit;
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "\n        <p>Total Amount Deposited: $" + totalDeposited.toFixed(2) + "</p>\n        <p>Profit Obtained: $" + totalProfit.toFixed(2) + "</p>\n        <p>Total Savings at the End: $" + totalSavings.toFixed(2) + "</p>\n    ";
}
