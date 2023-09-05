import "./App.css";
import { Link, Route, Routes, useParams } from "react-router-dom";
// componente: Funcion que renderiza algo Una vez renderiza devuelve un elemento
// Elemento: variable, respuesta a algo
import Layout from "./pages/layout";
import Home from "./pages/home";
import SearchPage from "./pages/search-page.jsx";
import { Hero, HeroDetails } from "./pages/hero-search.jsx";


function App() {
  return (
    <div className="App">
      <header>
      <h1>Myapp rout App</h1>
      <Layout />
      </header>
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/superhero/:heroname" element={<Hero />}>
          <Route path="details" element={<HeroDetails />} /> {/* Creacion de una ruta menor nivel */}
        </Route>
        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
    </div>
  );
}
export default App;
