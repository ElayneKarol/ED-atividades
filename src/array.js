//array de média de temp
var quebLinha = "-----------";
//var avgTemp = [];

//avgTemp[0] = 31.9;
//avgTemp[1] = 35.3;
//avgTemp[2] = 42;
//avgTemp[3] = 38;
//avgTemp[4] = 25.5;

//console.log(avgTemp[2]);
//console.log(quebLinha);

//var daysOfWeek = new Array();

//daysOfWeek[0] = "Sunday";
//console.log(daysOfWeek[0]);
//console.log(quebLinha);

//tamanho
//console.log(daysOfWeek.length);
//console.log(quebLinha);

//com os elementos inseridos no array
//var daysOfWeek = new Array("seg", "ter", "qua", "qui", "sex", "sab", "dom");
//console.log(daysOfWeek.length);
//console.log(daysOfWeek[3]);
//console.log(quebLinha);

//acessando elementos através da iteração
//var daysOfWeek = new Array("seg", "ter", "qua", "qui", "sex", "sab", "dom");

//for (var i = 0; i < daysOfWeek.length; i++) {
//console.log(daysOfWeek[i]); //imprime cada elemento do array
//}
//console.log(quebLinha);

//var fibonacci = [];
//fibonacci[0] = 0;
//fibonacci[1] = 1;
//fibonacci[2] = 1;

//for (var i = 3; i < 20; i++) {
//  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//}
//console.log(fibonacci);

//acrescentando um elemento no array

//var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//acres. final
//numbers[numbers.length] = 10;
//numbers[numbers.length] = 11;

//numbers.push(12);
//numbers.push(13);

//acres. inicio
//numbers.unshift(-1);
//numbers.unshift(-2);

//console.log(numbers);
//console.log(numbers[5]);

//remover elementos do array

//numbers.pop(); //retira do ultimo indice
//numbers.pop();
//numbers.pop();

//numbers.shift(); //retira do primeiro indice
//numbers.shift();

//console.log(numbers);

//numbers.splice(5, 2); //retira elementos do indici escolhido
// ate a quantidade a frente escolhida junto do primeiro
//console.log(numbers);

//numbers.splice(5, 0, 5, 6);
//console.log(numbers);

//array bidimensionais

//avgTempWeek = [];

//var avgTempweek1 = [33, 35.2, 19, 27, 23.4, 22.2, 11];
//var avgTempweek2 = [44, 32, 20.8, 33, 23.2, 17, 36.8];

//avgTempWeek[0] = avgTempweek1;
//avgTempWeek[1] = avgTempweek2;

//console.log(avgTempWeek[0][4]);

//array tridimensionais
var month = [];

var firstWeeks = [];
var lastWeeks = [];

var avgTempweek1 = [33, 35.2, 19, 27, 23.4, 22.2, 11]; //0
var avgTempweek2 = [44, 32, 20.8, 33, 23.2, 17, 36.8]; //1

var avgTempweek3 = [20.6, 31.2, 14, 29, 25.5, 11.1, 40]; //0
var avgTempweek4 = [19, 33.7, 24.8, 13, 25.2, 16, 30.8]; //1

firstWeeks = [avgTempweek1, avgTempweek2]; //0
lastWeeks = [avgTempweek3, avgTempweek4]; //1

month = [firstWeeks, lastWeeks];

console.log(month[1][1][4]);
console.log(quebLinha);

for (var x = 0; x < month.length; x++) {
  for (var y = 0; y < month[x].length; y++) {
    for (var z = 0; z < month[x][y].length; z++) {
      console.log(month[x][y][z]);
    }
  }
}
