function App() {
  return (

    <div className="app">

      {/* HEADER */}
      <header className="header">
        HEADER / TOPBAR
      </header>

      {/* MAIN AREA */}
      <div className="mainArea">

        {/* SIDEBAR */}
        <aside className="sidebar">
          SIDEBAR
        </aside>

        {/* CONTENT */}
        <main className="content">
          CONTENIDO
        </main>

      </div>

      {/* FOOTER */}
      <footer className="footer">
        FOOTER / STATUS BAR
      </footer>

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
          }

          .app{
            display:flex;
            flex-direction:column;
            height:100vh;
          }

          /* HEADER */

          .header{
            height:70px;
            background:#2563eb;
            color:white;

            display:flex;
            align-items:center;
            justify-content:center;

            font-size:24px;
            font-weight:bold;
          }

          /* MAIN */

          .mainArea{
            flex:1;
            display:flex;
          }

          /* SIDEBAR */

          .sidebar{
            width:250px;
            background:#1e293b;
            color:white;

            display:flex;
            align-items:center;
            justify-content:center;

            font-size:22px;
            font-weight:bold;
          }

          /* CONTENT */

          .content{
            flex:1;

            background:#f1f5f9;

            display:flex;
            align-items:center;
            justify-content:center;

            font-size:28px;
            font-weight:bold;

            color:#334155;
          }

          /* FOOTER */

          .footer{
            height:50px;

            background:#0f172a;

            color:white;

            display:flex;
            align-items:center;
            justify-content:center;

            font-size:18px;
          }
        `}
      </style>

    </div>

  );
}

export default App;