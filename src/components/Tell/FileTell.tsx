import React from 'react';
import styled from "styled-components";
import {useState} from "react";

interface PropsTypes{
  imgSrc: string[];
  setImgSrc: (contents: any) => void;
  files: any;
  setFiles: (contents: any) => void;
}

const FileTell = ({imgSrc, setImgSrc, files, setFiles}: PropsTypes) => {
  const [isFileEditor, setIsFileEditor] = useState(false);
  const [isSameFile, setIsSameFile] = useState(false);

  function deleteExImg(index: number) {
    const copyImgSrc = [...imgSrc];
    copyImgSrc.splice(index, 1);
    setImgSrc([...copyImgSrc]);

    const copyFiles = [...files];
    copyFiles.splice(index, 1);
    setFiles([...copyFiles]);
  }

  const uploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let fileList = e.target.files as FileList;//const try

    // 비동기 작업을 처리하기 위해 Promise를 사용
    const readFile = (file: any) => {
      return new Promise((resolve, reject) => {
        let isPass: string|boolean = false;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          for(const originalFile of files){
            if(originalFile.name === file.name){
              isPass = 'already';
              setIsSameFile(true)
              break;
            }
          }

          const fileEditor = file.name.substr(file.name.indexOf('.') + 1);
          if(!(fileEditor === 'png' || fileEditor === 'jpg' || fileEditor === 'mp4' || fileEditor === 'mov' || fileEditor === 'jpeg')){
            isPass = 'diffFile';
            setIsFileEditor(true);
          }

          if(isPass === 'already') resolve('already');
          else if(isPass === 'diffFile') resolve('diffFile');
          else {
            setIsFileEditor(false);
            setIsSameFile(false);
            resolve(reader.result);
          }
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
        if(imgSrcItem !== 'already' && imgSrcItem !== 'diffFile') {
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
        <WarnRight>
          {isFileEditor ? <Warn>png, jpg, jpeg, mp4, mov 파일만 추가할 수 있어요!</Warn>:<></>}
          {isSameFile ? <Warn>다른 파일만 추가할 수 있어요!</Warn>:<></>}
        </WarnRight>
        <FileLabel htmlFor='FileAdd'><FileContents>첨부 파일 추가</FileContents></FileLabel>
      </FileContainer>
      <FileAdd accept=".mp4, .png, .jpg, .mov, .jpeg" type="file" multiple={true} id={'FileAdd'} onChange={uploadFile}/>
    </Container>
  );
};

const FileContents = styled.div`
  color: var(--text-contents, #524437);
  font-family: 'Pretendard';
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: max-content;
`;
const WarnRight = styled.div`
  width: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  align-items: end;
`;
const Warn = styled.div`
  color: #FF2E2E;
  font-size: 17px;
`;
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
export default FileTell;