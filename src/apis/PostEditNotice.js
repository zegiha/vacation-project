import axios from "axios";

export const PostEditNotice = async(input) => {
  const config= {
    headers: {
      "Content-Type": 'multipart/form-data'
    }
  };

  function findingAcceptArray(arr) {
    let result = [];
    arr.map((n, _) => {
      if (n.name !== undefined){
        result.push(n);
      }
      return null;
    })
    return result;
  }

  const formData = new FormData();

  formData.append('targetBoardID', input.id);
  formData.append('title', input.title);
  formData.append('edit_title', input.editTitle);
  formData.append('edit_contents', input.editContents);
  formData.append('password', input.password);
  formData.append('deleteFileList', input.delFiles);

  const files = findingAcceptArray(input.files)
  console.log(files);

  Array.from(files).forEach((el) => {
    formData.append("files", el);
  });

  await axios.post('https://josunghun.life/api/v1/board/edit', formData, config)
    .then(res => {console.log(`Complited!!\n${res}`)})
    .catch(error => {console.error(error)})
}
