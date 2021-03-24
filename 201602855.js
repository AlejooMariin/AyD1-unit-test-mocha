module.exports = {
    NumeroEntero: function(num1){
        
        if(num1-Math.floor(num1)==0){
            return("El numero \" " + num1 + " \" Es entero");
        }else{
            return("El numero \" " + num1 + " \" No es entero");
        }
        
    },    
    ComparacionNumero: function(num1, num2){
        if(num1===num2){
            return ('Son iguales');
        }else 
        if(num1<num2){
            return (num1+" Es menor que "+num2);
        }else
        if(num1>num2){
            return (num1+" Es mayor que "+num2);
        }else {
            return (num1+" o "+num2+" no es un valor numerico");
        }
        
    },
    Potencia: function(Numero, Potencia){
      return (Numero^Potencia);
    },
    Area: function(Figura,A,B) {
       
        switch(Figura) {
            case 'cuadrado':
              // code block
              return A*B; 
            case 'triangulo':
              // code block
              return ((1/2)*A*B);
              
            default:
                console.log("Datos invalidos");
          }
        
    },
    Velocidad: function(distancia,tiempo){
        return distancia/tiempo;
    }
  
  }