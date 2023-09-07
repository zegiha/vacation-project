import axios from "axios";

export const getNoticeInfo = async () => {
  return await axios.get('http://13.124.212.11:8081/api/v1/board');
}