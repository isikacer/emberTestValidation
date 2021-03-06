export default {
  inclusion: '{description} is not included in the list',
  exclusion: '{description} is reserved',
  invalid: '{description} is invalid',
  confirmation: "{description} doesn't match {on}",
  accepted: '{description} must be accepted',
  empty: "{description} can't be empty",
  blank: '{description} must be blank',
  present: "{description} can't be blank",
  collection: '{description} must be a collection',
  singular: "{description} can't be a collection",
  tooLong: '{description} is too long (maximum is {max} characters)',
  tooShort: '{description} is too short (minimum is {min} characters)',
  between: '{description} must be between {min} and {max} characters',
  before: '{description} must be before {before}',
  onOrBefore: '{description} must be on or before {onOrBefore}',
  after: '{description} must be after {after}',
  onOrAfter: '{description} must be on or after {onOrAfter}',
  wrongDateFormat: '{description} must be in the format of {format}',
  wrongLength: '{description} is the wrong length (should be {is} characters)',
  notANumber: '{description} must be a number',
  notAnInteger: '{description} must be an integer',
  greaterThan: '{description} must be greater than {gt}',
  greaterThanOrEqualTo: '{description} must be greater than or equal to {gte}',
  equalTo: '{description} must be equal to {is}',
  lessThan: '{description} must be less than {lt}',
  lessThanOrEqualTo: '{description} must be less than or equal to {lte}',
  otherThan: '{description} must be other than {value}',
  odd: '{description} must be odd',
  even: '{description} must be even',
  positive: '{description} must be positive',
  multipleOf: '{description} must be a multiple of {multipleOf}',
  date: '{description} must be a valid date',
  email: '{description} must be a valid email address',
  phone: '{description} must be a valid phone number',
  url: '{description} must be a valid url'
}

/* the solution that i used  */

// function  messages() {
//   const lang = window.localStorage.getItem("lang_value") != null ? window.localStorage.getItem("lang_value") : 'fr-fr' 
//   var result  = {}

//   switch (lang) {
//     case 'fr-fr':
//       result =  {
//         inclusion: 'n\'est pas inclus dans la liste',
//         exclusion: 'est r??serv??',
//         invalid: 'est invalide',
//         confirmation: "ne correspond pas {on}",
//         accepted: 'doit ??tre accept??',
//         empty: "ne peut pas ??tre vide",
//         blank: 'doit ??tre vide',
//         present: "ne peut pas ??tre vide",
//         collection: 'doit ??tre une collection',
//         singular: "ne peut pas ??tre une collection",
//         tooLong: 'est trop long (le maximum est {max} caract??res)',
//         tooShort: 'est trop court (le minimum est {min} Caract??res)',
//         between: 'Doit ??tre entre {min} et {max} Caract??res',
//         before: 'doit ??tre avant {before}',
//         onOrBefore: 'doit ??tre {onOrBefore} ou avant',
//         after: 'doit ??tre apr??s {after}',
//         onOrAfter: 'doit ??tre {onOrAfter} ou apr??s ',
//         wrongDateFormat: 'doit ??tre au format {format}',
//         wrongLength: 'est la mauvaise longueur (devrait ??tre {is} Caract??res)',
//         notANumber: 'doit ??tre un nombre',
//         notAnInteger: 'doit ??tre un entier',
//         greaterThan: 'doit ??tre sup??rieur ?? {gt}',
//         greaterThanOrEqualTo: 'doit ??tre sup??rieur ou ??gal ?? {gte}',
//         equalTo: 'doit ??tre ??gal ?? {is}',
//         lessThan: 'doit ??tre inf??rieur ?? {lt}',
//         lessThanOrEqualTo: 'doit ??tre inf??rieur ou ??gal ?? {lte}',
//         otherThan: 'doit ??tre autre que {value}',
//         odd: 'doit ??tre ??trange',
//         even: 'doit ??tre pair',
//         positive: 'doit ??tre positif',
//         multipleOf: 'doit ??tre un multiple de {multipleOf}',
//         date: 'doit ??tre une date valide',
//         email: 'doit ??tre une adresse valide',
//         phone: 'doit ??tre un num??ro de t??l??phone valide',
//         url: 'doit ??tre une URL valide'
//       }
//       break;
   
//     default:
//       result =  {
//         inclusion: '{description} is not included in the list',
//         exclusion: '{description} is reserved',
//         invalid: '{description} is invalid',
//         confirmation: "{description} doesn't match {on}",
//         accepted: '{description} must be accepted',
//         empty: "{description} can't be empty",
//         blank: '{description} must be blank',
//         present: "{description} can't be blank",
//         collection: '{description} must be a collection',
//         singular: "{description} can't be a collection",
//         tooLong: '{description} is too long (maximum is {max} characters)',
//         tooShort: '{description} is too short (minimum is {min} characters)',
//         between: '{description} must be between {min} and {max} characters',
//         before: '{description} must be before {before}',
//         onOrBefore: '{description} must be on or before {onOrBefore}',
//         after: '{description} must be after {after}',
//         onOrAfter: '{description} must be on or after {onOrAfter}',
//         wrongDateFormat: '{description} must be in the format of {format}',
//         wrongLength: '{description} is the wrong length (should be {is} characters)',
//         notANumber: '{description} must be a number',
//         notAnInteger: '{description} must be an integer',
//         greaterThan: '{description} must be greater than {gt}',
//         greaterThanOrEqualTo: '{description} must be greater than or equal to {gte}',
//         equalTo: '{description} must be equal to {is}',
//         lessThan: '{description} must be less than {lt}',
//         lessThanOrEqualTo: '{description} must be less than or equal to {lte}',
//         otherThan: '{description} must be other than {value}',
//         odd: '{description} must be odd',
//         even: '{description} must be even',
//         positive: '{description} must be positive',
//         multipleOf: '{description} must be a multiple of {multipleOf}',
//         date: '{description} must be a valid date',
//         email: '{description} must be a valid email address11111',
//         phone: '{description} must be a valid phone number',
//         url: '{description} must be a valid url'
//       }

//       break;
//   }

//   console.log("langue : ",lang);
//   console.log(result);

//   return result;

// }


// export default messages();