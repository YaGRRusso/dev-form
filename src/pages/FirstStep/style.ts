import styled from "styled-components";

export const Container = styled.div`
    label{
        font-size: 13px;

        input{
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 1px solid #25cd89;
            border-radius: 10px;
            color: #fff;
            outline: none;
            font-size: 16px;
            background-color: transparent;
        }
    }
    button{
        background-color: #25cd89;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
        transition: all .3s;

        :hover{
            opacity: .9;
            transform: scale(1.02);
        }
    }
`