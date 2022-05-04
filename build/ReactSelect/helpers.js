var isGrouped = function(v) {
    return "options" in v;
};
var findOption = function(value, options) {
    var found;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var it = _step.value;
            if (isGrouped(it)) found = findOption(value, it.options);
            else found = it.value === value ? it : null;
            if (found) return found;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

export { findOption, isGrouped };
//# sourceMappingURL=helpers.js.map
