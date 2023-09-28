import { useState, useEffect } from "react";

export function useFetch(url) {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => setMovie(movie.Search))
      .catch((error) => setError('Error al hacer fetch a movie:', error))
      .finally(() => setLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { movie, loading, error};
}