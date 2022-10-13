import axios from 'axios';

axios.defaults.baseURL = 'https://cdn.cur.su/api/nbu.json';
const NBU_APIRequest = async () => {
  try {
    const response = await axios.get();
    return response.data;
  } catch (error) {
    console.log('error =>', error);
  }
};
export default NBU_APIRequest;
