import { useState } from "react";

function App() {
  const [pagina, setPagina] = useState("dashboard");

  const productos = [
    {
      id: 1,
      nombre: "Tomate Premium",
      precio: 1200,
      stock: 25,
    },
    {
      id: 2,
      nombre: "Papa Blanca",
      precio: 900,
      stock: 40,
    },
    {
      id: 3,
      nombre: "Cebolla Roja",
      precio: 1500,
      stock: 18,
    },
    {
      id: 4,
      nombre: "Lechuga Costina",
      precio: 800,
      stock: 12,
    },
  ];

  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="logoArea">

          <div className="logoBox">
            🛒
          </div>

          <div>
            <h2>FreshPOS</h2>
            <span>Premium Dashboard</span>
          </div>

        </div>

        <nav className="menu">

          <button
            className={`menuItem ${
              pagina === "dashboard"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setPagina("dashboard")
            }
          >
            📊 Dashboard
          </button>

          <button
            className={`menuItem ${
              pagina === "ventas"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setPagina("ventas")
            }
          >
            🧾 Ventas
          </button>

          <button className="menuItem">
            📦 Productos
          </button>

          <button className="menuItem">
            📈 Reportes
          </button>

          <button className="menuItem">
            ⚙️ Configuración
          </button>

        </nav>

      </aside>

      {/* MAIN */}
      <main className="mainContent">

        {/* TOPBAR */}
        <div className="topbar">

          <div>
            <h1>Dashboard</h1>

            <p>
              Bienvenido al sistema POS
              profesional
            </p>
          </div>

          <div className="topbarActions">

            <input
              type="text"
              placeholder="Buscar productos..."
              className="searchInput"
            />

            <button className="newSaleBtn">
              + Nueva Venta
            </button>

          </div>

        </div>

        {/* CARDS */}
        <div className="statsGrid">

          <div className="card">

            <div className="cardIcon blue">
              💰
            </div>

            <div>
              <span>Ventas Hoy</span>
              <h2>$245K</h2>
            </div>

          </div>

          <div className="card">

            <div className="cardIcon green">
              📦
            </div>

            <div>
              <span>Productos</span>
              <h2>125</h2>
            </div>

          </div>

          <div className="card">

            <div className="cardIcon orange">
              👥
            </div>

            <div>
              <span>Clientes</span>
              <h2>52</h2>
            </div>

          </div>

          <div className="card">

            <div className="cardIcon red">
              ⚠️
            </div>

            <div>
              <span>Stock Bajo</span>
              <h2>8</h2>
            </div>

          </div>

        </div>

        {/* TABLA */}
        <div className="tableCard">

          <div className="tableHeader">

            <div>
              <h3>Inventario</h3>

              <p>
                Productos disponibles
              </p>
            </div>

            <button className="exportBtn">
              Exportar
            </button>

          </div>

          <table>

            <thead>

              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Estado</th>
                <th></th>
              </tr>

            </thead>

            <tbody>

              {productos.map((producto) => (

                <tr key={producto.id}>

                  <td>{producto.id}</td>

                  <td className="productName">
                    {producto.nombre}
                  </td>

                  <td>
                    ${producto.precio}
                  </td>

                  <td>
                    {producto.stock}
                  </td>

                  <td>
                    <span className="status">
                      Disponible
                    </span>
                  </td>

                  <td>

                    <button
                      className="sellBtn"
                      onClick={() =>
                        alert(
                          `Venta realizada: ${producto.nombre}`
                        )
                      }
                    >
                      Vender
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </main>

      {/* CSS */}
      <style>
        {`
          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }

          body{
            font-family:Arial, sans-serif;
            background:#f4f7fb;
          }

          .app{
            display:flex;
            min-height:100vh;
          }

          /* SIDEBAR */

          .sidebar{
            width:260px;
            background:rgba(255,255,255,0.9);
            backdrop-filter:blur(12px);
            border-right:1px solid #e5e7eb;
            padding:30px 20px;
          }

          .logoArea{
            display:flex;
            align-items:center;
            gap:15px;
            margin-bottom:40px;
          }

          .logoBox{
            width:55px;
            height:55px;
            border-radius:18px;
            background:linear-gradient(
              135deg,
              #2563eb,
              #7c3aed
            );
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:24px;
            color:white;
          }

          .logoArea h2{
            font-size:22px;
            color:#111827;
          }

          .logoArea span{
            font-size:13px;
            color:#6b7280;
          }

          .menu{
            display:flex;
            flex-direction:column;
            gap:12px;
          }

          .menuItem{
            border:none;
            background:transparent;
            padding:15px 18px;
            border-radius:16px;
            text-align:left;
            cursor:pointer;
            font-size:15px;
            color:#374151;
            transition:0.25s;
          }

          .menuItem:hover{
            background:#eef2ff;
            color:#2563eb;
          }

          .menuItem.active{
            background:linear-gradient(
              135deg,
              #2563eb,
              #4f46e5
            );

            color:white;

            box-shadow:
              0 10px 25px
              rgba(37,99,235,0.25);
          }

          /* MAIN */

          .mainContent{
            flex:1;
            padding:35px;
          }

          .topbar{
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:35px;
          }

          .topbar h1{
            font-size:34px;
            color:#111827;
            margin-bottom:8px;
          }

          .topbar p{
            color:#6b7280;
          }

          .topbarActions{
            display:flex;
            gap:15px;
            align-items:center;
          }

          .searchInput{
            border:none;
            background:white;
            padding:14px 18px;
            width:260px;
            border-radius:16px;
            outline:none;

            box-shadow:
              0 4px 12px
              rgba(0,0,0,0.05);
          }

          .newSaleBtn{
            border:none;
            background:linear-gradient(
              135deg,
              #2563eb,
              #4f46e5
            );

            color:white;

            padding:14px 20px;

            border-radius:16px;

            cursor:pointer;

            font-weight:bold;

            box-shadow:
              0 10px 25px
              rgba(37,99,235,0.25);

            transition:0.25s;
          }

          .newSaleBtn:hover{
            transform:translateY(-2px);
          }

          /* CARDS */

          .statsGrid{
            display:grid;

            grid-template-columns:
              repeat(
                auto-fit,
                minmax(220px,1fr)
              );

            gap:22px;

            margin-bottom:35px;
          }

          .card{
            background:white;

            border-radius:26px;

            padding:24px;

            display:flex;

            align-items:center;

            gap:18px;

            box-shadow:
              0 10px 30px
              rgba(0,0,0,0.04);
          }

          .card span{
            color:#6b7280;
            font-size:14px;
          }

          .card h2{
            margin-top:6px;
            font-size:30px;
            color:#111827;
          }

          .cardIcon{
            width:60px;
            height:60px;
            border-radius:18px;
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-size:24px;
          }

          .blue{
            background:linear-gradient(
              135deg,
              #3b82f6,
              #2563eb
            );
          }

          .green{
            background:linear-gradient(
              135deg,
              #10b981,
              #059669
            );
          }

          .orange{
            background:linear-gradient(
              135deg,
              #f59e0b,
              #d97706
            );
          }

          .red{
            background:linear-gradient(
              135deg,
              #ef4444,
              #dc2626
            );
          }

          /* TABLE */

          .tableCard{
            background:white;

            border-radius:28px;

            padding:28px;

            box-shadow:
              0 10px 30px
              rgba(0,0,0,0.04);
          }

          .tableHeader{
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:25px;
          }

          .tableHeader h3{
            color:#111827;
            margin-bottom:5px;
          }

          .tableHeader p{
            color:#6b7280;
            font-size:14px;
          }

          .exportBtn{
            border:none;
            background:#eef2ff;
            color:#2563eb;

            padding:12px 18px;

            border-radius:14px;

            cursor:pointer;

            font-weight:bold;
          }

          table{
            width:100%;
            border-collapse:collapse;
          }

          thead th{
            text-align:left;

            padding:14px;

            color:#6b7280;

            font-size:14px;

            font-weight:bold;
          }

          tbody td{
            padding:18px 14px;

            border-top:
              1px solid #f1f5f9;
          }

          tbody tr:hover{
            background:#fafbff;
          }

          .productName{
            font-weight:bold;
            color:#111827;
          }

          .status{
            background:#dcfce7;
            color:#166534;

            padding:8px 12px;

            border-radius:999px;

            font-size:13px;

            font-weight:bold;
          }

          .sellBtn{
            border:none;

            background:#111827;

            color:white;

            padding:10px 16px;

            border-radius:14px;

            cursor:pointer;

            transition:0.25s;
          }

          .sellBtn:hover{
            background:#2563eb;
          }
        `}
      </style>

    </div>
  );
}

export default App;