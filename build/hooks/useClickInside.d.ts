/// <reference types="react" />
import * as react from 'react';

declare function useClickInside<T extends HTMLElement = any>(handler: () => void, events?: string[] | null, nodes?: HTMLElement[]): react.MutableRefObject<T>;

export { useClickInside };
