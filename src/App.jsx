function App() {
  return (

    <div className="container-fluid vh-100 d-flex flex-column p-0">

      {/* HEADER */}
      <header
        className="
          bg-primary
          text-white
          d-flex
          align-items-center
          justify-content-between
          px-4
          flex-shrink-0
        "
        style={{ height: "70px" }}
      >

        <h3 className="m-0">
          POS Profesional
        </h3>

        <div>
          Usuario Admin
        </div>

      </header>

      {/* MAIN */}
      <div className="d-flex flex-grow-1 overflow-hidden">

        {/* SIDEBAR */}
        <aside
          className="
            bg-dark
            text-white
            d-flex
            flex-column
            flex-shrink-0
            p-3
          "
          style={{
            width: "260px",
            minWidth: "260px",
          }}
        >

          {/* TITLE */}
          <div className="mb-4">

            <h4
              className="m-0 fw-bold"
              style={{
                fontSize: "28px",
                whiteSpace: "nowrap",
              }}
            >
              SIDEBAR
            </h4>

          </div>

          {/* MENU */}
          <nav className="d-flex flex-column gap-2">

            <button className="btn btn-dark text-start border border-secondary">
              🏠 Dashboard
            </button>

            <button className="btn btn-dark text-start border border-secondary">
              🛒 Punto de Venta
            </button>

            <button className="btn btn-dark text-start border border-secondary">
              📦 Productos
            </button>

            <button className="btn btn-dark text-start border border-secondary">
              👥 Clientes
            </button>

            <button className="btn btn-dark text-start border border-secondary">
              🚚 Proveedores
            </button>

            <button className="btn btn-dark text-start border border-secondary">
              💰 Caja
            </button>

            <button className="btn btn-dark text-start border border-secondary">
              📈 Reportes
            </button>

            <button className="btn btn-dark text-start border border-secondary">
              👨‍💼 Usuarios
            </button>

            <button className="btn btn-dark text-start border border-secondary">
              ⚙️ Configuración
            </button>

          </nav>

        </aside>

        {/* CONTENT */}
        <main
          className="
            flex-grow-1
            bg-light
            d-flex
            align-items-center
            justify-content-center
            overflow-auto
          "
        >

          <h2 className="text-secondary">
            CONTENIDO
          </h2>

        </main>

      </div>

      {/* FOOTER */}
      <footer
        className="
          bg-black
          text-white
          d-flex
          align-items-center
          justify-content-between
          px-4
          flex-shrink-0
        "
        style={{ height: "50px" }}
      >

        <span>
          FOOTER / STATUS BAR
        </span>

        <span>
          Sistema POS Online
        </span>

      </footer>

    </div>

  );
}

export default App;