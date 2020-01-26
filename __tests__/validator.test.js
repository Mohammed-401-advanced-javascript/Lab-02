'use strict';

const Validator = require('../__tests__/Validator.js');

//some example for testing
let str = 'yes';
let num = 1;
let negativeNum = -1;
let positiveNum = 1;
let zero = 0;
let arr = ['a'];
let obj = {x:'y'};
let func = () => {};
let bool = false;
let emptyStr = '';
let validArr = [1,2,3];
let badArr = [1,'hello','bye'];


//example to test a complex object problem
const schema = {
  fields: {
    firstName: {type: 'string'},
    lastName: {type: 'string'},
    hair: {type: 'object'},
    favoriteFoods: {type: 'array', valueType: 'string'},
    married: {type: 'boolean'},
    kids: {type: 'number'},
  },
};

//create a new instance of the validator class
const validator = new Validator(schema);

describe('validator module performs basic validation of', () => {
  it('strings', () => {
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('objects', () => {
    expect(validator.isObject(negativeNum)).toBeFalsy();
    expect(validator.isObject(positiveNum)).toBeFalsy();
    expect(validator.isObject(arr)).toBeTruthy();
    expect(validator.isObject(obj)).toBeTruthy();
    expect(validator.isObject(func)).toBeFalsy();
    expect(validator.isObject(bool)).toBeFalsy();
  });


  it('arrays', () => {
    expect(validator.isArray(validArr,'number')).toBeTruthy();
    expect(validator.isArray(validArr,'string')).toBeFalsy();
    expect(validator.isArray(badArr,'number')).toBeFalsy();
    expect(validator.isArray(badArr,'string')).toBeFalsy();

  });

  it('booleans', () => {
    expect(validator.isBoolean(negativeNum)).toBeFalsy();
    expect(validator.isBoolean(positiveNum)).toBeFalsy();
    expect(validator.isBoolean(zero)).toBeFalsy();
    expect(validator.isBoolean(arr)).toBeFalsy();
    expect(validator.isBoolean(obj)).toBeFalsy();
    expect(validator.isBoolean(func)).toBeFalsy();
    expect(validator.isBoolean(bool)).toBeTruthy();
  });

  it('numbers', () => {
    expect(validator.isNumber(negativeNum)).toBeTruthy();
    expect(validator.isNumber(positiveNum)).toBeTruthy();
    expect(validator.isNumber(zero)).toBeTruthy();
    expect(validator.isNumber(arr)).toBeFalsy();
    expect(validator.isNumber(obj)).toBeFalsy();
    expect(validator.isNumber(func)).toBeFalsy();
    expect(validator.isNumber(bool)).toBeFalsy();
  });

  it('functions', () => {
    expect(validator.isFunction(negativeNum)).toBeFalsy();
    expect(validator.isFunction(positiveNum)).toBeFalsy();
    expect(validator.isFunction(zero)).toBeFalsy();
    expect(validator.isFunction(arr)).toBeFalsy();
    expect(validator.isFunction(obj)).toBeFalsy();
    expect(validator.isFunction(func)).toBeTruthy();
    expect(validator.isFunction(bool)).toBeFalsy();
  });

  it('is truthy', () =>{
    expect(validator.isTruthy(negativeNum)).toBeTruthy();
    expect(validator.isTruthy(positiveNum)).toBeTruthy();
    expect(validator.isTruthy(zero)).toBeFalsy();
    expect(validator.isTruthy(emptyStr)).toBeFalsy();
    expect(validator.isTruthy(func)).toBeTruthy();
    expect(validator.isTruthy(bool)).toBeFalsy();
  }

  );


});

describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    let Raed = {
      firstName: 'Fred',
      lastName: 'Sample',
      hair: {
        type: 'wavy',
        color: 'brown',
      },
      favoriteFoods: ['pizza','cupcakes','salmon'],
      married: true,
      kids: 3,
    };
    let KJ = {
      firstName: 'Fred',
      lastName: 'Sample',
      favoriteFoods: ['pizza','cupcakes','salmon'],
      married: true,
      kids: 3,
    };
    let person3 = {
      firstName: 'Fred',
      lastName: 'Sample',
      hair: {
        type: 'curly',
        color: 'brown',
      },
      favoriteFoods: ['pizza','cupcakes','salmon'],
      married: 'yes',
      kids: 3,
    };
    //does a person has all the right keys and properties?
    //expect(validator.isValid(person1,schema)).toBeTruthy();
    //expect(validator.isValid(person2,schema)).toBeFalsy();
    expect(validator.isValid(person3,schema)).toBeFalsy();
  });



});