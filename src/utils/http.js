import axios from "axios";

const get = ({ url }) => {
  return new Promise((resolve, reject) => {
    axios({
      url,
    })
      .then((result) => {
        resolve(result);
      })
      .then((err) => {
        reject(err);
      });
  });
};

const getCategory = ({ url }) => {
  return new Promise((resolve, reject) => {
    axios({
      url,
    })
      .then((result) => {
        resolve(result);
      })
      .then((err) => {
        reject(err);
      });
  });
};

export { get, getCategory };
