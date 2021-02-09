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

export const findVillagerByName = (_id) => {
  return fetch(`https://ac-vill.herokuapp.com/villagers/${_id}`)
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
