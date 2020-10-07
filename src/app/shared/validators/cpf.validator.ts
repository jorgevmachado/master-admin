import {AbstractControl, ValidationErrors} from '@angular/forms';

export default function(controls: AbstractControl): ValidationErrors | null{
  const invalid = {cpfValidation: true}; // Return as invalid username
  const cleanCPF = controls.value.replace(/\.|\-|\_|\s/g, ''),
    firstNineDigits = cleanCPF.substring(0, 9),
    checker = cleanCPF.substring(9, 11);
  if (cleanCPF.length !== 11) {
    return invalid;
  }
  // Checking if all digits are equal
  for (let i = 0; i < 10; i++) {
    const j = i + '';
    if ('' + firstNineDigits + checker === Array(12).join(j)) {
      return invalid;
    }
  }
  // Check first 9 digits
  let sum = null;
  for (let j = 0; j < 9; ++j) {
    sum += firstNineDigits.toString().charAt(j) * (10 - j);
  }
  const lastSumChecker1 = sum % 11;
  const checker1 = lastSumChecker1 < 2 ? 0 : 11 - lastSumChecker1;
  // check 2
  sum = null;
  const cpfWithChecker1 = firstNineDigits + checker1;
  for (let k = 0; k < 10; ++k) {
    sum += cpfWithChecker1.toString().charAt(k) * (11 - k);
  }
  const lastSumChecker2 = sum % 11;
  const checker2 = lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2;
  if (checker.toString() === checker1.toString() + checker2.toString()) {
    return null; // Return as valid CPF
  } else {
    return invalid;
  }
}
