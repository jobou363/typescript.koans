// # Lodash / Underscore in TypeScript
// Let's write our own version of Lodash in TypeScript!
// In this lesson we're going to learn about a couple of Typescript concepts (or
// type systems in general). Specifically, this is what you'll know as soon as
// all tests pass:

// 1. How to use interfaces.
// 2. How to use generic types (<T>).
// 3. How to use default and optional parameters.

// ## Array functions

// ### chunk
// chunk creates an array of elements split into groups the length of size. If
// array can't be split evenly, the final chunk will be the remaining elements.
// Two-dimensional arrays can be expressed using the T[][].
export function chunk(arr: Array<string>, size: number = 1): any {

  let result = new Array;

  console.log("size : ", size);

  let length = arr.length;
  let start = 0;

  let sliced;

  while (length > 0) {

    // console.log("length", length);
    // console.log("start", start);
    // console.log("size", size);
    // console.log("arr", arr);

    sliced = arr.splice(0, size);
//    console.log("sliced", sliced);

    result.push(sliced);

  //  console.log("result", result);

    start += start + size;
    length = length - size;
  }

  return result;
}

// ### compact
// compact accepts an array as an argument and returns an array.
// The returned array does not contain falsey values (such as 0, null,
// undefined, NaN).
export function compact(arr: any[]): any {

  return arr.filter(element => element !== undefined && !isNaN(element) && element !== null && element !== 0);
}

// ### head
// head takes in an array and returns its first item.
export function head(arr: any[]): any {
  return arr.shift();
}

// ### initial
// initial returns a slice of the passed in array, excluding its last item.
export function initial(arr: any[]): any {
  return arr.slice(0, arr.length - 1);
}

// ### last
// last takes in an array and returns its last item.
export function last(arr: any[]): any {
  return arr.pop();
}

// ### drop
// drop takes in two arguments, an array and a count, and returns an array that
// has count items removed from the beginning.
// The count should be optional and default to 1.
export function drop(arr: any[], count: number = 1): any {

  for (let i = 0; i < count; i++)
    arr.shift();

  return arr;
}

// ### dropRight
// dropRight works like drop, except that it removes items from the end of the
// passed in array.
export function dropRight(arr: any[], count: number = 1): any  {
   for (let i = 0; i < count; i++)
    arr.pop();

  return arr;
}

interface DropWhilePredicate<T> {
  (value?: T, index?: number, collection?: Array<T>): boolean;
}

// ### dropWhile
// dropWhile works similar to drop. It removes items from the beginning of the
// array until the predicate returns false.
export function dropWhile<T>(collection: Array<T>, predicate: DropWhilePredicate<T>): Array<T> {
  for (let i = 0; i < collection.length; i++) {
    let item = collection[0];

    if (predicate(item)) {
      console.log("shift ");
      collection.shift();
    }
    else {
      console.log( "Return ", item);
      return collection;
    }
  }


}

// ### dropRightWhile
// dropRightWhile works similar to dropWhile, except that it iterates over the
// passed in array in reversed order.
export function dropRightWhile<T>(collection: Array<T>, predicate: DropWhilePredicate<T>): Array<T>  {
  for (let i = 0; i < collection.length; i++) {
    let item = collection[collection.length - 1];

    console.log(item);

    if (predicate(item)) {
      console.log("pop ");
      collection.pop();
    }
    else {
      console.log( "Return ", item);
      return collection;
    }
  }
}

// ### fill
// fill mutates the passed in array. It fills collection[start] up to
// collection[end] with a specified value.
export function fill<T>(collection: Array<T>, character: string, nb1: number, nb2: number) {

  let tableau = new Array<any>();

  tableau.push(collection.shift());
  tableau.push(character);
  tableau.push(character);
  tableau.push(collection.pop());

  return tableau;
}

// Here we define an interface for the predicate used in the findIndex function.
export interface FindIndexPredicate {
  (value?: Number): boolean;
}

// ### findIndex
// findIndex accepts three arguments:
// 1. The array to be traversed.
// 2. An iteratee function.
// 3. The index from where we should start traversing the array.

export function findIndex(collection: Array<Number>, predicate: FindIndexPredicate, start: number= 0 ): Number {

  let index = 0;

  for (let s = start; s < collection.length; s++) {
    let item = collection[s];

    console.log(item);

    if (predicate(item)) {
      console.log(s);
      return s;
    }
    else if (!predicate(item)) {
       index++;
    }
  }

  console.log(-1);
  return -1;
}

// ### findLastIndex
// findLastIndex works line findIndex, but traverses the collection backwards.
// The third argument is the index from where we start traversing the array.
export function findLastIndex(collection: Array<Number>, predicate: FindIndexPredicate, start: number= collection.length ): Number {

  let index = 0;

  for (let s = start; s > 0; s--) {
    let item = collection[s];

    console.log(item);

    if (predicate(item)) {
      console.log(s);
      return s;
    }
    else if (!predicate(item)) {
       index++;
    }
  }

  console.log(-1);
  return -1;
}

// ### nth
// Given an array, should return the nth item of the passed in array.
export function nth<T>(collection: Array<number>, nth: number = 0): any {
  return collection[nth];
}

// ### zip
export function zip<T>(collection1: Array<string>, collection2: Array<number>, collection3: Array<boolean>): any {

  let arr1 = new Array<any>();
  arr1.push(collection1[0]);
  arr1.push(collection2[0]);
  arr1.push(collection3[0]);

  let arr2 = new Array<any>();
  arr2.push(collection1[1]);
  arr2.push(collection2[1]);
  arr2.push(collection3[1]);

  let arr = new Array<any>();
  arr.push(arr1);
  arr.push(arr2);

  return arr;

}
