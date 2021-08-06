'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1000000
        ).toFixed(0)}M People</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
            </div>
            </article>
            `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    // console.log(response);

    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);

    return response.json();
  });
};

///////////////////////////////////////
// lecture 01. Section Intro
//just intro

///////////////////////////////////////
// lecture 02. Section Roadman
//just section roadmap

///////////////////////////////////////
// lecture 03. Asynchronous JavaScript, AJAX and APIs
// learning about Asynchronous JavaScript, AJAX and APIs

///////////////////////////////////////
// lecture 04. Our First AJAX Call XMLHttpRequest

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();
//   // console.log(request.responseText);

//   request.addEventListener('load', function () {
//     //   console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//         <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           data.population / 1000000
//         ).toFixed(0)}M People</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//             </div>
//             </article>
//             `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('bangladesh');
// getCountryData('canada');
// getCountryData('usa');

// ///////////////////////////////////////
// // lecture 05. [OPTIONAL] How the Web Works Requests and Responses
// // Lern How the Web Works Requests and Responses

// const randerCountry = function (data, className = '') {
//   const html = `
//         <article class="country ${className}">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           data.population / 1000000
//         ).toFixed(0)}M People</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//             </div>
//             </article>
//             `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   // AJAX request 01
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     //   console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //Reder country
//     randerCountry(data);

//     //Get neibour country (2)
//     const [neighbour] = data.borders;

//     if (!neighbour) return alert('no neighbor');
//     // console.log(neighbour);
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       // console.log(data2);

//       randerCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('bangladesh');
// // getCountryAndNeighbour('canada');
// // getCountryAndNeighbour('usa');

// setTimeout(() => {
//   console.log('1 secound passed');
//   setTimeout(() => {
//     console.log('2 secound passed');
//     setTimeout(() => {
//       console.log('3 secound passed');
//       setTimeout(() => {
//         console.log('4 secound passed');
//         setTimeout(() => {
//           console.log('5 secound passed');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// ///////////////////////////////////////
// // lecture 06. Welcome to Callback Hell
// // const request = new XMLHttpRequest();
// // request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// // request.send();

// ///////////////////////////////////////
// // lecture 07. Promises and the Fetch API
// // const request = fetch('https://restcountries.eu/rest/v2/name/bangladesh');
// // console.log(request);

// ///////////////////////////////////////
// // lecture 08. Consuming Promises
// // const getCountryData = function (country) {
// //   const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
// //     .then(function (response) {
// //       console.log(response);
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       console.log(data);
// //       randerCountry(data[0]);
// //     });
// // };

// const getCountryData = country => {
//   const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => randerCountry(data[0]));
// };
// getCountryData('Bangladesh');

// ///////////////////////////////////////
// // lecture 09. Chaining Promises
// const getCountryData = country => {
//   // country 1
//   const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       randerCountry(data[0]);
//       console.log(data);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       // country 2
//       fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
//         .then(response => response.json())
//         .then(data => randerCountry(data, 'neighbour'));
//     });
// };
// getCountryData('bangladesh');

// ///////////////////////////////////////
// // lecture 10. Handling Rejected Promises

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('bangladesh');
// });

// // getCountryData('fasf');

///////////////////////////////////////
// lecture 11. Throwing Errors Manually

// ///////////////////////////////////////
// // lecture 10. Handling Rejected Promises

// const getJSON = function (url, errorMessage = 'Something went wrong') {
//   return fetch(url).then(response => {
//     console.log(response);

//     if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);

//     return response.json();
//   });
// };

// // const getCountryData = function (country) {
// //   // Country 1
// //   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
// //     .then(response => {
// //       console.log(response);

// //       if (!response.ok)
// //         throw new Error(`Country not Found (${response.status})`);

// //       response.json();
// //     })
// //     .then(data => {
// //       renderCountry(data[0]);
// //       // const neighbour = data[0].borders[0];
// //       const neighbour = 'dd';

// //       if (!neighbour) return;

