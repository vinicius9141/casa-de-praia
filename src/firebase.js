// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDm489cllrXaJu7RbCiFuaewKmfdy052sM",
  authDomain: "dball-d96c5.firebaseapp.com",
  databaseURL: "https://dball-d96c5-default-rtdb.firebaseio.com",
  projectId: "dball-d96c5",
  storageBucket: "dball-d96c5.appspot.com",
  messagingSenderId: "93264723664",
  appId: "1:93264723664:web:89132a42cf571a782728d5",
  measurementId: "G-989WEBGN8H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para adicionar uma nova reserva
const addReservation = async (reservation) => {
  try {
    await addDoc(collection(db, "reservations"), reservation);
  } catch (e) {
    console.error("Erro ao adicionar reserva: ", e);
  }
};

// Função para obter todas as reservas
const getReservations = async () => {
  try {
    const reservationsSnapshot = await getDocs(collection(db, "reservations"));
    return reservationsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Erro ao obter reservas: ", e);
  }
};

// Função para obter detalhes de uma reserva específica
const getReservationById = async (id) => {
  try {
    const docRef = doc(db, "reservations", id);
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data() };
  } catch (e) {
    console.error("Erro ao obter detalhes da reserva: ", e);
  }
};

// Função para atualizar uma reserva
const updateReservation = async (id, data) => {
  try {
    const docRef = doc(db, "reservations", id);
    await updateDoc(docRef, data);
  } catch (e) {
    console.error("Erro ao atualizar reserva: ", e);
  }
};


// Função para excluir uma reserva
const deleteReservation = async (id) => {
  try {
    const docRef = doc(db, "reservations", id);
    await deleteDoc(docRef);
  } catch (e) {
    console.error("Erro ao excluir reserva: ", e);
  }
};

export { db, addReservation, getReservations, getReservationById, updateReservation, deleteReservation };