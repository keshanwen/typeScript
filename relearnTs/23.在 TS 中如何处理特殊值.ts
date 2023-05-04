// 可辨识联合类型

interface NormalValue<T> {
  type: 'normal';
  data: T
}

interface Eof {
  type: 'eof'
}

type InputStreamValue<T> = Eof | NormalValue<T>;


interface InputStream<T> {
  getNextValue(): InputStreamValue<T>;
}

function countValues<T>(is: InputStream<T>, data: T) {
  let valueCount = 0;
  while (true) {
    const value = is.getNextValue();
    if (value.type === 'eof') break;
    if (value.data === data) {
      valueCount++;
    }
  }
  return valueCount;
}

// 迭代器的结果
interface IteratorYieldResult<TYield> {
  done?: false;
  value: TYield;
}

interface IteratorReturnResult<TReturn> {
  done: true;
  value: TReturn;
}

type IteratorResults<T, TReturn = any> =
  | IteratorYieldResult<T>
  | IteratorReturnResult<TReturn>;



// 其他类型的联合
interface A {
  one: number;
  two: number;
}

interface B {
  three: number;
  four: number;
}

type Union = A | B;

function func(x: Union) {
  if ('one' in x) {
    console.log(x.two)
  }
}

type Unions = [string] | number;

function logHexValue(x: Unions) {
  if (Array.isArray(x)) {
    console.log(x[0]);
  } else {
    console.log(x.toString(16));
  }
}

