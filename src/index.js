exports.min = function min(array) {
    if (array === [] || Array.isArray(array) === false) {
        return 0;
    } else {
        return min = Math.min.apply(null, array);
    }
};

exports.max = function max(array) {
    if (array === [] || Array.isArray(array) === false) {
        return 0;
    } else {
        return max = Math.max.apply(null, array);
    }

};

exports.avg = function avg(array) {
    if (array === [] || Array.isArray(array) === false) {
        return 0;
    } else {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return array.reduce(reducer) / array.length;
    }

};
