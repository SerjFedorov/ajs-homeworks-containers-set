// TODO: write your code here
// import sum from './basic';

// console.log('worked');
// console.log(sum([1, 2]));

export default class Validator {
  // eslint-disable-next-line class-methods-use-this
  validateUsername(str) {
    const reg = /^[\w-]+$/;
    const reg1 = /^(?!.*\d{4})(?!.*[\d-_]$)/;// шаблон начало строки(содержит ли строка 4 или более цифры?^(?!.*\d{4}))(содержит ли строка начало или конец с цифр подчеркивания тире)
    if (!reg.test(str)) {
      return 'Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);';
    } if (reg1.test(str)) {
      return 'Все условия выполнены';
    }
    return 'Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.';
  }
}
