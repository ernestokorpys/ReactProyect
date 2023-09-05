import {Link, useParams, Outlet } from "react-router-dom";

const HeroDetails = ()=> {
    const { heroname } = useParams();
    return <h2> Es muy fuerte {heroname}</h2>;
  };
  
  const Hero = () => {
    const { heroname } = useParams();
    return (
      <div>
        <h1>Hola soy el héroe {heroname}</h1>
        <Link to='details'>Detalles del Héroe</Link>
        <Outlet />
      </div>
    );
  };

  export { Hero, HeroDetails };
