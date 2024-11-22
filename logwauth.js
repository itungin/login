// import {
//     qrController,
//     deleteCookie,
//   } from "https://cdn.jsdelivr.net/gh/whatsauth/js@0.2.1/whatsauth.js";
//   import { wauthparam } from "https://cdn.jsdelivr.net/gh/whatsauth/js@0.2.1/config.js";
  
//   wauthparam.auth_ws = "d3NzOi8vYXBpLndhLm15LmlkL3dzL3doYXRzYXV0aC9wdWJsaWM=";
//   wauthparam.keyword = "  aHR0cHM6Ly93YS5tZS82Mjg1MTU3OTc5NzU5P3RleHQ9d2g0dDVhdXRoMA==";
//   wauthparam.tokencookiehourslifetime = 18;
//   wauthparam.redirect = "https://itung.in.my.id/dashboard/";
//   deleteCookie(wauthparam.tokencookiename);
//   qrController(wauthparam);
  
import { qrController, deleteCookie, wauthparam } from "https://cdn.jsdelivr.net/gh/whatsauth/js@0.2.1/whatsauth.js";

wauthparam.auth_ws = "d3NzOi8vYXBpLndhLm15LmlkL3dzL3doYXRzYXV0aC9wdWJsaWM=";
wauthparam.keyword = "aHR0cHM6Ly93YS5tZS82Mjg1MTU3OTc5NzU5P3RleHQ9d2g0dDVhdXRoMA==";
wauthparam.tokencookiehourslifetime = 18;
wauthparam.redirect = "https://itung.in.my.id/dashboard/";

// Function to set cookies
function setCookie(name, value, hours) {
  const date = new Date();
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/; Secure; SameSite=Strict;`;
  console.log(`Cookies diset: ${name}=${value}`);
}


// Override `qrController` success behavior
wauthparam.success = function (token) {
  console.log("Token diterima:", token); // Cek apakah token muncul di konsol
  setCookie("authToken", token, 18); // Simpan token ke cookies
  console.log("Token disimpan ke cookies dengan nama: authToken");
  window.location.href = wauthparam.redirect; // Redirect ke dashboard
};



wauthparam.error = function (message) {
  console.error("Error WhatsAuth:", message); // Cek jika ada error selama proses login
};



// Delete existing cookies and initialize the QR Controller
deleteCookie(wauthparam.tokencookiename);
qrController(wauthparam);
