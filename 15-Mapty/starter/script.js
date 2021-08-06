'use strict';

const form = document.querySelector('.form');
const body = document.querySelector('.body');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const btnSort = document.querySelector('.btnSort');
const btnDeleteAll = document.querySelector('.btnDeleteAll');
const alertContent = document.querySelector('.alert');

///////////////////////////////////////////////////
// lecture 01. Section Intro
// just Intro

///////////////////////////////////////////////////
// lecture 02 Section Roadmap
// Section Roadmap

///////////////////////////////////////////////////
// lecture 03. Project Overview
// here I see what will do in this project

///////////////////////////////////////////////////
// lecture 04. How to Plan a Web Project
// here is the Plan of this Web Project

///////////////////////////////////////////////////
// lecture 05. Using the Geolocation API

///////////////////////////////////////////////////
// lecture 06. Displaying a Map Using Leaflet Library
// lecture 07. Displaying a Map Marker
// lecture 08. Rendering Workout Input Form

// let map, mapEvent;
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       const { latitude } = position.coords;
//       const { longitude } = position.coords;
//       console.log(`https://www.google.com/maps/@${latitude},${longitude},16z`);

//       const coords = [latitude, longitude];
//       // lecture 07. Displaying a Map Marker
//       map = L.map('map').setView(coords, 17);

//       L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       // lecture 08. Rendering Workout Input Form
//       //handaling click on map
//       map.on('click', function (mapE) {
//         mapEvent = mapE;
//         form.classList.remove('hidden');
//         inputDistance.focus();
//       });
//     },

//     function () {
//       alert('Could not get your location');
//     }
//   );
// }

// form.addEventListener('submit', function (e) {
//   //Display marker
//   inputDistance.value =
//     inputDuration.value =
//     inputCadence.value =
//     inputElevation.value =
//       '';

//   e.preventDefault();
//   console.log(mapEvent);
//   const { lat, lng } = mapEvent.latlng;
//   L.marker([lat, lng])
//     .addTo(map)
//     .bindPopup(
//       L.popup({
//         maxWidth: 250,
//         minWidth: 100,
//         autoClose: false,
//         closeOnClick: false,
//         className: 'running-popup',
//       })
//     )
//     .setPopupContent('workout')
//     .openPopup();
// });

// inputType.addEventListener('change', function () {
//   inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//   inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
// });

///////////////////////////////////////////////////
// lecture 09. Project Architecture
//theory and diagram about project architecture

///////////////////////////////////////////////////
// lecture 10. Refactoring for Project Architecture

// class App {
//   #map;
//   #mapEvent;

//   constructor() {
//     this._getPosition();
//     form.addEventListener('submit', this._newWorkout.bind(this));
//     inputType.addEventListener('change', this._toggleElevationField);
//   }

//   _getPosition() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         this._loadMap.bind(this),
//         function () {
//           alert('Could not get your location');
//         }
//       );
//     }
//   }

//   _loadMap(position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     console.log(`https://www.google.com/maps/@${latitude},${longitude},16z`);

//     const coords = [latitude, longitude];
//     // lecture 07. Displaying a Map Marker
//     this.#map = L.map('map').setView(coords, 17);

//     L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(this.#map);

//     // lecture 08. Rendering Workout Input Form
//     //handaling click on map
//     this.#map.on('click', this._showForm.bind(this));
//   }

//   _showForm(mapE) {
//     this.#mapEvent = mapE;
//     form.classList.remove('hidden');
//     inputDistance.focus();
//   }

//   _toggleElevationField() {
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//   }

//   _newWorkout(e) {
//     //Display marker
//     inputDistance.value =
//       inputDuration.value =
//       inputCadence.value =
//       inputElevation.value =
//         '';

//     e.preventDefault();
//     // console.log(this.#mapEvent);
//     const { lat, lng } = this.#mapEvent.latlng;
//     L.marker([lat, lng])
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxWidth: 250,
//           minWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: 'running-popup',
//         })
//       )
//       .setPopupContent('workout')
//       .openPopup();
//   }
// }

// const app = new App();

// ///////////////////////////////////////////////////
// // lecture 11. Managing Workout Data Creating Classes

// class Workout {
//   date = new Date();
//   id = (Date.now() + '').slice(-10);

//   constructor(coords, distance, duration) {
//     // this,date = ...
//     // this.id = ...
//     this.coords = coords; //array of lat and lng [lat, lng]
//     this.distance = distance;
//     this.duration = duration;
//   }
// }

// class Running extends Workout {
//   constructor(coords, distance, duration, cadence) {
//     super(coords, distance, duration);
//     this.cadence = cadence;
//     this.calcPace();
//   }

//   calcPace() {
//     // min/KM
//     this.pace = this.duration / this.distance;
//     return this.pace;
//   }
// }

// class Cycling extends Workout {
//   constructor(coords, distance, duration, elevationGain) {
//     super(coords, distance, duration);
//     this.elevationGain = elevationGain;
//     this.calcSpeed();
//   }

//   calcSpeed() {
//     // KM/H
//     this.speed = this.distance / (this.duration / 60);
//     return this.speed;
//   }
// }
// // const run1 = new Running([23.75, 90.4], 2, 25, 50);
// // const cycling1 = new Cycling([23.75, 90.4], 1.5, 55, 520);
// // console.log(run1, cycling1);

