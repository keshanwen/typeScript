type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

type Includes<T extends readonly any[], U> = T extends [infer K, ...infer R] ? 
                                                Equal<U, K> extends true ? 
                                                  true
                                                  :
                                                  Includes<R, U>
                                                : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

