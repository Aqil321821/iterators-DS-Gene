//without symbol.itertor

// const app = {
//   nextIndex: 0,
//   teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
//   next() {
//     if (this.nextIndex >= this.teams.length) {
//       return { done: true };
//     }

//     const returnValue = { value: this.teams[this.nextIndex], done: false };
//     this.nextIndex++;
//     return returnValue;
//   },
// };


//We can call the next() function to get the next team in the sequence

// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());


//==>  even though its name is iterator but its not iterable
/* for (const team of app) {


  console.log(team);
  
} */

//error app is not iterable




//==>with symbol.iterator

const app = {
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
          ? { value: this.teams[nextIndex++], done: false }
          : { done: true };
      },
    };
  },
};

const iterator = app[Symbol.iterator]();





// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

//we call the function
//app[Symbol.iterator](): Calls the [Symbol.iterator] method on the app object to get an iterator.




for (const team of app) {
  console.log(team);
}


//every iterator is not iterable ...to make it iterable we have to make it manually