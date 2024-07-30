// src/components/NewReservation.jsx
import { useState } from "react";
import { addReservation } from "../firebase"; // Certifique-se de que esta função está corretamente implementada

const NewReservation = () => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addReservation({
        name,
        startDate,
        endDate,
        totalAmount: parseFloat(totalAmount),
        paidAmount: 0 // Inicialmente, assume-se que nada foi pago
      });
      alert("Reserva adicionada com sucesso!");
      setName("");
      setStartDate("");
      setEndDate("");
      setTotalAmount(0);
    } catch (error) {
      console.error("Erro ao adicionar reserva: ", error);
      alert("Erro ao adicionar reserva. Tente novamente.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Nova Reserva</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Nome do Hóspede</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm">Data de Check-in</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm">Data de Check-out</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm">Valor Total</label>
          <input
            type="number"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Adicionar Reserva
        </button>
      </form>
    </div>
  );
};

export default NewReservation;
