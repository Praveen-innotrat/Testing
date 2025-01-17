import styled from "@emotion/styled";

export const Button = styled.button`
    text-decoration: none;
    max-width : auto;
    background-color : rgb(98 84 243);
    color : rgb(255 255 255);
    padding : 0.5rem 1.3rem;
    border : none;
    border-radius : 3px;
    text-transform : uppercase;
    text-align : center;
    cursor : pointer;
    transition : all 0.3s ease;
    -webkit-transition : all 0.3s ease 0s;
    -moz-transition : all 0.3s ease 0s;
    -o-transition : all 0.3s ease 0s;
    margin-right : 1rem;
    

    &:hover,
    &:active{
        box-shadow : 0 2rem 2rem 0 rgb(132 144 255 / 30%);
       
        transform : scale(0.96);
    }

    a{
        text-decoration : none;
        color : rgb(255 255 255);
        font-size : 1.3rem;
    }
`