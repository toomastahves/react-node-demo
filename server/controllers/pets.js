import Pet from '../models/Pet';

export const getPets = (next) => {
  Pet.find({}, (err, result) => {
    if(!err) {
      return next(result);
    }
    return next({ error: 'Database problem.' });
  });
};

export const createPet = (pet, next) => {
  const p = new Pet();
  p.name = pet.name;
  p.save((err, result) => {
    if(!err) {
      return next(result);
    }
    return next({ error: 'Database problem.' });
  });
};
