import axios from "axios";

export const getNoticeInfo = async () => {
  return await axios.get('http://54.180.143.42:8081/api/v1/board');
}