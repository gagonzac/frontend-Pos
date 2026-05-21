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
          justify-content-center
          flex-shrink-0
        "
        style={{ height: "70px" }}
      >
        <h3 className="m-0">
          HEADER / TOPBAR / Usando Bootstrap
        </h3>
      </header>

      {/* MAIN */}
      <div className="d-flex flex-grow-1 overflow-hidden">

        {/* SIDEBAR */}
        <aside
          className="
            bg-dark
            text-white
            d-flex
            align-items-center
            justify-content-center
            flex-shrink-0
          "
          style={{
            width: "250px",
            minWidth: "250px",
          }}
        >
          <h4
            className="m-0"
            style={{
              fontSize: "28px",
              whiteSpace: "nowrap",
            }}
          >
            SIDEBAR
          </h4>
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
          justify-content-center
          flex-shrink-0
        "
        style={{ height: "50px" }}
      >
        FOOTER / STATUS BAR
      </footer>

    </div>

  );
}

export default App;