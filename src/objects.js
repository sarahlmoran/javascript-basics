const createPerson = (name, age) => {
return {
name: name,
age: age,
}
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]){
    return true;
  }
  return false;

};

const isOver65 = person => {
  if (person.age>65){
    return true;
  }
  return false;
};

const getAges = people => {
  return people.map(people => people.age);
};

const findByName = (name, people) => {
  return people.find(people => people['name'] === name);
};

const findHondas = cars => {
return cars.filter(cars => cars.manufacturer === 'Honda');
};

const averageAge = people => {
  people.reduce((acc,val)=> {
    return acc + (val.age/length);
  }, 0);
};

//return people.reduce((total,item)=> total + item);

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