// ///////////////////////////////
// //architecture
// class App {
//   #map;
//   #mapEvent;

//   constructor() {
//     this._getPosition();
//     form.addEventListener('submit', this._newWorkout.bind(this));
//     inputType.addEventListener('change', this._toggleElevationField);
//   }

//   _getPosition() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         this._loadMap.bind(this),
//         function () {
//           alert('Could not get your location');
//         }
//       );
//     }
//   }

//   _loadMap(position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     console.log(`https://www.google.com/maps/@${latitude},${longitude},16z`);

//     const coords = [latitude, longitude];
//     // lecture 07. Displaying a Map Marker
//     this.#map = L.map('map').setView(coords, 17);

//     L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(this.#map);

//     // lecture 08. Rendering Workout Input Form
//     //handaling click on map
//     this.#map.on('click', this._showForm.bind(this));
//   }

//   _showForm(mapE) {
//     this.#mapEvent = mapE;
//     form.classList.remove('hidden');
//     inputDistance.focus();
//   }

//   _toggleElevationField() {
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//   }

//   _newWorkout(e) {
//     //Display marker
//     inputDistance.value =
//       inputDuration.value =
//       inputCadence.value =
//       inputElevation.value =
//         '';

//     e.preventDefault();
//     // console.log(this.#mapEvent);
//     const { lat, lng } = this.#mapEvent.latlng;
//     L.marker([lat, lng])
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxWidth: 250,
//           minWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: 'running-popup',
//         })
//       )
//       .setPopupContent('workout')
//       .openPopup();
//   }
// }

// const app = new App();

///////////////////////////////////////////////////
// lecture 12. Creating a New Workout

// class Workout {
//   date = new Date();
//   id = (Date.now() + '').slice(-10);

//   constructor(coords, distance, duration) {
//     // this,date = ...
//     // this.id = ...
//     this.coords = coords; //array of lat and lng [lat, lng]
//     this.distance = distance;
//     this.duration = duration;
//   }
// }

// class Running extends Workout {
//   type = 'running';
//   constructor(coords, distance, duration, cadence) {
//     super(coords, distance, duration);
//     this.cadence = cadence;
//     this.calcPace();
//   }

//   calcPace() {
//     // min/KM
//     this.pace = this.duration / this.distance;
//     return this.pace;
//   }
// }

// class Cycling extends Workout {
//   type = 'cycling';
//   constructor(coords, distance, duration, elevationGain) {
//     super(coords, distance, duration);
//     this.elevationGain = elevationGain;
//     this.calcSpeed();
//   }

//   calcSpeed() {
//     // KM/H
//     this.speed = this.distance / (this.duration / 60);
//     return this.speed;
//   }
// }
// // const run1 = new Running([23.75, 90.4], 2, 25, 50);
// // const cycling1 = new Cycling([23.75, 90.4], 1.5, 55, 520);
// // console.log(run1, cycling1);

// ///////////////////////////////
// //architecture
// class App {
//   #map;
//   #mapEvent;
//   #workOuts = [];

//   constructor() {
//     this._getPosition();
//     form.addEventListener('submit', this._newWorkout.bind(this));
//     inputType.addEventListener('change', this._toggleElevationField);
//   }

//   _getPosition() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         this._loadMap.bind(this),
//         function () {
//           alert('Could not get your location');
//         }
//       );
//     }
//   }

//   _loadMap(position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     console.log(`https://www.google.com/maps/@${latitude},${longitude},16z`);

//     const coords = [latitude, longitude];
//     // lecture 07. Displaying a Map Marker
//     this.#map = L.map('map').setView(coords, 17);

//     L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(this.#map);

//     // lecture 08. Rendering Workout Input Form
//     //handaling click on map
//     this.#map.on('click', this._showForm.bind(this));
//   }

//   _showForm(mapE) {
//     this.#mapEvent = mapE;
//     form.classList.remove('hidden');
//     inputDistance.focus();
//   }

//   _toggleElevationField() {
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//   }

//   _newWorkout(e) {
//     // 2. check if data is valid
//     const validInput = (...inputs) =>
//       inputs.every(input => Number.isFinite(input));

//     const allPositive = (...inputs) => inputs.every(input => input > 0);

//     // 1. Get from form and map
//     const type = inputType.value;
//     const distance = +inputDistance.value;
//     const duration = +inputDuration.value;
//     const { lat, lng } = this.#mapEvent.latlng;
//     let workout;

//     // 3. If workout running, create running object
//     if (type === 'running') {
//       const cadence = +inputCadence.value;
//       //check if data is valid
//       if (
//         //   !Number.isFinite(distance) ||
//         //   !Number.isFinite(duration) ||
//         //   !Number.isFinite(cadence)
//         // )
//         !validInput(distance, duration, cadence) ||
//         !allPositive(distance, duration, cadence)
//       )
//         return alert('Input have to be only a positive number');

//       workout = new Running([lat, lng], distance, duration, cadence);
//     }
//     // 4. If workout cycling, create cycling object
//     if (type === 'cycling') {
//       const elevation = +inputElevation.value;
//       //check if data is valid
//       if (
//         !validInput(distance, duration, elevation) ||
//         !allPositive(distance, duration)
//       )
//         return alert('Input have to be only a positive number');

