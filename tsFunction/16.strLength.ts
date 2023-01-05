type LengthOfString<S extends string, T extends any[] = []> = S extends `${infer L}${infer R}` ? 
                                                                LengthOfString<R, [...T, L]> 
                                                                : 
                                                                T['length'];


