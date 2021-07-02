export const createActionMaker = <A>() => <T extends keyof A, P>(type: T, payload?: P) => ({ type, payload: payload! });

export type SingleAction<T extends Record<string, (...p: any) => any>> = ReturnType<T[keyof T]>;