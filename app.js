//3. EDADES Y ETAPAS
//Crea una web que pida, por medio de un prompt(),
//la edad de una persona, en años. Dependiendo del número brindado,
//la web debe dar un mensaje que clasifica a la persona en: toddler,
// preschooler, gradeschooler, teenager, young adult and adult,
// según el criterio de esta página.


var age = prompt('ingresa tu edad');

//Toddler: 1-3 yrs.
const toddler = function (edad_solicitada) {
  if (edad_solicitada < 3) {
     document.write('Segun tu edad perteneces al grupo de toodler')
  }
}
toddler(age);

//Preschool: 3-5 yrs.
const preschool = function (edad_solicitada) {
  if (edad_solicitada >= 3 && edad_solicitada <5) {
     document.write('Segun tu edad perteneces al grupo preschool')
  }
}
preschool(age);

//Gradeschooler: 5-12 yrs.
const Gradeschooler = function (edad_solicitada) {
  if (edad_solicitada >= 5 && edad_solicitada <12) {
     document.write('Segun tu edad perteneces al grupo Gradeschooler')
  }
}
Gradeschooler(age);

//Teen: 12-18 yrs.
const Teen = function (edad_solicitada) {
  if (edad_solicitada >= 12 && edad_solicitada <18) {
     document.write('Segun tu edad perteneces al grupo Teen')
  }
}
Teen(age);

//Young Adult: 18-21 yrs.
const Young_adult = function (edad_solicitada) {
  if (edad_solicitada >= 18 && edad_solicitada <=21) {
     document.write('Segun tu edad perteneces al grupo Young Adult')
  }
}
Young_adult(age);