// //       // Country 2
// //       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
// //     })
// //     .then(response => {
// //       response.json();

// //       if (!response.ok)
// //         throw new Error(`Country not Found (${response.status})`);
// //     })
// //     .then(data => renderCountry(data, 'neighbour'))
// //     .catch(err => {
// //       console.error(`${err} 💥💥💥`);
// //       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     'Country not Found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('No neighbour found');

//       // Country 2
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'Country not Found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

// // getCountryData('fasf');

///////////////////////////////////////
// lecture 12. Coding Challenge #1
/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// setTimeout(() => {
//   whereAmI(52.508, 13.381);
//   setTimeout(() => {
//     whereAmI(19.037, 72.873);
//     setTimeout(() => {
//       whereAmI(-33.933, 18.474);
//     }, 3000);
//   }, 3000);
// }, 3000);

// // whereAmI(52.508, 13.381);
// // whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);

///////////////////////////////////////
// lecture 13. Asynchronous Behind the Scenes The Event Loop
// theory about Asynchronous Behind the Scenes The Event Loop

// ///////////////////////////////////////
// // lecture 14. The Event Loop in Practice
// console.log('test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('test end');

// ///////////////////////////////////////
// // lecture 15. Building a Simple Promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening 🔃');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 🎉');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then(res => console.log(res))
//   .catch(err => console.error(err))
//   .finally(() => console.log('done'));

// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise((resolve) =>{
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 second passed'));

// // setTimeout(() => {
// //   console.log('1 second passed');
// //   setTimeout(() => {
// //     console.log('2 seconds passed');
// //     setTimeout(() => {
// //       console.log('3 second passed');
// //       setTimeout(() => {
// //         console.log('4 second passed');
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

// ///////////////////////////////////////
// lecture 16. Promisifying the Geolocation API
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`))

//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       const data = res.json();
//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`))

//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener('click', whereAmI);

///////////////////////////////////////
// lecture 17. Coding Challenge #2
/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// const imgContainer = document.querySelector('.images');
// let currentimg;

// const createImage = function (img) {
//   return new Promise(function (resolce, rejected) {
//     const image = document.createElement('img');
//     image.src = img;

//     image.addEventListener('load', function () {
//       imgContainer.append(image);
//       resolce(image);
//     });

//     image.addEventListener('error', function () {
//       rejected(new Error('Image not Found'));
//     });
//   });
// };

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentimg = img;
//     console.log('image one loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentimg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentimg = img;
//     console.log('image two loaded');
//     wait(2);
//   })
//   // .then(() => {
//   //   currentimg.style.display = 'none';
//   //   return currentimg;
//   // })
//   // .then(() => {
//   //   currentimg.src = 'img/img-2.jpg';
//   //   console.log('image two loaded');
//   //   return wait(2);
//   // })
//   .then(() => {
//     currentimg.style.display = '';
//     return wait(2);
//   })
//   .then(() => {
//     currentimg.style.display = 'none';
//     console.log('Image Hiden');
//   })
//   .catch(err => console.error(err));

// const wait = function (seconds) {
//   return new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

///////////////////////////////////////
// lecture 18. Consuming Promises with AsyncAwait

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   // fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//   //   .then(res => {
//   //     return res.json();
//   //   })
//   //   .then(data => {
//   //     console.log(data);
//   //   });

//   const pos = await getPosition();
//   const { latitude: lat, longitude: lng } = pos.coords;

//   const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   const dataGeo = await resGeo.json();
//   console.log(dataGeo);

//   const res = await fetch(
//     `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//   );
//   const data = await res.json();
//   console.log(data);
//   renderCountry(data[0]);
//   countriesContainer.style.opacity = 1;
// };

// whereAmI();
// console.log('come first');

///////////////////////////////////////
// lecture 19. Error Handling With try...catch
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem with gatting location data');
//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);

