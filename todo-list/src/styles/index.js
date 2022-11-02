import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0 ;
    padding: 0;
    box-sizing: border-box;
    text-decoration: navy;
    outline:navajowhite;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    align-items: center;
    /* background-color: #121214;
        color: #c4c4cc;
        -webkit-font-smoothing: antialiased; //so funciona no MacOS */
}
`;
export const Container = styled.div`

  
  width: 100%;
  min-height: 89.5rem;
  background: #FFFFFF;
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 1.0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem 2.5rem;

  .title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    color: #2A836B;
    border-bottom: 0.5rem solid #2A83;
  }
`;

export const Input = styled.input`
  padding: 8px 24px;
  width: 224px;
  height: 50px;
  background: #9DCC9B;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #136B69;
 

  &::placeholder {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #2A836B;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || "16px"};
`;

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "20px"};
`;

export const Button = styled.button`
  width: 112px;
  height: 50px;
  background: #136B69;
  border-radius: 10px;
  border: none;
 

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fbfbfb;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
    
  }
  &:active {
    opacity: 0.6;
  }
`;

export const Item = styled.li`
  padding: 13px 10px 13px 24px;
  width: 354px;
  min-height: 50px;
  background: ${(props) => (props.checked ? "#2A836B" : "#9DCC9B")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  

  p {
    font-weight: 500;
    font-size: 1.6em;
    line-height: 2.4em;
    text-decoration-line: ${(props) => (props.checked ? "line-through" : "")};
    color: ${(props) => (props.checked ? "#ffffff" : "#000000")};

    width: 80%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
      color: #ffffff;
    }
    &:active {
      opacity: 0.6;
    }
  }

  i {
    font-size: 24px;
    color: ${(props) => (props.checked ? "#ffffff" : "#000000")};
  }

`;