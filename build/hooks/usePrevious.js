import{useRef,useEffect}from"react";function usePrevious(value){var ref=useRef();useEffect(function(){ref.current=value},[value]);return ref.current}export{usePrevious};
//# sourceMappingURL=usePrevious.js.map
