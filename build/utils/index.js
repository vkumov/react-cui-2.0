var appendClass = function(c) {
    var what = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : undefined;
    if (c) {
        if (typeof what === "function") return " ".concat(what());
        return " ".concat(what || c);
    }
    return "";
};

export { appendClass };
//# sourceMappingURL=index.js.map
