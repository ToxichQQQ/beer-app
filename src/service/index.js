export const getAllBeers = async (activePage) => {
  try {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?page=${activePage}&per_page=12`
    );
    if (!response.ok) throw new Error();
    return await response.json();
  } catch (err) {
    return [];
  }
};

export const getBeer = async (id) => {
  try {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
    if (!response.ok) throw new Error();
    return await response.json();
  } catch (err) {
    return [];
  }
};