//       workout = new Cycling([lat, lng], distance, duration, elevation);
//     }
//     // 5. Add a new object to workout array
//     this.#workOuts.push(workout);
//     console.log(workout);
//     // 6. Rander workout on map as a marker
//     this.randerWorkoutMarker(workout);

//     // Render workout on list

//     // 8. Hide + clear Input Fields
//     inputDistance.value =
//       inputDuration.value =
//       inputCadence.value =
//       inputElevation.value =
//         '';

//     e.preventDefault();
//     // console.log(this.#mapEvent);
//   }
//   randerWorkoutMarker(workout) {
//     L.marker(workout.coords)
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxWidth: 250,
//           minWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: `${workout.type}-popup`,
//         })
//       )
//       .setPopupContent(toString(workout.distance))
//       .openPopup();
//   }
// }

// const app = new App();

///////////////////////////////////////////////////
// lecture 13. Rendering Workouts

// class Workout {
//   date = new Date();
//   id = (Date.now() + '').slice(-10);

//   constructor(coords, distance, duration) {
//     // this,date = ...
//     // this.id = ...
//     this.coords = coords; //array of lat and lng [lat, lng]
//     this.distance = distance;
//     this.duration = duration;
//   }

//   _setDescription() {
//     // prettier-ignore
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//     this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
//       months[this.date.getMonth()]
//     } ${this.date.getDate()}`;
//   }
// }

// class Running extends Workout {
//   type = 'running';
//   constructor(coords, distance, duration, cadence) {
//     super(coords, distance, duration);
//     this.cadence = cadence;
//     this.calcPace();
//     this._setDescription();
//   }

//   calcPace() {
//     // min/KM
//     this.pace = this.duration / this.distance;
//     return this.pace;
//   }
// }

// class Cycling extends Workout {
//   type = 'cycling';
//   constructor(coords, distance, duration, elevationGain) {
//     super(coords, distance, duration);
//     this.elevationGain = elevationGain;
//     this.calcSpeed();
//     this._setDescription();
//   }

//   calcSpeed() {
//     // KM/H
//     this.speed = this.distance / (this.duration / 60);
//     return this.speed;
//   }
// }
// // const run1 = new Running([23.75, 90.4], 2, 25, 50);
// // const cycling1 = new Cycling([23.75, 90.4], 1.5, 55, 520);
// // console.log(run1, cycling1);

// ///////////////////////////////
// //architecture
// class App {
//   #map;
//   #mapEvent;
//   #workOuts = [];

//   constructor() {
//     this._getPosition();
//     form.addEventListener('submit', this._newWorkout.bind(this));
//     inputType.addEventListener('change', this._toggleElevationField);
//   }

//   _getPosition() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         this._loadMap.bind(this),
//         function () {
//           alert('Could not get your location');
//         }
//       );
//     }
//   }

//   _loadMap(position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     console.log(`https://www.google.com/maps/@${latitude},${longitude},16z`);

//     const coords = [latitude, longitude];
//     // lecture 07. Displaying a Map Marker
//     this.#map = L.map('map').setView(coords, 17);

//     L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(this.#map);

//     // lecture 08. Rendering Workout Input Form
//     //handaling click on map
//     this.#map.on('click', this._showForm.bind(this));
//   }

//   _showForm(mapE) {
//     this.#mapEvent = mapE;
//     form.classList.remove('hidden');
//     inputDistance.focus();
//   }

//   _hideForm() {
//     inputDistance.value =
//       inputDuration.value =
//       inputCadence.value =
//       inputElevation.value =
//         '';
//     form.style.display = 'none';
//     form.classList.add('hidden');
//     setTimeout(() => (form.style.display = 'grid'), 1000);
//   }

//   _toggleElevationField() {
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//   }

//   _newWorkout(e) {
//     e.preventDefault();
//     // 2. check if data is valid
//     const validInput = (...inputs) =>
//       inputs.every(input => Number.isFinite(input));

//     const allPositive = (...inputs) => inputs.every(input => input > 0);

//     // 1. Get from form and map
//     const type = inputType.value;
//     const distance = +inputDistance.value;
//     const duration = +inputDuration.value;
//     const { lat, lng } = this.#mapEvent.latlng;
//     let workout;

//     // 3. If workout running, create running object
//     if (type === 'running') {
//       const cadence = +inputCadence.value;
//       //check if data is valid
//       if (
//         //   !Number.isFinite(distance) ||
//         //   !Number.isFinite(duration) ||
//         //   !Number.isFinite(cadence)
//         // )
//         !validInput(distance, duration, cadence) ||
//         !allPositive(distance, duration, cadence)
//       )
//         return alert('Input have to be only a positive number');

//       workout = new Running([lat, lng], distance, duration, cadence);
//     }
//     // 4. If workout cycling, create cycling object
//     if (type === 'cycling') {
//       const elevation = +inputElevation.value;
//       //check if data is valid
//       if (
//         !validInput(distance, duration, elevation) ||
//         !allPositive(distance, duration)
//       )
//         return alert('Input have to be only a positive number');

//       workout = new Cycling([lat, lng], distance, duration, elevation);
//     }
//     // 5. Add a new object to workout array
//     this.#workOuts.push(workout);
//     console.log(workout);
//     // 6. Rander workout on map as a marker
//     this._randerWorkoutMarker(workout);

