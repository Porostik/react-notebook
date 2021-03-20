import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCiu2JYwYS5MYp9qqUFAucI1uEqoZGYdTo',
  authDomain: 'react-freelance-list.firebaseapp.com',
  databaseURL: 'https://react-freelance-list-default-rtdb.firebaseio.com',
  projectId: 'react-freelance-list',
  storageBucket: 'react-freelance-list.appspot.com',
  messagingSenderId: '468766576098',
  appId: '1:468766576098:web:3823c9870422c9971ffdbb',
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.database();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  loginAsGuest() {
    return this.auth.signInAnonymously();
  }

  logout() {
    return this.auth.signOut();
  }

  registration(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  getCustomers() {
    const currentId = this.auth.currentUser.uid;
    const customersRef = this.db.ref(`${currentId}/customers`);
    return customersRef.once('value', (snapshot) => snapshot.val());
  }

  getCustomer(id) {
    const currentId = this.auth.currentUser.uid;
    const customersRef = this.db.ref(`${currentId}/customers/${id}`);
    return customersRef.once('value', (snapshot) => snapshot.val());
  }

  addNewCustomer(customer) {
    const currentId = this.auth.currentUser.uid;
    const customerRef = this.db.ref(`${currentId}/customers/${customer.uid}`);
    return customerRef.set(customer);
  }

  updateCstuomer(customer) {
    const currentId = this.auth.currentUser.uid;
    const customerRef = this.db.ref(`${currentId}/customers/${customer.uid}`);
    return customerRef.update(customer);
  }

  createOrUpdateCustomer(customer) {
    const currentId = this.auth.currentUser.uid;
    const customerRef = this.db.ref(`${currentId}/customers/${customer.uid}`);
    const customersRef = this.db.ref(`${currentId}/customers`);
    customerRef.once('value', (snapshot) => {
      if (snapshot.exists()) {
        customerRef.update(customer);
      } else {
        customersRef.set(customer);
      }
    });
  }
}

export default new Firebase();
