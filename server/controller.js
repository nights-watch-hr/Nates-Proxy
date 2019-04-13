const axios = require('axios');

const controller = {
  getAllSearch: (req, res) => {
    axios
      .get('http://localhost:3001/api')
      .then(response => res.status(200).send(response.data))
      .catch(err => console.log(err));
  },

  getAllBody: (req, res) => {
    axios
      .get('http://localhost:3069/api/beats')
      .then(response => res.status(200).send(response.data))
      .catch(err => console.log(err));
  },

  getOneBody: (req, res) => {
    let { id } = req.params;
    axios
      .get(`http://localhost:3069/api/beats/${id}`)
      .then(response => response)
      .catch(err => console.log(err));
  },

  getOneMediaPlayer: (req, res) => {
    let { id } = req.params;
    axios
      .get(`http://localhost:3737/api/tracks/${id}`)
      .then(response => response)
      .catch(err => console.log(err));
  }
};

module.exports = controller;
