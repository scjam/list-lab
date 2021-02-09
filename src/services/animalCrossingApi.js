export const findVillagers = () => {
  return fetch('https://ac-vill.herokuapp.com/villagers')
    .then((res) => res.json())
    .then((villagers) => 
      villagers.map(({ _id, name, image, quote, birthday }) => ({
        _id,
        name,
        image,
        birthday,
        quote
      }))
    );
};

export const findVillagerById = (id) => {
  return fetch(`https://ac-vill.herokuapp.com/villagers/${id}`)
    .then((res) => res.jason())
    .then((villagers) =>
      villagers.map(({ _id, name, image, quote, birthday }) => ({
        _id,
        name,
        image,
        birthday,
        quote
      }))
    );
};
