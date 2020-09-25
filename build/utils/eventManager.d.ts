export declare const eventManager: {
    list: Map<any, any>;
    emitQueue: Map<any, any>;
    on(event: any, callback: any): any;
    off(event: any): any;
    cancelEmit(event: any): any;
    /**
     * Enqueue the event at the end of the call stack
     * Doing so let the user call toast as follow:
     * toast('1')
     * toast('2')
     * toast('3')
     * Without setTimemout the code above will not work
     */
    emit(event: any, ...args: any[]): void;
};
export declare const EVENTS: {
    SHOW_MODAL: string;
};
