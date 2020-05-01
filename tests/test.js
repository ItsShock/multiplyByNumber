const multiplyBy = require('..');

describe('Funkcja multiplyBy', () => {
  it('powinna zwrócić tablicę', async () => {
    const result = multiplyBy([1, 1], 2);

    expect(Array.isArray(result)).toBeTruthy();
  });

  it('nie powinna modyfikować przekazanego parametru', async () => {
    const array = [1, 2, 3];
    const arrayCopy = [...array];
    multiplyBy(array);
  
    expect(array).toEqual(arrayCopy);
  });

  it('powinna zwracać tablicę posiadającą elementy przemnożone przez drugi parametr', async () => {
    expect(multiplyBy([1, 2, 3], 2)).toEqual([2, 4, 6]);
    expect(multiplyBy([1, 1, 1, 1, 1], 10)).toEqual([10, 10, 10, 10, 10]);
    expect(multiplyBy([1, 1], 0)).toEqual([0, 0]);
    expect(multiplyBy([2, 2, 2], 0.5)).toEqual([1, 1, 1]);
  });
});
