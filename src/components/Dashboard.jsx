// src/components/Dashboard.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getReservations, deleteReservation } from "../firebase";
import { formatDate } from "../utils/formatDate"; // Importa a função de formatação

const Dashboard = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const data = await getReservations();
      setReservations(data);
    };
    fetchReservations();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir esta reserva?");
    if (confirmDelete) {
      await deleteReservation(id);
      setReservations(reservations.filter(reservation => reservation.id !== id));
    }
  };

  return (
    <div className="p-4 md:p-6 dark:bg-dark-bg">
      <h2 className="text-2xl md:text-3xl font-semibold text-apple-dark dark:text-dark-text mb-4 md:mb-6">Visão Geral das Reservas</h2>
      <ul className="space-y-4 md:space-y-6">
        {reservations.map((reservation) => (
          <li key={reservation.id} className="p-4 md:p-6 bg-white dark:bg-dark-card rounded-xl shadow flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg md:text-xl font-semibold">{reservation.name}</h3>
              <p className="text-apple-dark dark:text-dark-text">{formatDate(reservation.startDate)} - {formatDate(reservation.endDate)}</p>
              <p className="text-apple-dark dark:text-dark-text">
                Valor: R$ {reservation.totalAmount} -{" "}
                {reservation.paidAmount === reservation.totalAmount
                  ? "Pago"
                  : `Parcial (${reservation.paidAmount}/${reservation.totalAmount})`}
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <Link to={`/reservation/${reservation.id}`}>
                <button className="bg-apple-blue text-white px-4 py-2 rounded-lg hover:bg-opacity-75">
                  Detalhes
                </button>
              </Link>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => handleDelete(reservation.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
