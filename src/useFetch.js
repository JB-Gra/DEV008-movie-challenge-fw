import { useState, useEffect } from "react";

export function useFetch(url) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => setMovie(movie.Search))
      .finally(() => setLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { movie, loading };
}