//     // Render workout on list
//     this._randerWorkout(workout);
//     // 8. Hide + clear Input Fields
//     this._hideForm();
//     // console.log(this.#mapEvent);
//   }
//   _randerWorkoutMarker(workout) {
//     L.marker(workout.coords)
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxWidth: 250,
//           minWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: `${workout.type}-popup`,
//         })
//       )
//       .setPopupContent(
//         `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
//       )
//       .openPopup();
//   }
//   _randerWorkout(workout) {
//     console.log(workout);
//     let html = `<li class="workout workout--${workout.type}" data-id="${
//       workout.id
//     }">
//     <h2 class="workout__title">${workout.description}</h2>
//     <div class="workout__details">
//       <span class="workout__icon">${
//         workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
//       }</span>
//       <span class="workout__value">${workout.distance}</span>
//       <span class="workout__unit">km</span>
//     </div>
//     <div class="workout__details">
//       <span class="workout__icon">⏱</span>
//       <span class="workout__value">${workout.duration}</span>
//       <span class="workout__unit">min</span>
//     </div>`;
//     if (workout.type === 'running') {
//       html += `
//       <div class="workout__details">
//       <span class="workout__icon">⚡️</span>
//       <span class="workout__value">${workout.pace.toFixed(1)}</span>
//       <span class="workout__unit">min/km</span>
//     </div>
//     <div class="workout__details">
//       <span class="workout__icon">🦶🏼</span>
//       <span class="workout__value">${workout.cadence}</span>
//       <span class="workout__unit">spm</span>
//     </div>
//     `;
//     }
//     if (workout.type === 'cycling') {
//       html += `<div class="workout__details">
//       <span class="workout__icon">⚡️</span>
//       <span class="workout__value">${workout.speed}</span>
//       <span class="workout__unit">km/h</span>
//     </div>
//     <div class="workout__details">
//       <span class="workout__icon">⛰</span>
//       <span class="workout__value">${workout.elevationGain}</span>
//       <span class="workout__unit">m</span>
//     </div>`;
//     }
//     form.insertAdjacentHTML('afterend', html);
//   }
// }

// const app = new App();

///////////////////////////////////////////////////
// lecture 14. Move to Marker On Click
// class Workout {
//   date = new Date();
//   id = (Date.now() + '').slice(-10);
//   clicks = 0;

//   constructor(coords, distance, duration) {
//     // this,date = ...
//     // this.id = ...
//     this.coords = coords; //array of lat and lng [lat, lng]
//     this.distance = distance;
//     this.duration = duration;
//   }

//   _setDescription() {
//     // prettier-ignore
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//     this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
//       months[this.date.getMonth()]
//     } ${this.date.getDate()}`;
//   }
//   click() {
//     this.clicks++;
//   }
// }

// class Running extends Workout {
//   type = 'running';
//   constructor(coords, distance, duration, cadence) {
//     super(coords, distance, duration);
//     this.cadence = cadence;
//     this.calcPace();
//     this._setDescription();
//   }

//   calcPace() {
//     // min/KM
//     this.pace = this.duration / this.distance;
//     return this.pace;
//   }
// }

// class Cycling extends Workout {
//   type = 'cycling';
//   constructor(coords, distance, duration, elevationGain) {
//     super(coords, distance, duration);
//     this.elevationGain = elevationGain;
//     this.calcSpeed();
//     this._setDescription();
//   }

//   calcSpeed() {
//     // KM/H
//     this.speed = this.distance / (this.duration / 60);
//     return this.speed;
//   }
// }
// // const run1 = new Running([23.75, 90.4], 2, 25, 50);
// // const cycling1 = new Cycling([23.75, 90.4], 1.5, 55, 520);
// // console.log(run1, cycling1);

// ///////////////////////////////
// //architecture
// class App {
//   #map;
//   #mapZommLevel = 17;
//   #mapEvent;
//   #workOuts = [];

//   constructor() {
//     this._getPosition();
//     form.addEventListener('submit', this._newWorkout.bind(this));
//     inputType.addEventListener('change', this._toggleElevationField);
//     containerWorkouts.addEventListener('click', this.moveToPopup.bind(this));
//   }

//   _getPosition() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         this._loadMap.bind(this),
//         function () {
//           alert('Could not get your location');
//         }
//       );
//     }
//   }

//   _loadMap(position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     console.log(`https://www.google.com/maps/@${latitude},${longitude},16z`);

//     const coords = [latitude, longitude];
//     // lecture 07. Displaying a Map Marker
//     this.#map = L.map('map').setView(coords, this.#mapZommLevel);

//     L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(this.#map);

//     // lecture 08. Rendering Workout Input Form
//     //handaling click on map
//     this.#map.on('click', this._showForm.bind(this));
//   }

//   _showForm(mapE) {
//     this.#mapEvent = mapE;
//     form.classList.remove('hidden');
//     inputDistance.focus();
//   }

//   _hideForm() {
//     inputDistance.value =
//       inputDuration.value =
//       inputCadence.value =
//       inputElevation.value =
//         '';
//     form.style.display = 'none';
//     form.classList.add('hidden');
//     setTimeout(() => (form.style.display = 'grid'), 1000);
//   }

//   _toggleElevationField() {
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//   }

//   _newWorkout(e) {
//     e.preventDefault();
//     // 2. check if data is valid
//     const validInput = (...inputs) =>
//       inputs.every(input => Number.isFinite(input));

//     const allPositive = (...inputs) => inputs.every(input => input > 0);

