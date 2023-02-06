// Clipboard API
const writeToClipboard = async () => {
  const userText = document.querySelector('[data-clipboard="clipboard"]').value;
  try {
    await navigator.clipboard.writeText(userText);
    console.log("Text copied to the clipboard");
  } catch (error) {
    console.log(error);
  }
};

const readFromClipboard = async () => {
  try {
    const clipboardText = await navigator.clipboard.readText();
    console.log(clipboardText);
    alert(clipboardText);
  } catch (error) {
    console.log(error);
  }
};

// LocalStorage API
// save data in local Storage
localStorage.setItem("key", "conteúdo");

// get data from local storage
localStorage.getItem("key");

// remove data from local storage
localStorage.removeItem("key");

// Geolocation API
const getCurrentLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const coord = position.coords;
      console.log(coord.accuracy);
      console.log(coord.latitude);
      console.log(coord.longitude);
      alert("Latitude: " + coord.latitude + ", Longitude: " + coord.longitude);
    },
    (error) => {
      console.log(`Error: ${error.message}`);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
};

// History API
// go back in history
// window.history.back();

// go foward in history
// window.history.forward();

// Fetch API
async function callAPI() {
  try {
    const response = await fetch(`API_URL`, {
      method: "",
      headers: { Authorization: "Bearer " + "token" },
      body: {},
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
