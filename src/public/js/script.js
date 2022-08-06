const nameColumn = document.getElementById('namecolumn');
const nameInput = document.getElementById('nameinputfield');
const homeBody = document.getElementById('homebody');
const userLocal = localStorage.getItem('userData') || null;
const nameForm = document.getElementById('nameentryform');

const displayBpForm = () => {
  homeBody.appendChild(document.createElement('div'));
  homeBody.appendChild(document.createElement('form'));
};

if (userLocal) {
  let usrName = JSON.parse(localStorage.getItem('userData')).name;
  nameColumn.innerText = `${usrName}'s bloodpressure tracker.`;
  nameForm.style.visibility = 'hidden';
  displayBpForm();
} else {
  console.log('no name');
  nameColumn.innerText = 'Please enter name:';
}

const submitFunction = (e) => {
  let userData = {};
  e.preventDefault();
  nameColumn.innerText = `${nameInput.value}'s bloodpressure tracker:`;
  userData.name = nameInput.value.trim();
  saveToLocal(userData);
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
