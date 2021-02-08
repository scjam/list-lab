export const findVillagers = () => {
  return fetch('https://ac-vill.herokuapp.com/villagers')
    .then((res) => res.json())
    .then((villagers) => 
      villagers.map(({ id, name, image, quote, birthday }) => ({
        id,
        name,
        image,
        birthday,
        text: quote
      }))
    );
};

export const findVillagerById = (id) => {
  return fetch(`https://ac-vill.herokuapp.com/villagers/${id}`)
    .then((res) => res.jason())
    .then((villagers) =>
      villagers.map(({ id, name, image, quote, birthday }) => ({
        id,
        name,
        image,
        birthday,
        text: quote
      }))
    );
};
