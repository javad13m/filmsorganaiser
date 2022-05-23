export const fetchCartMoviess = async (movieName) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${movieName}&apikey=f695e887`
  );
  const data = await response.json();

  return data;
};
