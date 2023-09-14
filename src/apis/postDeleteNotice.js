import axios from "axios";

export const postDeletNotice = async (input) => {
  try{
    const sendData = {
      'password': input.noticePassword,
      'content': input.noticeContents,
      'title': input.noticeTitle
    }

    const config= {
      headers: {
        "Content-Type": 'application/json'
      }
    }
    return axios.post('https://coinpick365.com:8081/api/v1/board/del', sendData, config);
  } catch (e) {
    return e;
  }
}