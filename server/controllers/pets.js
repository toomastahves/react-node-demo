import Pet from '../models/Pet';

export const getPets = (req, res) => {
  const promise = Pet.find({}).exec();

  promise.then((result) => {
    return res.status(200).send(result);
  });

  promise.catch((err) => {
    return res.status(503).send({ error: err.message });
  });
};

export const getPet = (req, res) => {
  const _id = req.params._id;

  if(!_id)
    return res.status(422).send({ error: 'Problem with params' });

  const promise = Pet.findOne({ _id }).exec();

  promise.then((result) => {
    return res.status(200).send(result);
  });

  promise.catch((err) => {
    return res.status(503).send({ error: err.message });
  });
};

export const createPet = (req, res) => {
  const name = req.body.name;
  const species = req.body.species;
  const homestatus = req.body.homestatus;
  const birthday = req.body.birthday;
  const created_by = req.body.created_by;

  if(!name || !species || !homestatus || !birthday || !created_by)
    return res.status(422).send({ error: 'Problem with params' });

  const p = new Pet(req.body);

  p.save((err, result) => {
    if(err)
      return res.status(503).send({ error: err.message });

    return res.status(201).send(result);
  });
};

export const updatePet = (req, res) => {
  const _id = req.body._id;
  const name = req.body.name;
  const species = req.body.species;
  const homestatus = req.body.homestatus;
  const birthday = req.body.birthday;
  const updated_by = req.body.updated_by;
  const lat = req.body.lat;
  const lng = req.body.lng;

  if(!_id || !name || !species || !homestatus || !birthday || !updated_by)
    return res.status(422).send({ error: 'Problem with params' });

  const promise = Pet.findOne({ _id }).exec();

  promise.then(pet => {

    if(!pet)
      return res.status(422).send({ error: 'Pet not found' });

    pet.name = name;
    pet.species = species;
    pet.homestatus = homestatus;
    pet.birthday = birthday;
    pet.updated_by = updated_by;
    pet.lat = lat;
    pet.lng = lng;

    pet.save((err, result) => {
      if(err)
        return res.status(503).send({ error: err.message });

      return res.status(202).send(result);
    });
  });

  promise.catch((err) => {
    console.log(err);
    return res.status(503).send({ error: err.message });
  });
};

export const deletePet = (req, res) => {
  const _id = req.body._id;

  if(!_id)
    return res.status(422).send({ error: 'Problem with params' });

  const promise = Pet.findById(_id).remove().exec();

  promise.then(result => {
    if(!result.ok)
      return res.status(422).send({ error: 'Problem while deleting' });

    return res.status(204).send();
  });

  promise.catch((err) => {
    return res.status(503).send({ error: err.message });
  });
};