//     // 1. Get from form and map
//     const type = inputType.value;
//     const distance = +inputDistance.value;
//     const duration = +inputDuration.value;
//     const { lat, lng } = this.#mapEvent.latlng;
//     let workout;

//     // 3. If workout running, create running object
//     if (type === 'running') {
//       const cadence = +inputCadence.value;
//       //check if data is valid
//       if (
//         //   !Number.isFinite(distance) ||
//         //   !Number.isFinite(duration) ||
//         //   !Number.isFinite(cadence)
//         // )
//         !validInput(distance, duration, cadence) ||
//         !allPositive(distance, duration, cadence)
//       )
//         return alert('Input have to be only a positive number');

//       workout = new Running([lat, lng], distance, duration, cadence);
//     }
//     // 4. If workout cycling, create cycling object
//     if (type === 'cycling') {
//       const elevation = +inputElevation.value;
//       //check if data is valid
//       if (
//         !validInput(distance, duration, elevation) ||
//         !allPositive(distance, duration)
//       )
//         return alert('Input have to be only a positive number');

//       workout = new Cycling([lat, lng], distance, duration, elevation);
//     }
//     // 5. Add a new object to workout array
//     this.#workOuts.push(workout);
//     console.log(workout);
//     // 6. Rander workout on map as a marker
//     this._randerWorkoutMarker(workout);

//     // Render workout on list
//     this._randerWorkout(workout);
//     // 8. Hide + clear Input Fields
//     this._hideForm();
//     // console.log(this.#mapEvent);
//   }
//   _randerWorkoutMarker(workout) {
//     L.marker(workout.coords)
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxWidth: 250,
//           minWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: `${workout.type}-popup`,
//         })
//       )
//       .setPopupContent(
//         `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
//       )
//       .openPopup();
//   }
//   _randerWorkout(workout) {
//     // console.log(workout);
//     let html = `<li class="workout workout--${workout.type}" data-id="${
//       workout.id
//     }">
//     <h2 class="workout__title">${workout.description}</h2>
//     <div class="workout__details">
//       <span class="workout__icon">${
//         workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
//       }</span>
//       <span class="workout__value">${workout.distance}</span>
//       <span class="workout__unit">km</span>
//     </div>
//     <div class="workout__details">
//       <span class="workout__icon">⏱</span>
//       <span class="workout__value">${workout.duration}</span>
//       <span class="workout__unit">min</span>
//     </div>`;
//     if (workout.type === 'running') {
//       html += `
//       <div class="workout__details">
//       <span class="workout__icon">⚡️</span>
//       <span class="workout__value">${workout.pace.toFixed(1)}</span>
//       <span class="workout__unit">min/km</span>
//     </div>
//     <div class="workout__details">
//       <span class="workout__icon">🦶🏼</span>
//       <span class="workout__value">${workout.cadence}</span>
//       <span class="workout__unit">spm</span>
//     </div>
//     `;
//     }
//     if (workout.type === 'cycling') {
//       html += `<div class="workout__details">
//       <span class="workout__icon">⚡️</span>
//       <span class="workout__value">${workout.speed}</span>
//       <span class="workout__unit">km/h</span>
//     </div>
//     <div class="workout__details">
//       <span class="workout__icon">⛰</span>
//       <span class="workout__value">${workout.elevationGain}</span>
//       <span class="workout__unit">m</span>
//     </div>`;
//     }
//     form.insertAdjacentHTML('afterend', html);
//   }
//   moveToPopup(e) {
//     const workoutEL = e.target.closest('.workout');

//     if (!workoutEL) return;
//     // console.log(workoutEL);

//     const workout = this.#workOuts.find(
//       work => work.id === workoutEL.dataset.id
//     );
//     // console.log(workout);
//     this.#map.setView(workout.coords, this.#mapZommLevel, {
//       animate: true,
//       pan: {
//         duration: 1,
//       },
//     });

//     //public interface
//     workout.click();
//     console.log(workout);
//   }
// }

// const app = new App();

///////////////////////////////////////////////////
// lecture 15. Working with localStorage
// class Workout {
//   date = new Date();
//   id = (Date.now() + '').slice(-10);
//   clicks = 0;

//   constructor(coords, distance, duration) {
//     // this,date = ...
//     // this.id = ...
//     this.coords = coords; //array of lat and lng [lat, lng]
//     this.distance = distance;
//     this.duration = duration;
//   }

//   _setDescription() {
//     // prettier-ignore
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//     this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
//       months[this.date.getMonth()]
//     } ${this.date.getDate()}`;
//   }
//   click() {
//     this.clicks++;
//   }
// }

// class Running extends Workout {
//   type = 'running';
//   constructor(coords, distance, duration, cadence) {
//     super(coords, distance, duration);
//     this.cadence = cadence;
//     this.calcPace();
//     this._setDescription();
//   }

//   calcPace() {
//     // min/KM
//     this.pace = this.duration / this.distance;
//     return this.pace;
//   }
// }

// class Cycling extends Workout {
//   type = 'cycling';
//   constructor(coords, distance, duration, elevationGain) {
//     super(coords, distance, duration);
//     this.elevationGain = elevationGain;
//     this.calcSpeed();
//     this._setDescription();
//   }

