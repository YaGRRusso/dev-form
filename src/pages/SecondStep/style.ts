import styled from "styled-components";

export const Container = styled.div`
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

    .backButton{
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #b8b8d4;
    }
`