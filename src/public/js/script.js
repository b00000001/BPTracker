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
  userData.entrydate = entryDate.value;
  userData.systolic = systolic.value;
  userData.diastolic = diastolic.value;
  saveToLocal();
};

const submitFunction = (e) => {
  let userData = {};
  e.preventDefault();
  nameColumn.innerHTML = `<h2>${nameInput.value}'s bloodpressure tracker:</h2>`;
  userData.name = nameInput.value.trim();
  saveToLocal(userData);
  nameForm.style.visibility = 'hidden';
  bpTrackerForm.style.visibility = 'visible';
};
// function for saving data to localstorage.
const saveToLocal = (usrData) => {
  localStorage.setItem('userData', JSON.stringify(usrData));
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
