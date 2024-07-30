// src/components/Layout.jsx

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl">Gestão de Reservas</h1>
      </header>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gray-200 text-center p-4">
        © 2024 Casa de Praia
      </footer>
    </div>
  );
};

export default Layout;
