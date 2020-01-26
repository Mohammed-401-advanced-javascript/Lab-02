'use strict';

const Validator = require('../lib/Validator.js');
//some example for testing
let str = 'yes';
let num = 1;
let arr = ['a'];
let obj = {x:'y'};
let func = () => {};
let validArr = [4,8,12];
let bool = false;


//example to test a complex object problem
const schema = {
  domain: {
    firstName: {type: 'string'},
    lastName: {type: 'string'},
    hair: {type: 'object'},
    favoriteFoods: {type: 'array', valueType: 'string'},
    married: {type: 'boolean'},
    kids: {type: 'number'},
  },
};

const validator = new Validator(schema);

describe('validator module performs basic validation of', () => {
  it('strings', () => {
    expect(validator.isString(str)).toBeTruthy();
   
  });
  
  it('booleans', () => {
  
    expect(validator.isBoolean(bool)).toBeTruthy();
  });

  it('objects', () => {
    expect(validator.isObject(arr)).toBeTruthy();
    expect(validator.isObject(obj)).toBeTruthy();
   
  });


  it('arrays', () => {
    expect(validator.isArray(validArr,'number')).toBeTruthy();
   
  });

  it('numbers', () => {
    
    expect(validator.isNumber(arr)).toBeFalsy();
    expect(validator.isNumber(obj)).toBeFalsy();
    expect(validator.isNumber(func)).toBeFalsy();
    expect(validator.isNumber(bool)).toBeFalsy();
  });

  it('functions', () => {
   
    expect(validator.isFunction(func)).toBeTruthy();
  });

  it('is truthy', () =>{
    expect(validator.isTruthy(func)).toBeTruthy();
  }

  );


});