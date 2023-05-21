/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the 'export' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
*/
const first = () => Promise.resolve(3);
const second = (val) => {
  return Promise.resolve(val + 7);
}

const handlePromise = first();
const secondPromise = handlePromise.then((val) => val);
const final = secondPromise.then((res) => second(res));
final.then((val) => {
  console.log(val, " : is val");
  return(val);
});

console.log(first, " : is first");
console.log(second, " : is second");