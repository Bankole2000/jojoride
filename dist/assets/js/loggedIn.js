// TODO: Check if Logged in
// TODO: Update UI Fields
// TODO: Get Notification counts
// TODO: Get Timers

const checkIfLoggedIn = () => {
  // get details from local storage
  const email = localStorage.getItem('jojoemail');
  const pass = localStorage.getItem('jojopass');
  email && pass ? M.toast({html: `Welcome ${email}`, classes: "success", displayLength: 1000}) : alert("couldn't get to storage");
  // Compare with session Data via Ajax request
}

checkIfLoggedIn();