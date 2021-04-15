export default {
    'form.validator.required': 'Povinné pole',
    'form.validator.mustBeNumber': 'Musí být číslo',
    'form.validator.minNumber': 'Mělo by být větší než {min}',
    'form.validator.maxNumber': 'Mělo by být menší než {max}',
    'form.validator.maxLength': `Mělo by mít méně než {max} {what, select,
    characters {písmen}
    tags {tagů}
    genres {žánry}
    other {}
  }`,
    'form.validator.minLength': `Mělo by mít alespoň {min} {what, select,
    characters {písmen}
    tags {tagů}
    genres {žánrů}
    genre {žánr}
    other {}
  }`,
    'form.validator.email': 'Musí být validní e-mail',
    'form.validator.url': 'Musí být validní URL',
    'form.validator.slug': 'Musí být validní část URL adresy',
    'form.submitting.signup': 'Vytváříme účet...',
    'form.submitting.signin': 'Probíhá přihlašování...',
    'form.submitting.default': 'Posíláme...',
    'form.submitting.sending': 'Odesíláme zprávu...',
    'form.validator.whitespace': 'Nesmí mít žádné mezery',
    'form.validator.zipCode': 'Musí být platný PSČ',
    'form.validator.isbn': 'Přijímáme pouze 10 nebo 13 ISBN',
    // you can get these messages from: https://github.com/gwendall/meteor-simple-schema-i18n/tree/master/i18n
    // but don't forget to adjust the format
    'simpleschema.required': '{label} je povinné pole',
    'simpleschema.minString': '{label} must be at least {min} characters',
    'simpleschema.maxString': '{label} cannot exceed {max} characters',
    'simpleschema.minNumber': '{label} must be at least {min}',
    'simpleschema.maxNumber': '{label} cannot exceed {max}',
    'simpleschema.minNumberExclusive': '{label} must be greater than {min}',
    'simpleschema.maxNumberExclusive': '{label} must be less than {max}',
    'simpleschema.minDate': '{label} must be on or after {min}',
    'simpleschema.maxDate': '{label} cannot be after {max}',
    'simpleschema.badDate': '{label} is not a valid date',
    'simpleschema.minCount': 'You must specify at least {minCount} values',
    'simpleschema.maxCount': 'You cannot specify more than {maxCount} values',
    'simpleschema.noDecimal': '{label} must be an integer',
    'simpleschema.notAllowed': '{value} is not an allowed value',
    'simpleschema.expectedString': '{label} must be a string',
    'simpleschema.expectedNumber': '{label} must be a number',
    'simpleschema.expectedBoolean': '{label} must be a boolean',
    'simpleschema.expectedArray': '{label} must be an array',
    'simpleschema.expectedObject': '{label} must be an object',
    'simpleschema.expectedConstructor': '{label} must be a {type}',
    'simpleschema.keyNotInSchema': '{key} is not allowed by the schema',
    'simpleschema.notUnique': '{label} must be unique',
    'simpleschema.regEx.0': '{label} failed regular expression validation',
    'simpleschema.regEx.1': '{label} must be a valid e-mail address',
    'simpleschema.regEx.2': '{label} must be a valid e-mail address',
    'simpleschema.regEx.3': '{label} must be a valid domain',
    'simpleschema.regEx.4': '{label} must be a valid domain',
    'simpleschema.regEx.5': '{label} must be a valid IPv4 or IPv6 address',
    'simpleschema.regEx.6': '{label} must be a valid IPv4 address',
    'simpleschema.regEx.7': '{label} must be a valid IPv6 address',
    'simpleschema.regEx.8': '{label} must be a valid URL',
    'simpleschema.regEx.9': '{label} must be a valid alphanumeric ID'
};