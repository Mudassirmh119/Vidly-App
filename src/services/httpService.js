import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";
/*
with interceptor we are handling unexpected errors globally
we dont need to define it from every method in which we send the request
*/

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
  /* with authorization set to true we cant send hhtp request
     to the server because it returns an unauthorized response(401)
     so we need to send request with JWT so that it does not get
     unauthorized.
     with 'common' we can all kind of hhtp requests.
  */
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
