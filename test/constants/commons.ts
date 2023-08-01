// ₹ 10,000.00
export const INR_COMMA_REGEX = /^[+-]?₹[0-9]{1,3}(,[0-9]{2})*(,[0-9]{3})*(\.[0-9]{2})?$/g

// ₹ 10000.00
export const INR_SPACE_COMMA_REGEX = /^₹ [0-9]{1,3}(,[0-9]{2})*(,[0-9]{3})*(\.[0-9]{2})?$/g

// ₹10000.00
export const INR_NON_COMMA_REGEX = /^₹([0-9])*(\.[0-9]{2})?$/g

// ₹ 10000.00
export const INR_SPACE_NON_COMMA_REGEX = /^₹ ([0-9])*(\.[0-9]{2})?$/g

export const DATE_FORMAT = "DD MMM YYYY"

export const PERCENT_REGEX = /^(100)|(\d{1,2}(.\d*)?)%$/g

export const PERCENT_PA_REGEX = /^ (100)|(\d{1,2}(.\d*)?)% p.a$/g

export const PERCENT_POS_NEG_REGEX = /^[+-](100)|(\d{1,2}(.\d*)?)%$/g

export const PERCENT_POS_NEG_BRACKET_REGEX = /^\([+-](100)|(\d{1,2}(.\d*)?)%\)$/g