//   calcSpeed() {
//     // KM/H
//     this.speed = this.distance / (this.duration / 60);
//     return this.speed;
//   }
// }
// // const run1 = new Running([23.75, 90.4], 2, 25, 50);
// // const cycling1 = new Cycling([23.75, 90.4], 1.5, 55, 520);
// // console.log(run1, cycling1);

// ///////////////////////////////
// //architecture
// class App {
//   #map;
//   #mapZommLevel = 17;
//   #mapEvent;
//   #workOuts = [];

//   constructor() {
//     //Get users position
//     this._getPosition();

//     //Get data from browser storage
//     this._getLocalStorageData();

//     form.addEventListener('submit', this._newWorkout.bind(this));
//     inputType.addEventListener('change', this._toggleElevationField);
//     containerWorkouts.addEventListener('click', this.moveToPopup.bind(this));
//   }

//   _getPosition() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         this._loadMap.bind(this),
//         function () {
//           alert('Could not get your location');
//         }
//       );
//     }
//   }

//   _loadMap(position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     // console.log(`https://www.google.com/maps/@${latitude},${longitude},16z`);

//     const coords = [latitude, longitude];
//     // lecture 07. Displaying a Map Marker
//     this.#map = L.map('map').setView(coords, this.#mapZommLevel);

//     L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(this.#map);

//     // lecture 08. Rendering Workout Input Form
//     //handaling click on map
//     this.#map.on('click', this._showForm.bind(this));
//     this.#workOuts.forEach(work => {
//       this._randerWorkoutMarker(work);
//     });
//   }

//   _showForm(mapE) {
//     this.#mapEvent = mapE;
//     form.classList.remove('hidden');
//     inputDistance.focus();
//   }

//   _hideForm() {
//     inputDistance.value =
//       inputDuration.value =
//       inputCadence.value =
//       inputElevation.value =
//         '';
//     form.style.display = 'none';
//     form.classList.add('hidden');
//     setTimeout(() => (form.style.display = 'grid'), 1000);
//   }

//   _toggleElevationField() {
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//   }

//   _newWorkout(e) {
//     e.preventDefault();
//     // 2. check if data is valid
//     const validInput = (...inputs) =>
//       inputs.every(input => Number.isFinite(input));

//     const allPositive = (...inputs) => inputs.every(input => input > 0);

//     // 1. Get from form and map
//     const type = inputType.value;
//     const distance = +inputDistance.value;
//     const duration = +inputDuration.value;
//     const { lat, lng } = this.#mapEvent.latlng;
//     let workout;

//     // 3. If workout running, create running object
//     if (type === 'running') {
//       const cadence = +inputCadence.value;
//       //check if data is valid
//       if (
//         //   !Number.isFinite(distance) ||
//         //   !Number.isFinite(duration) ||
//         //   !Number.isFinite(cadence)
//         // )
//         !validInput(distance, duration, cadence) ||
//         !allPositive(distance, duration, cadence)
//       )
//         return alert('Input have to be only a positive number');

//       workout = new Running([lat, lng], distance, duration, cadence);
//     }
//     // 4. If workout cycling, create cycling object
//     if (type === 'cycling') {
//       const elevation = +inputElevation.value;
//       //check if data is valid
//       if (
//         !validInput(distance, duration, elevation) ||
//         !allPositive(distance, duration)
//       )
//         return alert('Input have to be only a positive number');

//       workout = new Cycling([lat, lng], distance, duration, elevation);
//     }
//     // 5. Add a new object to workout array
//     this.#workOuts.push(workout);
//     // console.log(workout);
//     // 6. Rander workout on map as a marker
//     this._randerWorkoutMarker(workout);

//     // 8. Render workout on list
//     this._randerWorkout(workout);
//     // 9. Hide + clear Input Fields
//     this._hideForm();
//     // console.log(this.#mapEvent);
//     // 10. Set local store to all workout
//     this._setLocalStorage();
//   }
//   _randerWorkoutMarker(workout) {
//     L.marker(workout.coords)
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxWidth: 250,
//           minWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: `${workout.type}-popup`,
//         })
//       )
//       .setPopupContent(
//         `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
//       )
//       .openPopup();
//   }
//   _randerWorkout(workout) {
//     // console.log(workout);
//     let html = `<li class="workout workout--${workout.type}" data-id="${
//       workout.id
//     }">
//     <h2 class="workout__title">${workout.description}</h2>
//     <div class="workout__details">
//       <span class="workout__icon">${
//         workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
//       }</span>
//       <span class="workout__value">${workout.distance}</span>
//       <span class="workout__unit">km</span>
//     </div>
//     <div class="workout__details">
//       <span class="workout__icon">⏱</span>
//       <span class="workout__value">${workout.duration}</span>
//       <span class="workout__unit">min</span>
//     </div>`;
//     if (workout.type === 'running') {
//       html += `
//       <div class="workout__details">
//       <span class="workout__icon">⚡️</span>
//       <span class="workout__value">${workout.pace.toFixed(1)}</span>
//       <span class="workout__unit">min/km</span>
//     </div>
//     <div class="workout__details">
//       <span class="workout__icon">🦶🏼</span>
//       <span class="workout__value">${workout.cadence}</span>
//       <span class="workout__unit">spm</span>
//     </div>
//     `;
//     }
//     if (workout.type === 'cycling') {
//       html += `<div class="workout__details">
//       <span class="workout__icon">⚡️</span>
//       <span class="workout__value">${workout.speed}</span>
//       <span class="workout__unit">km/h</span>
//     </div>
//     <div class="workout__details">
//       <span class="workout__icon">⛰</span>
//       <span class="workout__value">${workout.elevationGain}</span>
//       <span class="workout__unit">m</span>
//     </div>`;
//     }
//     form.insertAdjacentHTML('afterend', html);
//   }
//   moveToPopup(e) {
//     const workoutEL = e.target.closest('.workout');

