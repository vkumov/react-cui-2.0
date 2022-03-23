export const copyStringToClipboard = async (
  str: string | number
): Promise<void> => {
  str = typeof str === "string" ? str : str.toString();
  if (!navigator?.clipboard) {
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
