export type DeepMerge<T, U> = T extends object
    ? U extends object
        ? {
              [K in keyof T | keyof U]: K extends keyof U
                  ? K extends keyof T
                      ? DeepMerge<T[K], U[K]> // If key exists in both T and U, merge them
                      : U[K] // If key exists only in U, take it from U
                  : K extends keyof T
                    ? T[K] // If key exists only in T, take it from T
                    : never // If the key exists in neither T nor U, ignore it
          }
        : U // If U is not an object, return U
    : T | U // If T and U are primitive types, return their union
