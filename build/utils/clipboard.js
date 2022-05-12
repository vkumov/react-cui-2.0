const copyStringToClipboard = async (str)=>{
    str = typeof str === "string" ? str : str.toString();
    if (!(navigator === null || navigator === void 0 ? void 0 : navigator.clipboard)) {
        const el = document.createElement("textarea");
        el.value = str;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    } else {
        await navigator.clipboard.writeText(str);
    }
};

export { copyStringToClipboard };
//# sourceMappingURL=clipboard.js.map
