import {css} from "@emotion/css"
import styled from '@emotion/styled'

export const Container = styled.div`
flex-direction:column;
align-items:flex-start;
display:flex;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px; /* 양쪽 여백 */
    
`
export const Head_wrapper = styled.div`
    justify-content:space-evenly;
    align-items:center;
    display : flex;
    width:100%;
    height : 150px;
`
export const ContentWrapper = styled.div`
    display:flex;
    width:95%;
    justify-content:space-between;
    align-items:center;
`
export const Side_Wrapper = styled.div`

    justify-content:center;
    align-items:flex-start;
    display : flex;
    width:300px;
    height : 760px;
    padding: 50px;
    flex-shrink: 0; /* 크기 고정 */
    
`
export const Body_Wrapper = styled.div`
    border-radius:20px;
   justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 760px;
    background-color: white;
`

