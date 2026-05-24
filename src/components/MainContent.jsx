import { useState } from "react";

function MainContent() {

  // PRODUCTOS
  const products = [
    {
      id: 1,
      name: "Manzanas",
      price: 1200,
      stock: 20,
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=400",
    },
    {
      id: 2,
      name: "Plátanos",
      price: 950,
      stock: 35,
      image:
        "https://images.unsplash.com/photo-1574226516831-e1dff420e37f?q=80&w=400",
    },
    {
      id: 3,
      name: "Naranjas",
      price: 1400,
      stock: 18,
      image:
        "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=400",
    },
    {
      id: 4,
      name: "Tomates",
      price: 1100,
      stock: 42,
      image:
        "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=400",
    },
    {
      id: 5,
      name: "Lechuga",
      price: 800,
      stock: 25,
      image:
        "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?q=80&w=400",
    },
    {
      id: 6,
      name: "Papas",
      price: 700,
      stock: 60,
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=400",
    },
    {
      id: 7,
      name: "Cebollas",
      price: 650,
      stock: 33,
      image:
        "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=400",
    },
    {
      id: 8,
      name: "Zanahorias",
      price: 990,
      stock: 27,
      image:
        "https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=400",
    },
  ];

  // STATES
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [qty, setQty] = useState(1);

  // CARRITO
  const [cart, setCart] = useState([]);

  // HISTORIAL VISUAL
  const [selectedHistory, setSelectedHistory] = useState([]);

  // FILTRO
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // SUBTOTAL
  const subtotal =
    selectedProduct ? selectedProduct.price * qty : 0;

  // SELECCIONAR PRODUCTO
  const handleSelect = (product) => {

    setSelectedProduct(product);
    setQty(1);

    // guardar historial visual
    setSelectedHistory((prev) => {

      // evitar duplicados consecutivos
      const exists = prev.find((p) => p.id === product.id);

      if (exists) return prev;

      return [...prev, product];
    });
  };

  // AGREGAR AL CARRITO
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

  // ELIMINAR DEL CARRITO
  const handleRemove = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (

    <main
      className="flex-grow-1 bg-light d-flex overflow-hidden"
      style={{
        fontFamily: "Segoe UI, sans-serif",
        fontSize: "12px",
      }}
    >

      {/* LEFT */}
      <div
        className="d-flex flex-column border-end bg-white"
        style={{
          width: "60%",
          minWidth: "300px",
        }}
      >

        {/* TOP LEFT */}
        <div
          style={{ flex: 0.65 }}
          className="p-2 border-bottom overflow-auto"
        >

          <div className="card h-100 shadow-sm border-secondary">

            <div
              className="card-header bg-primary text-white py-2"
              style={{
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Lista de Productos (Carrito)
            </div>

            <div className="card-body p-2 overflow-auto">

              {cart.length === 0 ? (

                <div className="text-muted">
                  Carrito vacío
                </div>

              ) : (

                <table
                  className="table table-sm table-hover align-middle mb-0"
                  style={{
                    fontSize: "11px",
                    border: "1px solid #dee2e6",
                  }}
                >

                  <thead className="table-dark">
                    <tr>
                      <th className="py-1">Producto</th>
                      <th className="py-1">Precio</th>
                      <th className="py-1">Qty/Kg</th>
                      <th className="py-1">Subtotal</th>
                      <th className="py-1"></th>
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
                            className="btn btn-danger btn-sm py-0 px-2"
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
        <div
          style={{ flex: 0.35 }}
          className="p-2 overflow-auto"
        >

          <div className="card h-100 shadow-sm border-secondary">

            <div
              className="card-header bg-secondary text-white py-2"
              style={{
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Resumen
            </div>

            <div className="card-body">

              <div className="d-flex justify-content-between mb-2">
                <span>Total Productos:</span>
                <strong>{cart.length}</strong>
              </div>

              <div className="d-flex justify-content-between">
                <span>Total:</span>

                <strong>
                  $
                  {cart
                    .reduce((acc, item) => acc + item.subtotal, 0)
                    .toLocaleString()}
                </strong>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="d-flex flex-column flex-grow-1 bg-light">

        {/* RIGHT TOP */}
        <div
          style={{ flex: 0.65 }}
          className="d-flex flex-column border-bottom"
        >

          {/* PANEL 1 */}
          <div
            className="flex-grow-1 p-2 border-bottom overflow-auto bg-white"
          >

            <div className="card h-100 shadow-sm border-secondary">

              <div
                className="card-header bg-success text-white py-2"
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                Producto Seleccionado
              </div>

              <div className="card-body p-2 overflow-auto">

                {selectedProduct ? (

                  <table
                    className="table table-sm align-middle mb-0"
                    style={{
                      fontSize: "11px",
                      border: "1px solid #dee2e6",
                    }}
                  >

                    <thead className="table-dark">
                      <tr>
                        <th className="py-1">Producto</th>
                        <th className="py-1">Precio</th>
                        <th className="py-1">Qty/Kg</th>
                        <th className="py-1">Subtotal</th>
                        <th className="py-1"></th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr>

                        <td>{selectedProduct.name}</td>

                        <td>
                          ${selectedProduct.price}
                        </td>

                        <td style={{ width: "90px" }}>

                          <input
                            type="number"
                            className="form-control form-control-sm"
                            value={qty}
                            min={1}
                            onChange={(e) =>
                              setQty(Number(e.target.value))
                            }
                            style={{
                              fontSize: "11px",
                              padding: "2px 4px",
                            }}
                          />

                        </td>

                        <td>
                          ${subtotal.toLocaleString()}
                        </td>

                        <td className="text-end">

                          <button
                            className="btn btn-success btn-sm py-0 px-2 me-1"
                            onClick={handleAddToCart}
                          >
                            ✔
                          </button>

                          <button
                            className="btn btn-danger btn-sm py-0 px-2"
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
                    Selecciona un producto
                  </div>

                )}

              </div>

            </div>

          </div>

          {/* PANEL 2 - HISTORIAL VISUAL */}
          <div
            className="p-2 overflow-auto bg-light"
            style={{
              height: "220px",
              minHeight: "220px",
              maxHeight: "220px",
            }}
          >

            <div className="card h-100 shadow-sm border-secondary d-flex flex-column">

              <div
                className="card-header bg-info text-white py-2"
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                Panel Secundario
              </div>

              <div
                className="card-body overflow-auto"
              >

                <div className="row g-2">

                  {selectedHistory.map((product) => (

                    <div
                      key={product.id}
                      className="col-6"
                    >

                      <div
                        className="card border h-100"
                        style={{
                          fontSize: "10px",
                        }}
                      >

                        <img
                          src={product.image}
                          alt={product.name}
                          className="card-img-top"
                          style={{
                            height: "70px",
                            objectFit: "cover",
                          }}
                        />

                        <div className="card-body p-2">

                          <div
                            className="fw-bold"
                            style={{
                              fontSize: "10px",
                            }}
                          >
                            {product.name}
                          </div>

                          <div className="text-success">
                            ${product.price.toLocaleString()}
                          </div>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT BOTTOM */}
        <div
          style={{ flex: 0.35 }}
          className="p-2 overflow-auto"
        >

          <div className="card h-100 shadow-sm border-secondary d-flex flex-column">

            {/* SEARCH */}
            <div className="card-header bg-dark py-2">

              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Buscar producto..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  fontSize: "11px",
                }}
              />

            </div>

            {/* TABLE */}
            <div className="card-body p-2 overflow-auto">

              <table
                className="table table-sm table-hover align-middle mb-0"
                style={{
                  fontSize: "11px",
                  border: "1px solid #dee2e6",
                }}
              >

                <thead className="table-dark">

                  <tr>
                    <th className="py-1">ID</th>
                    <th className="py-1">Producto</th>
                    <th className="py-1">Precio</th>
                    <th className="py-1">Stock</th>
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