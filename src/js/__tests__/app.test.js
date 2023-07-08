import Validator from '../app';

describe('validator', () => {
  test('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);', () => {
    const validator = new Validator();
    const str = 'hello%wu';
    const expected = 'Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);';

    expect(validator.validateUsername(str)).toEqual(expected);
  });
  test('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.', () => {
    const validator = new Validator();
    const str = '-hbjkl111hghfuy_';
    const expected = 'Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.';

    expect(validator.validateUsername(str)).toEqual(expected);
  });
  test('Все условия выполнены', () => {
    const validator = new Validator();
    const str = 'true_us1-ername';
    const expected = 'Все условия выполнены';

    expect(validator.validateUsername(str)).toEqual(expected);
  });
});
