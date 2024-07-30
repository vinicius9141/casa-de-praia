// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ReservationDetails from "./components/ReservationDetails";
import Reservations from "./components/Reservations";
import NewReservation from "./components/NewReservation"; // Importa o novo componente

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reservation/:id" element={<ReservationDetails />} />
          <Route path="/new-reservation" element={<NewReservation />} /> {/* Adiciona nova rota */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
