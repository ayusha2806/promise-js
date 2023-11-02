// Promise Code without Async and Await // 

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// // const promiseWifeBringingTicks = new Promise((resolve, reject) => {
// // setTimeout(() =>
// //  { resolve('ticket');
// //  }, 3000)
// //  });

// const getPopcorn = promiseWifeBringingTicks.then((t) => { 
// console.log('wife: i have the tics');
// console.log('husband: we should go in'); 
// console.log('wife: no i am hungry');
// return new Promise((resolve, reject) => resolve( `${t} popcorn`) );
//  });
// const getButter = getPopcorn.then((t) => {
// console.log('husband: i got some popcorn');
// console.log('husband: we should go in');
// console.log('wife: I need butter on my popcorn');
// return new Promise((resolve, reject) => resolve( `${t} butter`));
// }); 
// getButter.then((t) => console.log(t));
// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

// using Async and Await //
console.log('person1:shows ticket');
console.log('person2:shows ticket');

const preMovie = async () => {
  const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ticket');
    }, 3000)
  });


  // for error handling (add reject in place of resolve('ticket'))
  // let ticket
  // try{
  //   ticket=await promiseWifeBringingTicks;
  // }catch(e){
  //   ticket='sad face';
  // }

  // use of await //
  const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
  const addButter = new Promise((resolve, reject) => resolve('butter'));
  const getColdDrinks = new Promise((resolve, reject) => resolve('coldDrink'));
  
  let ticket = await promiseWifeBringingTicks;
  let[popcorn,butter,coldDrink]=await Promise.all([getPopcorn,addButter,getColdDrinks])
  console.log(`${popcorn},${butter},${coldDrink}`);


  // without using await //


  // console.log(`wife: i have the ${ticket}`);
  // console.log('husband: we should go in');
  // console.log('wife: no i am hungry');

  // let popcorn = await getPopcorn;
  // console.log('husband: i got some popcorn');
  // console.log('husband: we should go in');
  // console.log('wife: I need butter on my popcorn');

  // let butter = await addButter;
  // console.log(`husband: i got some ${butter} on popcorn`);
  // console.log(`husband:anything else darling?`);
  // console.log(`wife:lets go we are getting late`);
  // console.log(`husband:thank you for the reminder *grins*`);
  return ticket;
}
preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4:shows ticket');
console.log('person5:shows ticket');
// end //