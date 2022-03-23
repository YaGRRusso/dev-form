import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    margin: 30px 0;
    display: flex;
    align-items: center;
`

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;

    .title{
        text-align: right;
        font-weight: bold;
        font-size: 15px;
        color: #fff;
        margin: 0;
        margin-bottom: 5px;
    }
    .subtitle{
        text-align: right;
        font-size: 15px;
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
    margin-right: 20px;

    img{
        filter: invert(1);
        width: 24px;
        height: 24px;
    }
`