import styled from "styled-components";

const vanillaColor = '#191a59';
const selectedColor = '#25cd89';
const hoveringColor = '#25cd8950';

export const Container = styled.div<{ selected: boolean }>`
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.selected ? selectedColor : vanillaColor};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    cursor: pointer;

    &:hover{
        border: 1px solid ${props => props.selected ? selectedColor : hoveringColor};

        strong {
            background-color: ${props => props.selected ? selectedColor : hoveringColor};
        }
    }

    strong {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        background-color:  ${props => props.selected ? selectedColor : vanillaColor};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
    }
    
    div{
        flex: 1;
        margin-left: 20px;

        p{
            font-size: 17px;
            font-weight: bold;
            margin: 0;
            margin-bottom: 7px;
        }
        span{
            font-size: 14px;
            color: #b8b8d4;
        }
    }
`