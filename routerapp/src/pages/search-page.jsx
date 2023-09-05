import { Link } from "react-router-dom";

const SearchPage = () => {
  const superheros = [
    'batman',
    'flash',
    'superman'
  ];
  return (
    <div>
      <h1>SearchPage de héroes</h1>
      <ul>
        {superheros.map(superhero => (
          <li key={superhero}>
            <Link to={`/superhero/${superhero}`}>{superhero}</Link>{/* Genera una lista con el contenido de una tabla y su respectivo link a lapagina */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
