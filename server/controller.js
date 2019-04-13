const axios = require('axios');

const controller = {
  getAllSearch: (req, res) => {
    axios
      .get('http://localhost:3001/api')
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(404).send(err));
  },

  getAllBody: (req, res) => {
    axios
      .get('http://localhost:3069/api/beats')
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(404).send(err));
  },

  getOneBody: (req, res) => {
    let { id } = req.params;
    axios
      .get(`http://localhost:3069/api/beats/${id}`)
      .then(response => response)
      .catch(err => res.status(404).send(err));
  },

  playSong: (req, res) => {
    let { id } = req.params;
    axios
      .get(`ec2-3-87-73-193.compute-1.amazonaws.com/${id}`)
      .then(response => console.log(response))
      .catch(err => res.status(404).send(err));
  },

  queueSong: (req, res) => {
    let { id } = req.params;
    axios
      .get(`ec2-3-87-73-193.compute-1.amazonaws.com/${id}`)
      .then(response => console.log(response))
      .catch(err => res.status(404).send(err));
  }
};

module.exports = controller;
