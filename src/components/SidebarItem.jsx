function SidebarItem({ icon, label, children }) {
  return (
    <div className="d-flex flex-column">

      {/* ITEM PRINCIPAL */}
      <button className="btn btn-dark text-start border border-secondary">
        <span>{icon}</span> {label}
      </button>

      {/* SUBMENU (si existe) */}
      {children && (
        <div className="d-flex flex-column ms-3 mt-1 gap-1">
          {children}
        </div>
      )}

    </div>
  );
}

export default SidebarItem;