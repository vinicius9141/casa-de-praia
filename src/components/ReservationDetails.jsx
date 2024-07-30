// src/components/ReservationDetails.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReservationById, updateReservation } from "../firebase";
import { formatDate } from "../utils/formatDate"; // Importa a função de formatação

const ReservationDetails = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState(null);
  const [payment, setPayment] = useState(0);

  useEffect(() => {
    const fetchReservation = async () => {
      const data = await getReservationById(id);
      setReservation(data);
    };
    fetchReservation();
  }, [id]);

  const handlePaymentUpdate = async () => {
    if (!reservation) return;

    const newPaidAmount = reservation.paidAmount + parseFloat(payment);
    await updateReservation(reservation.id, { paidAmount: newPaidAmount });
    setReservation({ ...reservation, paidAmount: newPaidAmount });
    setPayment(0); // Reseta o valor de pagamento
  };

  if (!reservation) return <div>Carregando...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Detalhes da Reserva</h2>
      <div className="p-4 border rounded shadow">
        <h3 className="text-lg font-semibold">{reservation.name}</h3>
        <p>Check-in: {formatDate(reservation.startDate)}</p>
        <p>Check-out: {formatDate(reservation.endDate)}</p>
        <p>Valor Total: R$ {reservation.totalAmount}</p>
        <p>Valor Pago: R$ {reservation.paidAmount}</p>
        <p>
          {reservation.paidAmount === reservation.totalAmount
            ? "Totalmente Pago"
            : `Falta Pagar: R$ ${reservation.totalAmount - reservation.paidAmount}`}
        </p>
        <div className="mt-4">
          <label className="block text-sm">Adicionar Pagamento</label>
          <input
            type="number"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded mb-4"
          />
          <button
            onClick={handlePaymentUpdate}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Registrar Pagamento
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationDetails;
