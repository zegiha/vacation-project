import React from 'react';
import {Contents} from "../../atoms/Atomic";
import styled from "styled-components";

const FileEditNotice = ({imgSrc, setImgSrc, files, setFiles, delFiles, setDelFiles}) => {
  function deleteExImg(index) {
    const copyImgSrc = [...imgSrc];
    copyImgSrc.splice(index, 1);
    setImgSrc([...copyImgSrc]);

    if(delFiles !== '') setDelFiles(`${delFiles}:${files[index].uuid}`);
    else setDelFiles(`${files[index].uuid}`);

    const copyFiles = [...files];
    copyFiles.splice(index, 1);
    setFiles([...copyFiles]);
  }

  const uploadFile = async (e) => {
    let fileList = Array.from(e.target.files);

    // 비동기 작업을 처리하기 위해 Promise를 사용
    const readFile = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        let isPass = false;
        reader.readAsDataURL(file);
        reader.onload = () => {
          for(const originalFile of files) if(originalFile.name === file.name) {
            isPass = true;
            break;
          }
          for(const originalFile of files) if(originalFile.originFileName === file.name) {
            isPass = true;
            break;
          }
          if(isPass) resolve('already');
          else resolve(reader.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
      });
    };

    try {
      const imgSrcArray = [];

      // 각 파일에 대해 readFile 함수를 호출하여 주소 값을 받아옴
      for (const file of fileList) {
        const imgSrcItem = await readFile(file);
        if(imgSrcItem !== 'already') {
          imgSrcArray.push(imgSrcItem);

          // 이미지 주소 값을 업데이트
          setImgSrc([...imgSrc, ...imgSrcArray]);

          // 파일 상태 업데이트
          const tempFiles = [...files, ...fileList];
          setFiles([...tempFiles]);

          // 파일 다시 선택 문제 해결:
          // 수정된 코드에서는 uploadFile 함수에서 각 파일을 업로드할 때 입력 요소를 재설정하는 부분을 추가했습니다. 이렇게 하면 동일한 파일을 다시 선택했을 때 onChange 이벤트가 트리거됩니다.
          e.target.value = '';
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <FileContainer>
        <PictureContainer>
          {
            imgSrc.map((item, index) => {
              return(
                <Picture src={item} key={index} onClick={() => deleteExImg(index)}/>
              )
            })
          }
        </PictureContainer>
        <FileLabel htmlFor='FileAdd'><Contents>첨부 파일 추가</Contents></FileLabel>
      </FileContainer>
      <FileAdd accept="image/*, video/*" type="file" multiple={true} id={'FileAdd'} onChange={uploadFile}/>
    </Container>
  );
};

const FileLabel = styled.label`
  border-radius: 4px;
  border: 2px solid var(--line, rgba(0, 0, 0, 0.10));
  background: none;
  display: flex;
  padding: 10px 15px;
  width: max-content;
  transition: all 0.3s;
  &:hover {
    border: 2px solid var(--line, rgba(0, 0, 0, 0.30));
    transform: scale(1.02);
    cursor: pointer;
  }
`;
const FileAdd = styled.input`
  display: none;
`;
const Picture = styled.img`
  max-width: 150px;
  max-height: calc(20vh - 20px);
  width: max-content;
  border-radius: 4px;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }
`;
const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`;
const PictureContainer = styled.div`
  width: calc(100% - 30px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  height: auto;
  min-height: 20vh;
  padding: 10px 15px;
  border-radius: 4px;
  border: 2px solid var(--line, rgba(0, 0, 0, 0.10));
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export default FileEditNotice;