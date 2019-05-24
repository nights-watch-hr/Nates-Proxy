const axios = require('axios');

const controller = {
  getAllSearch: (req, res) => {
    axios
      .get('http://3.84.204.134:3001/api')
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(404).send(err));
  },

  getAllBody: (req, res) => {
    axios
      .get('http://13.57.33.1:3069/api/beats')
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(404).send(err));
  },

  getOneBody: (req, res) => {
    let { id } = req.params;
    axios
      .get(`http://13.57.33.1:3069/api/beats/${id}`)
      .then(response => response.data)
      .catch(err => res.status(404).send(err));
  },

  playTrack: (req, res) => {
    let { id } = req.params;
    axios
      .get(`http://54.152.100.141:3737/api/playTracks/${id}`)
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(404).send(err));
  },

  queueTrack: (req, res) => {
    let { id } = req.params;
    axios
      .get(`http://54.152.100.141:3737/api/queueTracks/${id}`)
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(404).send(err));
  }

  // For AWS Deployment
  //
  // getAllSearch: (req, res) => {
  //   axios
  //     .get('https://http://18.218.143.3:3001')
  //     .then(response => res.status(200).send(response.data))
  //     .catch(err => res.status(404).send(err));
  // },

  // getAllBody: (req, res) => {
  //   axios
  //     .get('https://54.165.200.109:3069')
  //     .then(response => res.status(200).send(response.data))
  //     .catch(err => res.status(404).send(err));
  // },

  // getOneBody: (req, res) => {
  //   let { id } = req.params;
  //   axios
  //     .get(`https://54.165.200.109:3069/${id}`)
  //     .then(response => response.data)
  //     .catch(err => res.status(404).send(err));
  // },

  // playTrack: (req, res) => {
  //   let { id } = req.params;
  //   axios
  //     .get(`https://3.84.119.45:3737/${id}`)
  //     .then(response => res.status(200).send(response.data))
  //     .catch(err => res.status(404).send(err));
  // },

  // queueTrack: (req, res) => {
  //   let { id } = req.params;
  //   axios
  //     .get(`https://3.84.119.45:3737/${id}`)
  //     .then(response => res.status(200).send(response.data))
  //     .catch(err => res.status(404).send(err));
  // }
};

module.exports = controller;
