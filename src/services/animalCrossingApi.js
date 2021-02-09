export const findVillagers = () => {
  return fetch('https://ac-vill.herokuapp.com/villagers')
    .then((res) => res.json())
    .then((villagers) => 
      villagers.map(({ name, image, quote, birthday }) => ({
        name,
        image,
        birthday,
        quote
      }))
    );
};

export const findVillagerByName = (name) => {
  return fetch(`https://ac-vill.herokuapp.com/villagers/${name}`)
    .then((res) => res.jason())
    .then((villagers) =>
      villagers.map(({ name, image, quote, birthday }) => ({
        name,
        image,
        birthday,
        quote
      }))
    );
};
