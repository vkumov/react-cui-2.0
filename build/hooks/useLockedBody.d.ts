type UseLockedBodyOutput = [boolean, (locked: boolean) => void];
declare function useLockedBody(initialLocked?: boolean, rootId?: string): UseLockedBodyOutput;

export { useLockedBody };
