export const onlyLetters = (v: string) => v.replace(/\d/g, '');
export const onlyLettersUpperCase = (v: string) => {
  v = v.toUpperCase();
  return v.replace(/\d/g, '');
};
export const onlyLettersLowerCase = (v: string) => {
  v = v.toLowerCase();
  return v.replace(/\d/g, '');
};
export const onlyNumbers = (v: string) => v.replace(/\D/g, '');

export const cepMask = (value: string) =>
  value
    ? value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
    : '';
export const phoneMask = (value: string) =>
  value
    ? value
        .replace(/\D/g, '')
        // .replace(/(\d{2})\D*(\d{5}|\d{4})\D*(\d{4})/, '($1) $2-$3') TIREI ESSE EXEMPLO QUE ESTA FUNCIONANDO EM BAIXO DAQUI
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5}|\d{4})\D*(\d{4})/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
    : '';
export const addressNumberMask = (value: string) =>
  value
    ? value
        .replace(/\D/g, '')
        .replace(/(\d{6})(\d)/, '$1')
        .replace(/(-\d{6})\d+?$/, '$1')
    : '';
export const stateMask = (value: string) => {
  value = value ? value.toUpperCase() : '';
  return value
    .replace(/\d/g, '')
    .replace(/(\S{2})(\S)/, '$1')
    .replace(/(-\S{2})\S+?$/, '$1');
};
export const dateCardCreditValidatedMask = (value: string) =>
  value
    ? value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{1,2})/, '$1/$2')
        .replace(/(\/\d{4})\d+?$/, '$1')
    : '';
export const dateOfBirthMask = (value: string) =>
  value
    ? value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{1,2})/, '$1/$2')
        .replace(/(\d{2})(\d{1,2})/, '$1/$2')
        .replace(/(\/\d{4})\d+?$/, '$1')
    : '';
export const cvvMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1')
    .replace(/(\d{3})\d+?$/, '$1');
};
