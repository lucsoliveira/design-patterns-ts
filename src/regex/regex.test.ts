describe('regex', () => {
  describe('simples', () => {
    test('Should test simple strings', () => {
      const text = 'Olá, mundo!';
      const regex = /olá/i;
      expect(regex.test(text)).toBeTruthy();
    });

    test('Should test simple contents if match a single caracther', () => {
      const text = 'Olá, mundo!';
      const regex = /[x]/i;
      expect(regex.test(text)).toBeFalsy();
    });

    test('Should extract every number on string', () => {
      const text =
        'Os numeros são 1, 22 e 3. Mas também digo que pode ser 9, 10 ou 11. Pera là, e se tiver um \n quais serão os numeros se eu colocar um 5 aqui, bem nof inal?';
      const regexSingle = /\d/g; //com esse regex, cada caracter de numero é extraido indivudalmente

      expect(text.match(regexSingle)).toStrictEqual([
        '1',
        '2',
        '2',
        '3',
        '9',
        '1',
        '0',
        '1',
        '1',
        '5',
      ]);

      const textNotSingle =
        'Os numeros são 1, 22 e 3. Mas também digo que pode ser 9, 10 ou 11. Pera là, e se tiver um \n quais serão os numeros se eu colocar um 5 aqui, bem nof inal?';
      const regexNotSingle = /\d+/g; //com esse regex, agrupamentos de caracteres seguidos são extraidos juntos
      expect(textNotSingle.match(regexNotSingle)).toStrictEqual([
        '1',
        '22',
        '3',
        '9',
        '10',
        '11',
        '5',
      ]);
    });

    describe('quantificadores guloso e nao-gulos', () => {
      test('guloso', () => {
        const allText = '<div><p>Aqui seria o paragrafo</p></div>';

        //se deixarmos somente o ., ele buscaria somente <p>
        //se deixarmos .* ele ira buscar inclusive o div, pois é mais de um caracter
        // Captura tudo entre o primeiro < e o último >
        const regexAllText = /<.*>/g;
        expect(allText.match(regexAllText)).toStrictEqual([
          '<div><p>Aqui seria o paragrafo</p></div>',
        ]);
      });

      test('não guloso', () => {
        const allText = '<div><p>Aqui seria o paragrafo</p></div>';
        // nesse caso o regex irá pegar todos os items que sejam tags html
        // Captura tudo entre cada < e o próximo >
        const regexOnlyP = /<.*?>/g;
        expect(allText.match(regexOnlyP)).toStrictEqual([
          '<div>',
          '<p>',
          '</p>',
          '</div>',
        ]);
      });
    });

    describe('Metacaracteres: tipo barra-letra', () => {
      test('Encontrar todas as palavras que contêm números e letras.', () => {
        const textoComposto =
          'Item12 e item3 são identificadores, mas item é uma palavra.';

        const regexAllText = /\w+\d+\w*/g;
        expect(textoComposto.match(regexAllText)).toStrictEqual([
          'Item12',
          'item3',
        ]);
      });
    });

    describe('Metacaracteres: modernosos', () => {
      test('Exemplo de validação de email', () => {
        const textoComposto = 'meu.email@exemplo.com outroemail@exemplo.com';

        const regexAllText = /[\w.]+@[\w]+.[\w]+/g;
        expect(textoComposto.match(regexAllText)).toStrictEqual([
          'meu.email@exemplo.com',
          'outroemail@exemplo.com',
        ]);
      });
    });
  });

  describe('reais', () => {
    test('Extrair nomes de funcoes de códigos base.', () => {
      const snippetCode =
        "export const someForm = 'square';\nexport function draw(ctx, length, x, y, color)\nctx.fillStyle = color;ctx.fillRect(x, y, length, length);return {length: length,x: x,y: y,color: color,};";
      let regexAllText =
        /(?:export|module.exports =) (?:const|function) (\w+)/g;

      let match;
      const values = [];
      while ((match = regexAllText.exec(snippetCode))) {
        values.push(match[1]);
      }

      expect(values).toStrictEqual(['someForm', 'draw']);
    });
  });
});
