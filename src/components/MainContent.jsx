import { useState } from "react";

function MainContent() {
  // catálogo simulado (solo fuente de búsqueda)
  const products = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Producto ${i + 1}`,
    price: Number((Math.random() * 10000).toFixed(0)),
    stock: Math.floor(Math.random() * 50),
  }));

  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [qty, setQty] = useState(1);

  // carrito real (antes era tabla izquierda)
  const [cart, setCart] = useState([]);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const subtotal =
    selectedProduct ? selectedProduct.price * qty : 0;

  // seleccionar producto
  const handleSelect = (product) => {
    setSelectedProduct(product);
    setQty(1);
  };

  // agregar al carrito
  const handleAddToCart = () => {
    if (!selectedProduct) return;

    setCart((prev) => [
      ...prev,
      {
        ...selectedProduct,
        qty,
        subtotal: selectedProduct.price * qty,
      },
    ]);

    setSelectedProduct(null);
    setQty(1);
  };

  // eliminar del carrito
  const handleRemove = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <main className="flex-grow-1 bg-light d-flex overflow-hidden">

      {/* LEFT */}
      <div
        className="d-flex flex-column border-end bg-white"
        style={{ width: "60%", minWidth: "300px" }}
      >

        {/* TOP LEFT - CART */}
        <div style={{ flex: 0.65 }} className="p-2 border-bottom overflow-auto">

          <div className="card h-100 shadow-sm">

            <div className="card-header bg-primary text-white">
              Lista de Productos (Carrito)
            </div>

            <div className="card-body p-0 overflow-auto">

              {cart.length === 0 ? (
                <div className="p-3 text-muted">
                  Carrito vacío
                </div>
              ) : (
                <table className="table table-sm table-hover mb-0 align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>Producto</th>
                      <th>Precio</th>
                      <th>Qty/Kg</th>
                      <th>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <td>{item.qty}</td>
                        <td>${item.subtotal}</td>

                        <td className="text-end">
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleRemove(index)}
                          >
                            ✖
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

            </div>

          </div>

        </div>

        {/* BOTTOM LEFT */}
        <div style={{ flex: 0.35 }} className="p-3 overflow-auto">
          Contenido izquierdo - inferior
        </div>

      </div>

      {/* RIGHT */}
      <div className="d-flex flex-column flex-grow-1 bg-light">

        {/* RIGHT TOP */}
        <div style={{ flex: 0.65 }} className="d-flex flex-column border-bottom">

          {/* PANEL 1 - SELECTED PRODUCT */}
          <div className="flex-grow-1 p-2 border-bottom overflow-auto bg-white">

            {selectedProduct ? (
              <table className="table table-sm align-middle mb-0">
                <thead className="table-dark">
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Qty/Kg</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{selectedProduct.name}</td>
                    <td>${selectedProduct.price}</td>

                    <td style={{ width: "120px" }}>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        value={qty}
                        min={1}
                        onChange={(e) => setQty(Number(e.target.value))}
                      />
                    </td>

                    <td>${subtotal}</td>

                    <td className="text-end">
                      <button
                        className="btn btn-success btn-sm me-1"
                        onClick={handleAddToCart}
                      >
                        ✔
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => setSelectedProduct(null)}
                      >
                        ✖
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="text-muted">
                Selecciona un producto desde la búsqueda
              </div>
            )}

          </div>

          {/* PANEL 2 */}
          <div className="flex-grow-1 p-3 overflow-auto bg-light">
            Contenido derecho - superior (Panel 2)
          </div>

        </div>

        {/* RIGHT BOTTOM - SEARCH */}
        <div style={{ flex: 0.35 }} className="p-2 overflow-auto">

          <div className="card h-100 shadow-sm d-flex flex-column">

            {/* SEARCH */}
            <div className="card-header bg-dark text-white">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar producto..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* TABLE */}
            <div className="card-body p-0 overflow-auto">

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
                  {filteredProducts.map((p) => (
                    <tr
                      key={p.id}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSelect(p)}
                    >
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

      </div>

    </main>
  );
}

export default MainContent;