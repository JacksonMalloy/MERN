import axios from 'axios';

//we're adding a global header
const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    //so that when we have a token we can send it with every request instead of picking and choosing
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
