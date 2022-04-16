// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
const ifElse = true;
const runIt = false;

// if (!ifElse) {
//   console.log("conditional is false");
// } else if (ifElse && runIt) {
//   console.log("Both conditional and runIt are true");
// } else {
//   console.log("Neither of the first conditions are true");
// }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
const terinary = true;

// condition    // if condition is true           // if condition is false
// terinary     ?  console.log('terinary is true') : console.log('terinary is false');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
const switchCase = true;

// switch (typeof switchCase)  {
//   case 'boolean':
//     console.log('switchCase is a boolean');
//     break;
//   case 'string':
//   case 'number':
//     console.log('switchCase is either a string or number');
//     break;
//   default:
//     console.log(`None of the cases are true. switchCase is ${typeof switchCase}.`);
// }

// JavaScript uses type conversion to coerce any value to a Boolean in contexts that require it, such as conditionals and loops.

// A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

const falsey = {
  'null': null,
  'emptyString': '',
  'zero': 0,
  'false': false,
  'undefined': undefined,
  'NaN': NaN,
}

// falsey.null ||
// falsey.emptyString ||
// falsey.zero ||
// falsey.false ||
// falsey.undefined ||
// falsey.NaN ?
// console.log("Any of these are true") : console.log("None of these are true");


// a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy.
const truthy = {
  'nonEmptyString': 'false',
  'emptyArray': [],
  'emptyObject': {},
  'true': true,
}

// truthy.nonEmptyString &&
// truthy.emptyArray &&
// truthy.emptyObject &&
// truthy.true ?
// console.log("All of these are true") : console.log("One or all of these are NOT true");



