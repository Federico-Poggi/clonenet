import NavbarPrincipal from "./components/NavbarComp.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Film from "./components/film.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavbarPrincipal />
      <main className="main">
        <Film />
      </main>
    </div>
  );
}

export default App;
