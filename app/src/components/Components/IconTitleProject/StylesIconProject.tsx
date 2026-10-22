'use client'
import styled from "styled-components";
import { Button } from "../../../components/Components/Button/StylesButton";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
export const Title = styled.h1`
    color: #FFF;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.75;
    margin: 20px 0;
`

export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`

export const Link = styled.a`
    cursor: pointer;
`
export const ButtonDemo = styled(Button)`
    min-width: 160px;
    line-height: 60px;
    color: #2E80CE;
    border-radius: 10px;
    border: 1px solid #2E80CE;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 7px;

    &:hover{
        opacity: 1;
        color: #000;
        background-color: #fff;
        border: 1px solid #fff;
    }
`

export const ButtonView = styled(Button)`
    min-width: 160px;
    line-height: 60px;
    border-radius: 10px;
    display: flex;
    align-items: center;

    gap: 7px;

    &:hover{
        opacity: 1;
        color: #000;
        background-color: #fff;
        border: 1px solid #fff;
    }
`