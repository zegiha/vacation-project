import axios from "axios";

export const getNoticeInfo = async () => {
  return await axios.get('https://josunghun.life/api/v1/board');
}