//     if (!workoutEL) return;
//     // console.log(workoutEL);

//     const workout = this.#workOuts.find(
//       work => work.id === workoutEL.dataset.id
//     );
//     // console.log(workout);
//     this.#map.setView(workout.coords, this.#mapZommLevel, {
//       animate: true,
//       pan: {
//         duration: 1,
//       },
//     });

//     //public interface
//     // workout.click();
//     console.log(workout);
//   }

//   _setLocalStorage() {
//     localStorage.setItem('workouts', JSON.stringify(this.#workOuts));
//   }

//   _getLocalStorageData() {
//     const data = JSON.parse(localStorage.getItem('workouts'));
//     // console.log(data);

//     if (!data) return;

//     this.#workOuts = data;
//     this.#workOuts.forEach(work => {
//       this._randerWorkout(work);
//     });
//   }
//   reset() {
//     localStorage.removeItem('workouts');
//     location.reload();
//   }
// }

// const app = new App();

///////////////////////////////////////////////////
// lecture 16. Final Considerations
class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    // this,date = ...
    // this.id = ...
    this.coords = coords; //array of lat and lng [lat, lng]
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/KM
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // KM/H
    this.speed = (this.distance / (this.duration / 60)).toFixed(2);
    return this.speed;
  }
}
// const run1 = new Running([23.75, 90.4], 2, 25, 50);
// const cycling1 = new Cycling([23.75, 90.4], 1.5, 55, 520);
// console.log(run1, cycling1);

///////////////////////////////
//architecture
class App {
  #map;
  #mapZommLevel = 17;
  #mapEvent;
  #workOuts = [];
  sortValue = 0;

  constructor() {
    //Get users position
    this._getPosition();

    //Get data from browser storage
    this._getLocalStorageData();

    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this.moveToPopup.bind(this));
    btnDeleteAll.addEventListener('click', this._deleteAllData.bind(this));
    btnSort.addEventListener('click', this._dataSort.bind(this));

    //delete indivisual elements
    document
      .querySelectorAll('.form__btn__delete')
      .forEach(el =>
        el.addEventListener('click', this._deleteIndividualEvent.bind(this))
      );

