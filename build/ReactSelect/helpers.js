const isGrouped = (v)=>{
    return "options" in v;
};
const findOption = (value, options)=>{
    let found;
    for (const it of options){
        if (isGrouped(it)) found = findOption(value, it.options);
        else found = it.value === value ? it : null;
        if (found) return found;
    }
};

export { findOption, isGrouped };
//# sourceMappingURL=helpers.js.map
