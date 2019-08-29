// Get a RTDB instance
const firebase = require("firebase");

export const db = firebase
  .initializeApp({ databaseURL: 'https://todolist-39e6c.firebaseio.com' })
  .database()
