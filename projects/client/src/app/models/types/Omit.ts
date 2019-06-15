// For Typescript versions before 3.5, to be removed in the future
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
