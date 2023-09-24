function calculateNetSalary(basicSalary, benefits) {
  // Constants for tax rates, NHIF rate, and NSSF rate
  const taxRate = 0.3;  // 30% tax rate
  const nhifRate = 0.05;  // 5% NHIF rate
  const nssfRate = 0.06;  // 6% NSSF rate

  // Calculate gross salary
  const grossSalary = basicSalary + benefits;

  // Calculate tax (payee) based on the tax rate
  const tax = grossSalary * taxRate;

  // Calculate NHIF deductions based on the NHIF rate
  const nhifDeductions = grossSalary * nhifRate;

  // Calculate NSSF deductions based on the NSSF rate
  const nssfDeductions = grossSalary * nssfRate;

  // Calculate net salary by subtracting tax, NHIF, and NSSF deductions
  const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

  // Create an object to store the calculated values
  const salaryDetails = {
    grossSalary: grossSalary,
    tax: tax,
    nhifDeductions: nhifDeductions,
    nssfDeductions: nssfDeductions,
    netSalary: netSalary,
  };

  return salaryDetails;
}

// Prompt the user for input
const basicSalaryInput = prompt("Enter your basic salary:");
const benefitsInput = prompt("Enter your benefits:");

// Convert the user input to numbers
const basicSalary = parseFloat(basicSalaryInput);
const benefits = parseFloat(benefitsInput);

// Check if the input is valid numbers
if (!isNaN(basicSalary) && !isNaN(benefits)) {
  // Calculate and display salary details
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  alert("Salary Details:\n" +
    `Gross Salary: ${salaryDetails.grossSalary}\n` +
    `Tax (Payee): ${salaryDetails.tax}\n` +
    `NHIF Deductions: ${salaryDetails.nhifDeductions}\n` +
    `NSSF Deductions: ${salaryDetails.nssfDeductions}\n` +
    `Net Salary: ${salaryDetails.netSalary}`
  );
} else {
  // Display an error message for invalid input
  alert('Invalid input. Please enter valid numbers for basic salary and benefits.');
}
