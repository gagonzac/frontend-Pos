import { useState } from "react";

function SidebarItem({ icon, label, children }) {
  const [open, setOpen] = useState(false);

  const hasChildren = !!children;

  return (
    <div className="d-flex flex-column">

      {/* BOTÓN PRINCIPAL */}
      <button
        className="btn btn-dark text-start border border-secondary d-flex justify-content-between align-items-center"
        onClick={() => hasChildren && setOpen(!open)}
        style={{ cursor: hasChildren ? "pointer" : "default" }}
      >
        <span>
          {icon} {label}
        </span>

        {/* indicador */}
        {hasChildren && (
          <span>{open ? "▾" : "▸"}</span>
        )}
      </button>

      {/* SUBMENÚ */}
      {hasChildren && open && (
        <div className="d-flex flex-column ms-3 mt-1 gap-1">
          {children}
        </div>
      )}

    </div>
  );
}

export default SidebarItem;