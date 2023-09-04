import React, {useEffect, useState} from "react";
import axios from "axios";
import {useQuery} from "react-query";

function info() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data,error,loading} = useQuery(['data'],fetchData);



    if(data) return (
        <div>
            <h1>JSON 데이터 가져오기 예제</h1>
            {data ? (
                <div>
                    {/* 데이터가 있을 때 표시할 내용 */}
                    <p>제목: {data.title}</p>
                    <p>내용: {data.content}</p>
                </div>
            ) : (
                <p>데이터를 로드 중입니다...</p>
            )}
        </div>
    );
}
function fetchData() {
    const {data} = (axios.get('http://localhost:8081/api/v1/board')).data;
    console.log(data);
    return data;
}
export default info;