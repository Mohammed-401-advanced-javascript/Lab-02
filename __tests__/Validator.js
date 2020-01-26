'use strict';

class Validator {

    constructor(schema) {
        this.schema = schema;
    }

    isString(input) {
        return typeof input === 'string';
    }

    isObject(input) {
        return typeof input === 'object';
    }

    isArray(input, valueType) {
        let result = true;
        if (Array.isArray(input)) {
            for (var value of input) {
                if (typeof (value) === valueType) {
                    result = true;
                } else {
                    result = false;
                    break;
                }
            };
        } else {
            result = false;
        }
        return result;
    }

    isBoolean(input) {
        return typeof input === 'boolean';
    }

    isNumber(input) {
        return typeof input === 'number';

    }

    isFunction(input) {
        return typeof input === 'function';

    }

    isTruthy(input) {
        return !!input;
    }


    isValid(data, schema) {
        let result = true;
        let keys = Object.keys(schema.fields);
        console.log('This is the key', keys)
        for (var idx in keys) {
            if (data.hasOwnProperty(keys[idx]) === false) {
                result = false;
                break;
            } else {
                if (typeof (data[keys[idx]]) === schema.fields[keys[idx]].type) {
                    result = true;
                } else {
                    console.log('some of the property is not right');
                    result = false;
                    break;
                }
            }
        };
        return result;
    }

}

module.exports = Validator;
// let Validator = module.exports = {};