module.exports.coerceInteger = function(value) {
	if (typeof value === 'number') {
		return value;
	}

	if (!value) {
		return null;
	}

	if (typeof value === 'string' && /\d+/g.test(value)) {
    return parseInt(value, 10);
	}

	return null;
}