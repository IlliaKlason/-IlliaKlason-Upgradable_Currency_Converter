import axios from 'axios';

axios.defaults.baseURL = 'https://cdn.cur.su/api/nbu.json';

const NBU_APIRequest = async () => {
  const response = await axios.get();
  return response.data;
};
export default NBU_APIRequest;
