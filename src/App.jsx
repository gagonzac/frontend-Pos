import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid vh-100 d-flex flex-column p-0">

      <Header />

      <div className="d-flex flex-grow-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>

      <Footer />

    </div>
  );
}

export default App;