var firebaseConfig = {
    apiKey: "AIzaSyAmY5iEyWh4tnRyN-incUXmWFRqzMzxBsQ",
    authDomain: "chat-app-2393a.firebaseapp.com",
    projectId: "chat-app-2393a",
    storageBucket: "chat-app-2393a.appspot.com",
    messagingSenderId: "859488635523",
    appId: "1:859488635523:web:95fb1a3aeef01bde3929b6"
  };
  firebase.initializeApp(firebaseConfig);

  function logout(){
      window.location="index.html";
  }