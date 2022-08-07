const nameColumn = document.getElementById('namecolumn');
const nameInput = document.getElementById('nameinputfield');
const homeBody = document.getElementById('homebody');
const userLocal = localStorage.getItem('userData') || null;
const nameForm = document.getElementById('nameentryform');
const bpTrackerForm = document.getElementById('bptrackerform');
const entrySaveBtn = document.getElementById('entrysavebutton');
const systolic = document.getElementById('systolicVal');
const diastolic = document.getElementById('diastolicVal');
const entryDate = document.getElementById('entrydate');
const days = ['Sunday', 'Monday', 'Tuesdsay', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const dateObj = new Date();
let userData = {};

if (userLocal) {
  let usrName = JSON.parse(localStorage.getItem('userData')).name;
  nameColumn.innerText = `${usrName}'s bloodpressure tracker.`;
  bpTrackerForm.style.visibility = 'visible';
  nameForm.style.visibility = 'hidden';
} else {
  bpTrackerForm.style.visibility = 'hidden';
  nameColumn.innerText = 'Please enter name:';
}

entrySaveBtn.onclick = (e) => {
  e.preventDefault();
  userData[days[dateObj.getDay()] + dateObj.getDay()] = entryDate.value;
  saveToLocal();
};

const submitFunction = (e) => {
  e.preventDefault();
  nameColumn.innerHTML = `<h2>${nameInput.value}'s bloodpressure tracker:</h2>`;
  userData.name = nameInput.value.trim();
  saveToLocal();
  nameForm.style.visibility = 'hidden';
  bpTrackerForm.style.visibility = 'visible';
};
// function for saving data to localstorage.
const saveToLocal = () => {
  localStorage.setItem('userData', JSON.stringify(userData));
  console.log(
    `
   Saving items to local storage... 
   Items currently in storage:
   ${checkLocal()}
   `
  );
};

const checkLocal = () => {
  return localStorage.getItem('userData');
};
