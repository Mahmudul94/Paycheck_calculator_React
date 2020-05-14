const inputData = {
  checkDate: "",
  grossPay: "",
  gPayMethod: "",
  gSalaryYTD: "",
  payFreq: "",
  fedFilingStat: "",
  numOfFedAllowances: "",
  additionalFederalWithholding: "",
  roundFederalWithholding: "",
  exemptFromFedTax: "",
  exemptFromFICATax: "",
  exemptFromMedicareTax: "",
};
const outputData = {
  grossPay: "",
  fedWithholding: "",
  SS: "",
  medicare: "",
};

const givenInfo = {
  medicareTax: 1.45,
  ssTaxRate: 6.2,
  employerFedSSTaxRate: 6.2,
};

export const paycheckData = (data) => {
  inputData.grossPay = data.grossPay;

  outputData.medicare = (data.grossPay * givenInfo.medicareTax) / 100;
  outputData.SS = (data.grossPay * givenInfo.ssTaxRate) / 100;
  outputData.grossPay = data.grossPay;

  return outputData;
};
