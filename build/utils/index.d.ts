type ClassFunction = () => string;
declare const appendClass: (c: any, what?: string | ClassFunction | undefined) => string;

export { appendClass };
