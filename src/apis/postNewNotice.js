import axios from "axios";

export const postNewNotice = async(input) => {
  const config= {
    headers: {
      "Content-Type": 'multipart/form-data'
    }
  };

  const formData = new FormData();

  formData.append('title', input.title);
  formData.append('content', input.contents);
  formData.append('username', input.userName);
  formData.append('password', input.password);


  Array.from(input.files).forEach((el) => {
    formData.append("files", el);
  });

  await axios.post('https://coinpick365.com:8081/api/v1/board', formData, config)
  .then(res => {console.log("postComplite")})
  .catch(error => {console.error(error)})
}
