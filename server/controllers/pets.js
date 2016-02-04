import Pet from '../models/Pet';

export const getPets = (req, res) => {
  Pet.find({}, (err, result) => {
    if(!err) {
      res.status(200).send(result);
    }
  });
};

export const getPet = (req, res) => {
  const _id = req.params._id;
  Pet.findById(_id, (err, pet) => {
    if (!err) {
      res.status(200).send(pet);
    }
  });
};

export const createPet = (req, res) => {
  const p = new Pet();
  p.name = req.body.name;
  p.save((err, result) => {
    if(!err) {
      res.status(201).send(result);
    }
  });
};

export const updatePet = (req, res) => {
  const _id = req.body._id;
  const name = req.body.name;
  Pet.findById(_id, (err, pet) => {
    if (!err) {
      pet.name = name;
      pet.save((err2) => {
        if (!err2) {
          res.status(202).send(pet);
        }
      });
    }
  });
};

export const deletePet = (req, res) => {
  const _id = req.body._id;
  Pet.findById({ _id }).remove((err) => {
    if(!err) {
      res.status(204).send();
    }
  });
};
