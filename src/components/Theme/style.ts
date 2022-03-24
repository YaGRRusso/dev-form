import styled from "styled-components";

export const Container = styled.div`
    background-color: #0A091B;
    color: #fff;
    min-height: 100vh;
    padding-bottom: 60px;
`

export const Area = styled.div`
    margin: auto;
    width: 95vw;
    max-width: 1140px;
    display: flex;
    flex-direction: column;
`

export const Steps = styled.div`
    flex: 1;
    display: flex;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`

export const Sidebar = styled.div`
    width: 250px;
    @media(max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        border-bottom: 1px solid #16195c;
    }
`

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
    
    @media(max-width: 768px) {
        padding-left: 0;
    }
`