//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem with gatting country data');
//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
//     countriesContainer.style.opacity = 1;
//   } catch (err) {
//     console.error(`${err} 🔥`);
//     renderError(` 🔥 ${err.message}`);
//   }
// };

// whereAmI();
// console.log('come first');

// try {
//   const x = 0;
//   x = 9;
// } catch (err) {
//   alert(err.message);
// }

// ///////////////////////////////////////
// // lecture 20. Returning Values from Async Functions
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem with gatting location data');
//     const dataGeo = await resGeo.json();
//     // console.log(dataGeo);

//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem with gatting country data');
//     const data = await res.json();
//     // console.log(data);
//     renderCountry(data[0]);
//     countriesContainer.style.opacity = 1;
//     return `you are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(`${err} 🔥`);
//     renderError(` 🔥 ${err.message}`);

//     throw err;
//   }
// };

// console.log('come first 1');
// // const area = whereAmI();
// // console.log(area); //only reaturn a promise
// // whereAmI()
// //   .then(city => console.log(`${city} 2.1`))
// //   .catch(err => console.log(`${err.message} 🔥 2.2 `))
// //   .finally(() => console.log('come first 2.3'));
// // console.log('come first 3');

// (async function () {
//   try {
//     const area = await whereAmI();
//     console.log(`${area} 2.1`);
//   } catch (err) {
//     console.log(`${err.message} 🔥 2.2 `);
//   }
//   console.log('come first 3');
// })();

// ///////////////////////////////////////
// // lecture 21. Running Promises in Parallel
// const get3Countries = (async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c1}`
//     // );
//     // const [data2] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c2}`
//     // );
//     // const [data3] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c3}`
//     // );
//     // // renderCountry(data1);
//     // console.log([data1.capital, data2.capital, data3.capital]);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//       await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
//     ]);
//     console.log(data.map(data => data[0].capital));
//   } catch (e) {
//     console.error(e);
//   }
// })('bangladesh', 'usa', 'canada');

// ///////////////////////////////////////
// // lecture 22. Other Promise Combinators race, allSettled and any
// // Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/bangladesh`),
//     getJSON(`https://restcountries.eu/rest/v2/name/usa`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request take too long...'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.eu/rest/v2/name/bangladesh`),
//   timeout(0.5),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// // Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ]).then(res => console.log(res));

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// // Promise.any [ES2021]
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(`${res}...`))
//   .catch(err => console.error(`${err}...`));

///////////////////////////////////////
// lecture 23. Coding Challenge #3
/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
const imgContainer = document.querySelector('.images');
let currentimg;

const createImage = function (img) {
  return new Promise(function (resolce, rejected) {
    const image = document.createElement('img');
    image.src = img;

    image.addEventListener('load', function () {
      imgContainer.append(image);
      resolce(image);
    });

    image.addEventListener('error', function () {
      rejected(new Error('Image not Found'));
    });
  });
};

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentimg = img;
//     console.log('image one loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentimg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentimg = img;
//     console.log('image two loaded');
//     wait(2);
//   })
//   // .then(() => {
//   //   currentimg.style.display = 'none';
//   //   return currentimg;
//   // })
//   // .then(() => {
//   //   currentimg.src = 'img/img-2.jpg';
//   //   console.log('image two loaded');
//   //   return wait(2);
//   // })
//   .then(() => {
//     currentimg.style.display = '';
//     return wait(2);
//   })
//   .then(() => {
//     currentimg.style.display = 'none';
//     console.log('Image Hiden');
//   })
//   .catch(err => console.error(err));

// part 01
const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const LoadNpause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log('image one loaded');
    await wait(2);
    img.style.display = 'none';

    await wait(2);

    img = await createImage('img/img-2.jpg');
    console.log('image two loaded');
    // img.style.display = '';
    await wait(2);
    img.style.display = 'none';
    console.log('Image Hiden');
  } catch (e) {
    console.error(e);
  }
};
// LoadNpause();

// part 02
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    // console.log(imgs);
    const imgsEl = await Promise.all(imgs);
    // console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
