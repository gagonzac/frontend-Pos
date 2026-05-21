function MainContent() {
  const products = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Producto ${i + 1}`,
    price: (Math.random() * 10000).toFixed(0),
    stock: Math.floor(Math.random() * 50),
  }));

  return (
    <main className="flex-grow-1 bg-light d-flex overflow-hidden">

      {/* LEFT CONTAINER */}
      <div
        className="d-flex flex-column border-end bg-white"
        style={{
          width: "60%",
          minWidth: "300px",
        }}
      >

        {/* TOP LEFT - TABLE */}
        <div style={{ flex: 0.65 }} className="p-2 border-bottom overflow-auto">

          <div className="card h-100 shadow-sm">

            <div className="card-header bg-primary text-white">
              Lista de Productos
            </div>

            <div className="card-body p-0 overflow-auto" style={{ maxHeight: "100%" }}>

              <table className="table table-sm table-hover mb-0">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Stock</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((p) => (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.name}</td>
                      <td>${p.price}</td>
                      <td>{p.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>

          </div>

        </div>

        {/* BOTTOM LEFT */}
        <div style={{ flex: 0.35 }} className="p-3 overflow-auto">
          Contenido izquierdo - inferior
        </div>

      </div>

      {/* RIGHT CONTAINER */}
      <div className="d-flex flex-column flex-grow-1 bg-light">

        {/* TOP RIGHT */}
        <div style={{ flex: 0.65 }} className="p-3 border-bottom overflow-auto">
          Contenido derecho - superior
        </div>

        {/* BOTTOM RIGHT */}
        <div style={{ flex: 0.35 }} className="p-3 overflow-auto">
          Contenido derecho - inferior
        </div>

      </div>

    </main>
  );
}

export default MainContent;