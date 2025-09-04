type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export type DotNestedKeys<T, D extends number = 5> = [D] extends [never]
  ? never
  : T extends object
    ? {
        [K in keyof T & string]: T[K] extends object
          ? K | `${K}.${DotNestedKeys<T[K], Prev[D]>}`
          : K
      }[keyof T & string]
    : never
