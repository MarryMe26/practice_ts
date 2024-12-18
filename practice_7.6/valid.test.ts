import { validateDate } from './src/validate/validateDate';
import { errors } from './src/utils/dictionarty';
import { validateCityName } from './src/validate/validateCity';

describe('Функция validateDate', () => {
  it('возвращает правильный результат для корректной даты в формате ДД.ММ.ГГГГ', () => {
    const validDate = '10.02.2025';
    const result = validateDate(validDate);
    expect(result).toEqual({
      isValid: true,
      message: errors.date.valid,
    });
  });

  it('возвращает ошибку при наличии спецсимволов в дате', () => {
    const invalidDate = '10.^02.2025';
    const result = validateDate(invalidDate);
    expect(result).toEqual({
      isValid: false,
      message: errors.date.invalidCharacters,
    });
  });

  it('возвращает ошибку при наличии букв в дате', () => {
    const invalidDate = '10.0F.2025';
    const result = validateDate(invalidDate);
    expect(result).toEqual({
      isValid: false,
      message: errors.date.invalidCharacters,
    });
  });

  it('возвращает ошибку для даты, которая уже прошла', () => {
    const pastDate = '20.11.2022';
    const result = validateDate(pastDate);
    expect(result).toEqual({
      isValid: false,
      message: errors.date.past,
    });
  });
});

describe('Функция validateCity', () => {
  const escapeCharsPattern = ['<', '>', '&'];

  it('возвращает ошибку, если название города содержит символы экранирования (<, >, &, ")', () => {
    escapeCharsPattern.forEach((char) => {
      const cityName = `City${char}Name${char}`;
      const result = validateCityName(cityName);
      expect(result).toEqual({
        isValid: false,
        message: errors.city.escape,
      });
    });
  });

  it('возвращает название города с восклицательным знаком или дефисами', () => {
    const cityName = 'Ciudad-Juárez!';
    const result = validateCityName(cityName);
    expect(result).toEqual({
      isValid: true,
      message: errors.city.valid,
    });
  });

  it('возвращает название города со спецсимволами', () => {
    const cityName = 'München';
    const result = validateCityName(cityName);
    expect(result).toEqual({
      isValid: true,
      message: errors.city.valid,
    });
  });

  it('возвращает название города из одной буквы', () => {
    const cityName = 'M';
    const result = validateCityName(cityName);
    expect(result).toEqual({
      isValid: true,
      message: errors.city.valid,
    });
  });
});
