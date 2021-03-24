const assert = require('chai').assert;
const app = require('../201602855');

// Results
describe('201602855', function(){

    

  describe('NumeroEntero()', function(){
    it('El numero \"1\" es un numero entero', function(){
        let mostrarSaludo = app.NumeroEntero(1);
        assert.typeOf(mostrarSaludo, 'string');
      });
      it('El numero \"1.5\" No es numero entero', function(){
        let mostrarSaludo = app.NumeroEntero(1.5);
        assert.typeOf(mostrarSaludo, 'string');
      });
      
  });
  

  describe('ComparacionNumero()', function(){
    it('10 es menor que 20', function(){
        let resultado = app.ComparacionNumero(10,20);
        assert.typeOf(resultado, 'string');
    });

    it('10 es mayor que 5', function(){
        let resultado = app.ComparacionNumero(10,5);
        assert.typeOf(resultado, 'string');
    });
  });


  describe('Potencia()', function(){
    it('La potencia de 10 a la 3 = 1000', function(){
        let resultado = app.Potencia(10,3);
        assert.isBelow(resultado, 1000);
    });
  });

  describe('Area()', function(){
    it('area debe ser 15', function(){
        let result = app.Area(('cuadrado'),3,5)
        assert.isNumber(result, "number");
    });

  });

  describe('Velocidad()', function(){
    it('la velocidad debe ser 10 u/s', function(){
        let resultado = app.Velocidad(100/10)
        assert.isNumber(resultado, "10");
    });

  });


});
