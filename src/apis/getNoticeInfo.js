import axios from "axios";

export const getNoticeInfo = async () => {
  return await axios.get('https://coinpick365.com:8081/api/v1/board');
}