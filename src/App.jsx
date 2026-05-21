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
        "
        style={{ height: "70px" }}
      >
        <h3 className="m-0">
          HEADER / TOPBAR/ Usando Bootstrap
        </h3>
      </header>

      {/* MAIN */}
      <div className="row flex-grow-1 m-0">

        {/* SIDEBAR */}
        <aside
          className="
            col-2
            bg-dark
            text-white
            d-flex
            align-items-center
            justify-content-center
          "
        >
          <h4>SIDEBAR</h4>
        </aside>

        {/* CONTENT */}
        <main
          className="
            col-10
            bg-light
            d-flex
            align-items-center
            justify-content-center
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
        "
        style={{ height: "50px" }}
      >
        FOOTER / STATUS BAR
      </footer>

    </div>

  );
}

export default App;