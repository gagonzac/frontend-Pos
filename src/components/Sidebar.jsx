import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside
      className="bg-dark text-white d-flex flex-column flex-shrink-0 p-3"
      style={{ width: "260px", minWidth: "260px" }}
    >
      <div className="mb-4">
        <h4 className="m-0 fw-bold" style={{ fontSize: "28px" }}>
          SIDEBAR
        </h4>
      </div>

      <nav className="d-flex flex-column gap-2">

        <SidebarItem icon="🏠" label="Dashboard" />

        <SidebarItem icon="🛒" label="Punto de Venta">
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Nueva Venta
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Cotizaciones
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Devoluciones
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Historial Caja
          </button>
        </SidebarItem>

        <SidebarItem icon="📦" label="Productos">
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Inventario
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Categorías
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Stock Bajo
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Precios
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Código Barras
          </button>
        </SidebarItem>

        <SidebarItem icon="👥" label="Clientes">
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Lista Clientes
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Crédito
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Historial Compras
          </button>
        </SidebarItem>

        <SidebarItem icon="🚚" label="Proveedores">
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Compras
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Facturas
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Pedidos
          </button>
        </SidebarItem>

        <SidebarItem icon="💰" label="Caja">
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Apertura Caja
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Cierre Caja
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Gastos
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Movimientos
          </button>
        </SidebarItem>

        <SidebarItem icon="📈" label="Reportes">
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Ventas
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Ganancias
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Productos Vendidos
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Inventario
          </button>
        </SidebarItem>

        <SidebarItem icon="👨‍💼" label="Usuarios">
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Cajeros
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Roles
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Permisos
          </button>
        </SidebarItem>

        <SidebarItem icon="⚙️" label="Configuración">
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Empresa
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Impresora
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Monedas
          </button>
          <button className="btn btn-sm btn-dark text-start border border-secondary">
            Respaldos
          </button>
        </SidebarItem>

      </nav>
    </aside>
  );
}

export default Sidebar;