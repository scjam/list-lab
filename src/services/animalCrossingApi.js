export const findVillagers = () => {
  return fetch('https://ac-vill.herokuapp.com/villagers')
    .then((res) => res.json());
};

export const findVillagerById = (_id) => {
  return fetch(`https://ac-vill.herokuapp.com/villagers/${_id}`)
    .then((res) => res.json())
    .then(json => ({
      _id: json._id,
      image: json.image,
      name: json.name,
      quote: json.quote,
      birthday: json.birthday
    }));
};
