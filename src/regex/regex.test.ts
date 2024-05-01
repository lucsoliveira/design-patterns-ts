describe("regex", () => {
  describe("simples", () => {
    test("Should test simple strings", () => {
      const text = "Olá, mundo!";
      const regex = /olá/i;
      expect(regex.test(text)).toBeTruthy();
    });

    test("Should test simple contents if match a single caracther", () => {
      const text = "Olá, mundo!";
      const regex = /[x]/i;
      expect(regex.test(text)).toBeFalsy();
    });

    test("Should extract every number on string", () => {
      const text =
        "Os numeros são 1, 22 e 3. Mas também digo que pode ser 9, 10 ou 11. Pera là, e se tiver um \n quais serão os numeros se eu colocar um 5 aqui, bem nof inal?";
      const regexSingle = /\d/g; //com esse regex, cada caracter de numero é extraido indivudalmente

      expect(text.match(regexSingle)).toStrictEqual([
        "1",
        "2",
        "2",
        "3",
        "9",
        "1",
        "0",
        "1",
        "1",
        "5",
      ]);

      const textNotSingle =
        "Os numeros são 1, 22 e 3. Mas também digo que pode ser 9, 10 ou 11. Pera là, e se tiver um \n quais serão os numeros se eu colocar um 5 aqui, bem nof inal?";
      const regexNotSingle = /\d+/g; //com esse regex, agrupamentos de caracteres seguidos são extraidos juntos
      expect(textNotSingle.match(regexNotSingle)).toStrictEqual([
        "1",
        "22",
        "3",
        "9",
        "10",
        "11",
        "5",
      ]);
    });
  });
});