    document
      .querySelectorAll('.form__btn__edit')
      .forEach(el =>
        el.addEventListener('click', this._editIndividualEvent.bind(this))
      );
  }

  _editIndividualEvent(e) {
    const workoutEL = e.target.closest('.workout');

    if (!workoutEL) return;

    const index = this.#workOuts.find(work => work.id === workoutEL.dataset.id);
    console.log(index);

    const html = `<form class="form">
    <div class="form__row">
      <label class="form__label">Type</label>
      <select class="form__input form__input--type">
        <option value="running">Running</option>
        <option value="cycling">Cycling</option>
      </select>
    </div>
    <div class="form__row">
      <label class="form__label">Distance</label>
      <input class="form__input form__input--distance" placeholder="km" value="${
        index.distance
      }" />
    </div>
    
    <div class="form__row">
      <label class="form__label">Duration</label>
      <input
        class="form__input form__input--duration"
        placeholder="min" value="${index.duration}"
      />
    </div>
    ${
      typeof index.cadence === 'number'
        ? `<div class="form__row">
    <label class="form__label">Cadence</label>
    <input
      class="form__input form__input--cadence"
      placeholder="step/min" value="${index.cadence}"
    />
  </div>`
        : `<div class="form__row">
  <label class="form__label">Elev Gain</label>
  <input
    class="form__input form__input--elevation"
    placeholder="meters" value="${index.elevationGain}"
  />
</div>`
    }
    
    
    <button class="form__btn">OK</button>
  </form>`;

    workoutEL.insertAdjacentHTML('afterend', html);
    workoutEL.classList.add('hidden');

    // form.classList.remove('hidden');
    // workoutEL.remove();

    // const index = this.#workOuts.findIndex(
    //   work => work.id === workoutEL.dataset.id
    // );
    // this.#workOuts.splice(index, 1);

    // localStorage.removeItem('workouts');
    // localStorage.setItem('workouts', JSON.stringify(this.#workOuts));
  }

  _deleteIndividualEvent(e) {
    const workoutEL = e.target.closest('.workout');

    if (!workoutEL) return;
    workoutEL.remove();

    const index = this.#workOuts.findIndex(
      work => work.id === workoutEL.dataset.id
    );
    this.#workOuts.splice(index, 1);

    localStorage.removeItem('workouts');
    localStorage.setItem('workouts', JSON.stringify(this.#workOuts));
  }

  // function (e) {
  //   const workoutEL = e.target.closest('.workout');
  //   console.log(workoutEL);

  //   if (!workoutEL) return;
  //   // // console.log(workoutEL);
  //   workoutEL.remove();

  //   const workout = this.#workOuts.find(
  //     work => work.id === workoutEL.dataset.id
  //   );
  // }

  _dataSort(e) {
    e.preventDefault();
    const data = [...this.#workOuts];
    // console.log(this.#workOuts);
    // using prototype inheritance:
    // Array.prototype.sortBy = function (p) {
    //   return this.slice(0).sort(function (a, b) {
    //     return a[p] > b[p] ? 1 : a[p] < b[p] ? -1 : 0;
    //   });
    // };
    // const data = workoutData.sortBy('distance');
    if (this.sortValue % 4 == 0) {
      data.sort(function (a, b) {
        return a.distance - b.distance;
      });
      this._showAlert('Sort by distance. High to low', 'info');
    } else if (this.sortValue % 4 == 1) {
      data.sort(function (a, b) {
        return b.distance - a.distance;
      });
      this._showAlert('Sort by distance. Low to high', 'info');
    } else if (this.sortValue % 4 == 2) {
      data.sort(function (a, b) {
        return a.duration - b.duration;
      });
      this._showAlert('Sort by duration. High to low', 'info');
    } else if (this.sortValue % 4 == 3) {
      data.sort(function (a, b) {
        return b.duration - a.duration;
      });
      this._showAlert('Sort by duration. Low to high', 'info');
    }
    //else if (this.sortValue % 6 == 4) {
    //   data.sort(function (a, b) {
    //     return a.id - b.id;
    //   });
    // } else if (this.sortValue % 6 == 5) {
    //   data.sort(function (a, b) {
    //     return b.id - a.id;
    //   });
    // }
    this.sortValue++;
    document.querySelectorAll('.workout').forEach(el => el.remove());
    data.forEach(work => {
      this._randerWorkout(work);
    });
  }

  _showAlert(text, type, strong = '') {
    if (document.querySelector('.alert'))
      document.querySelector('.alert').remove();
    const html = `<div class="alert ${type}">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
      <strong>${strong}</strong> ${text}
    </div>`;
    body.insertAdjacentHTML('beforebegin', html);
    // document.body.style.paddingTop = '0px';
  }

  _deleteAllData(e) {
    e.preventDefault();
    let x = confirm('Are you sure you want to delete all the data?');
    if (x) this.reset();
    else return;
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          this._showAlert('Could not get your location', '');
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // console.log(`https://www.google.com/maps/@${latitude},${longitude},16z`);

    const coords = [latitude, longitude];
    // lecture 07. Displaying a Map Marker
    this.#map = L.map('map').setView(coords, this.#mapZommLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // lecture 08. Rendering Workout Input Form
    //handaling click on map
    this.#map.on('click', this._showForm.bind(this));
    this.#workOuts.forEach(work => {
      this._randerWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();
    // 2. check if data is valid
    const validInput = (...inputs) =>
      inputs.every(input => Number.isFinite(input));

    const allPositive = (...inputs) => inputs.every(input => input > 0);

    // 1. Get from form and map
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // 3. If workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      //check if data is valid
      if (
        //   !Number.isFinite(distance) ||
        //   !Number.isFinite(duration) ||
        //   !Number.isFinite(cadence)
        // )
        !validInput(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        // return alert('Input have to be only a positive number');
        return this._showAlert('Input have to be only a positive number', '');

      workout = new Running([lat, lng], distance, duration, cadence);
    }
    // 4. If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      //check if data is valid
      if (
        !validInput(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        // return alert('Input have to be only a positive number');
        return this._showAlert('Input have to be only a positive number', '');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    // 5. Add a new object to workout array
    this.#workOuts.push(workout);
    // console.log(workout);
    // 6. Rander workout on map as a marker
    this._randerWorkoutMarker(workout);

    // 8. Render workout on list
    this._randerWorkout(workout);
    // 9. Hide + clear Input Fields
    this._hideForm();
    // console.log(this.#mapEvent);
    // 10. Set local store to all workout
    this._setLocalStorage();
    // 11. show message
    this._showAlert('New workout insert sucessfully', 'success', 'Great!');
  }
  _randerWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }
  _randerWorkout(workout) {
    // console.log(workout);
    let html = `<li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
    <h2 class=" workout__title">${workout.description}</h2>
    <div>
      <button class="form__btn__edit btnEdit ">✏️</button>
      <button class="form__btn__delete btnEdit">❌</button>
    </div>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>`;
    if (workout.type === 'running') {
      html += `
      <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.pace.toFixed(1)}</span>
      <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">🦶🏼</span>
      <span class="workout__value">${workout.cadence}</span>
      <span class="workout__unit">spm</span>
    </div>
    `;
    }
    if (workout.type === 'cycling') {
      html += `<div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.speed}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${workout.elevationGain}</span>
      <span class="workout__unit">m</span>
    </div>`;
    }
    form.insertAdjacentHTML('afterend', html);
  }
  moveToPopup(e) {
    const workoutEL = e.target.closest('.workout');

    if (!workoutEL) return;
    // console.log(workoutEL);

    const workout = this.#workOuts.find(
      work => work.id === workoutEL.dataset.id
    );
    // console.log(workout);
    this.#map.setView(workout.coords, this.#mapZommLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    //public interface
    // workout.click();
    // console.log(workout);
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workOuts));
  }

  _getLocalStorageData() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    // console.log(data);

    if (!data) return;

    this.#workOuts = data;
    this.#workOuts.forEach(work => {
      this._randerWorkout(work);
    });
  }
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
