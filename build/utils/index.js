const appendClass = (c, what = undefined)=>{
    if (c) {
        if (typeof what === "function") return ` ${what()}`;
        return ` ${what || c}`;
    }
    return "";
};

export { appendClass };
//# sourceMappingURL=index.js.map
