import { useState } from "react";

function App() {
  const [pagina, setPagina] = useState("dashboard");

  const productos = [
    { id: 1, nombre: "Tomate Premium", precio: 1200, stock: 25 },
    { id: 2, nombre: "Papa Blanca", precio: 900, stock: 40 },
    { id: 3, nombre: "Cebolla Roja", precio: 1500, stock: 18 },
    { id: 4, nombre: "Lechuga Costina", precio: 800, stock: 12 },
  ];

  return (
    <div className="app-container">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="logo-area">
          <div className="logo-circle">
            <i className="bi bi-shop"></i>
          </div>

          <div>
            <h2>FreshPOS</h2>
            <span>Premium Dashboard</span>
          </div>
        </div>

        <nav className="menu">

          <button
            className={`menu-item ${
              pagina === "dashboard" ? "active" : ""
            }`}
            onClick={() => setPagina("dashboard")}
          >
            <i className="bi bi-grid-1x2-fill"></i>
            Dashboard
          </button>

          <button
            className={`menu-item ${
              pagina === "ventas" ? "active" : ""
            }`}
            onClick={() => setPagina("ventas")}
          >
            <i className="bi bi-cart-fill"></i>
            Ventas
          </button>

          <button className="menu-item">
            <i className="bi bi-box-seam"></i>
            Productos
          </button>

          <button className="menu-item">
            <i className="bi bi-bar-chart"></i>
            Reportes
          </button>

          <button className="menu-item">
            <i className="bi bi-gear-fill"></i>
            Configuración
          </button>

        </nav>

      </aside>

      {/* MAIN */}
      <main className="main-content">

        {/* TOPBAR */}
        <div className="topbar">

          <div>
            <h1>Dashboard</h1>
            <p>
              Bienvenido al sistema profesional POS
            </p>
          </div>

          <div className="top-actions">

            <input
              type="text"
              placeholder="Buscar productos..."
              className="search-input"
            />

            <button className="new-sale-btn">
              <i className="bi bi-plus-lg"></i>
              Nueva Venta
            </button>

          </div>

        </div>

        {/* CARDS */}
        <div className="stats-grid">

          <div className="stat-card">

            <div className="stat-icon blue">
              <i className="bi bi-cash-stack"></i>
            </div>

            <div>
              <span>Ventas Hoy</span>
              <h2>$245K</h2>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon green">
              <i className="bi bi-box-seam"></i>
            </div>

            <div>
              <span>Productos</span>
              <h2>125</h2>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon orange">
              <i className="bi bi-people-fill"></i>
            </div>

            <div>
              <span>Clientes</span>
              <h2>52</h2>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon red">
              <i className="bi bi-exclamation-circle-fill"></i>
            </div>

            <div>
              <span>Stock Bajo</span>
              <h2>8</h2>
            </div>

          </div>

        </div>

        {/* TABLE */}
        <div className="table-card">

          <div className="table-header">
            <div>
              <h3>Inventario</h3>
              <p>Productos disponibles en tienda</p>
            </div>

            <button className="export-btn">
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

                  <td className="product-name">
                    {producto.nombre}
                  </td>

                  <td>${producto.precio}</td>

                  <td>{producto.stock}</td>

                  <td>
                    <span className="status">
                      Disponible
                    </span>
                  </td>

                  <td>
                    <button className="sell-btn">
                      Vender
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </main>

      {/* ESTILOS */}
      <style>
        {`
          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }

          body{
            font-family:Inter,sans-serif;
            background:#f5f7fb;
          }

          .app-container{
            display:flex;
            min-height:100vh;
            background:#f5f7fb;
          }

          /* SIDEBAR */

          .sidebar{
            width:260px;
            background:#ffffffcc;
            backdrop-filter:blur(12px);
            border-right:1px solid #e5e7eb;
            padding:30px 20px;
          }

          .logo-area{
            display:flex;
            align-items:center;
            gap:15px;
            margin-bottom:40px;
          }

          .logo-circle{
            width:50px;
            height:50px;
            border-radius:16px;
            background:linear-gradient(135deg,#2563eb,#7c3aed);
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-size:22px;
          }

          .logo-area h2{
            font-size:20px;
            font-weight:700;
            color:#111827;
          }

          .logo-area span{
            font-size:13px;
            color:#6b7280;
          }

          .menu{
            display:flex;
            flex-direction:column;
            gap:10px;
          }

          .menu-item{
            border:none;
            background:transparent;
            padding:14px 16px;
            border-radius:14px;
            text-align:left;
            display:flex;
            align-items:center;
            gap:12px;
            cursor:pointer;
            color:#374151;
            font-size:15px;
            transition:0.25s;
          }

          .menu-item:hover{
            background:#eef2ff;
            color:#2563eb;
          }

          .menu-item.active{
            background:linear-gradient(135deg,#2563eb,#4f46e5);
            color:white;
            box-shadow:0 10px 25px rgba(37,99,235,0.25);
          }

          /* MAIN */

          .main-content{
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
            font-size:32px;
            color:#111827;
            margin-bottom:6px;
          }

          .topbar p{
            color:#6b7280;
          }

          .top-actions{
            display:flex;
            align-items:center;
            gap:15px;
          }

          .search-input{
            border:none;
            background:white;
            padding:14px 18px;
            width:260px;
            border-radius:14px;
            outline:none;
            box-shadow:0 4px 12px rgba(0,0,0,0.04);
          }

          .new-sale-btn{
            border:none;
            background:linear-gradient(135deg,#2563eb,#4f46e5);
            color:white;
            padding:14px 20px;
            border-radius:14px;
            cursor:pointer;
            display:flex;
            align-items:center;
            gap:10px;
            font-weight:600;
            box-shadow:0 10px 25px rgba(37,99,235,0.25);
          }

          /* CARDS */

          .stats-grid{
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
            gap:22px;
            margin-bottom:35px;
          }

          .stat-card{
            background:white;
            border-radius:24px;
            padding:24px;
            display:flex;
            align-items:center;
            gap:18px;
            box-shadow:0 10px 30px rgba(0,0,0,0.04);
          }

          .stat-card span{
            color:#6b7280;
            font-size:14px;
          }

          .stat-card h2{
            margin-top:6px;
            font-size:28px;
            color:#111827;
          }

          .stat-icon{
            width:58px;
            height:58px;
            border-radius:18px;
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-size:22px;
          }

          .blue{
            background:linear-gradient(135deg,#3b82f6,#2563eb);
          }

          .green{
            background:linear-gradient(135deg,#10b981,#059669);
          }

          .orange{
            background:linear-gradient(135deg,#f59e0b,#d97706);
          }

          .red{
            background:linear-gradient(135deg,#ef4444,#dc2626);
          }

          /* TABLE */

          .table-card{
            background:white;
            border-radius:26px;
            padding:28px;
            box-shadow:0 10px 30px rgba(0,0,0,0.04);
          }

          .table-header{
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:25px;
          }

          .table-header h3{
            color:#111827;
            margin-bottom:5px;
          }

          .table-header p{
            color:#6b7280;
            font-size:14px;
          }

          .export-btn{
            border:none;
            background:#eef2ff;
            color:#2563eb;
            padding:12px 18px;
            border-radius:12px;
            cursor:pointer;
            font-weight:600;
          }

          table{
            width:100%;
            border-collapse:collapse;
          }

          thead th{
            text-align:left;
            padding:14px;
            color:#6b7280;
            font-weight:600;
            font-size:14px;
          }

          tbody td{
            padding:18px 14px;
            border-top:1px solid #f1f5f9;
          }

          tbody tr:hover{
            background:#fafbff;
          }

          .product-name{
            font-weight:600;
            color:#111827;
          }

          .status{
            background:#dcfce7;
            color:#166534;
            padding:8px 12px;
            border-radius:999px;
            font-size:13px;
            font-weight:600;
          }

          .sell-btn{
            border:none;
            background:#111827;
            color:white;
            padding:10px 16px;
            border-radius:12px;
            cursor:pointer;
            transition:0.25s;
          }

          .sell-btn:hover{
            background:#2563eb;
          }
        `}
      </style>

    </div>
  );
}

export default App;