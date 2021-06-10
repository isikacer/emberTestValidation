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
//         exclusion: 'est réservé',
//         invalid: 'est invalide',
//         confirmation: "ne correspond pas {on}",
//         accepted: 'doit être accepté',
//         empty: "ne peut pas être vide",
//         blank: 'doit être vide',
//         present: "ne peut pas être vide",
//         collection: 'doit être une collection',
//         singular: "ne peut pas être une collection",
//         tooLong: 'est trop long (le maximum est {max} caractères)',
//         tooShort: 'est trop court (le minimum est {min} Caractères)',
//         between: 'Doit être entre {min} et {max} Caractères',
//         before: 'doit être avant {before}',
//         onOrBefore: 'doit être {onOrBefore} ou avant',
//         after: 'doit être après {after}',
//         onOrAfter: 'doit être {onOrAfter} ou après ',
//         wrongDateFormat: 'doit être au format {format}',
//         wrongLength: 'est la mauvaise longueur (devrait être {is} Caractères)',
//         notANumber: 'doit être un nombre',
//         notAnInteger: 'doit être un entier',
//         greaterThan: 'doit être supérieur à {gt}',
//         greaterThanOrEqualTo: 'doit être supérieur ou égal à {gte}',
//         equalTo: 'doit être égal à {is}',
//         lessThan: 'doit être inférieur à {lt}',
//         lessThanOrEqualTo: 'doit être inférieur ou égal à {lte}',
//         otherThan: 'doit être autre que {value}',
//         odd: 'doit être étrange',
//         even: 'doit être pair',
//         positive: 'doit être positif',
//         multipleOf: 'doit être un multiple de {multipleOf}',
//         date: 'doit être une date valide',
//         email: 'doit être une adresse valide',
//         phone: 'doit être un numéro de téléphone valide',
//         url: 'doit être une URL valide'
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