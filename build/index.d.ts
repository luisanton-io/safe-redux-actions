export declare const createActionMaker: <A>() => <T extends keyof A, P>(type: T, payload?: P | undefined) => {
    type: T;
    payload: NonNullable<P>;
};
export declare type SingleAction<T extends Record<string, (...p: any) => any>> = ReturnType<T[keyof T]>;
