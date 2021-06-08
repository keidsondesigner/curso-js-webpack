import { sum, subtraction } from './calculator';

console.log(sum(10, 31));
console.log(subtraction(22, 18));



const myPromise = () => new Promise((resolve, reject) => {
  return setTimeout(() => {
    resolve('ok')
  }, 2000)
});


const exec = async () => {
  // const response = await myPromise()
  // console.log(response)
  try {

    await myPromise()
    console.log('Primeira vez')

    await myPromise()
    console.log('Segunda vez')

    await myPromise()
    console.log('Terceira vez')

  } catch (error) {
    console.warn(error)
  }

}
exec()