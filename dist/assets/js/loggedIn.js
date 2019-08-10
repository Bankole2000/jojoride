// TODO: Check if Logged in
// TODO: Update UI Fields
// TODO: Get Notification counts
// TODO: Get Timers

const checkIfLoggedIn = () => {
  // get details from local storage
  const email = localStorage.getItem('jojoemail');
  const pass = localStorage.getItem('jojopass');
  const isLoggedIn = email && pass ? true : false;
  email && pass ? M.toast({html: `Welcome ${email}`, classes: "success", displayLength: 1000}) : M.toast({html: `Not Logged In`, classes: "error", completeCallback: () => { window.location.replace("../index.html"); }, displayLength: 1000});

  // Compare with session Data via Ajax request
  return isLoggedIn;
}

checkIfLoggedIn();
