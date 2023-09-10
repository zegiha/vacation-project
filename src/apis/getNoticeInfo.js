import axios from "axios";

export const getNoticeInfo = async () => {
  return await axios.get('http://52.79.99.166:8081/api/v1/board');
}