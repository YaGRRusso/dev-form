import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    margin: 30px 0;
    display: flex;
    margin-right: 10px;

    @media(max-width: 768px) {
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
        margin-right: 0;
        flex: 1;
    }
`

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;
    text-align: right;
    font-size: 15px;

    @media(max-width: 768px) {
        text-align: center;
        font-size: 13px;
        margin-right: 0;
    }

    .title{
        font-weight: bold;
        color: #fff;
        margin: 0;
        margin-bottom: 5px;

        @media(max-width: 768px) {
            margin-top: 10px;
        }
    }
    .subtitle{
        color: #b8b8d4;
    }
`

export const Icon = styled.div<{ active: boolean }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25cd89' : '#494a7c'};
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        filter: invert(1);
        width: 24px;
        height: 24px;
    }
`