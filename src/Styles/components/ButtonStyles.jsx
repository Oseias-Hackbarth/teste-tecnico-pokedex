import styled from "styled-components";

export const Button = styled.button`
  font-size: 15px;
  font-weight: 600;
  margin: 5px;
  color: ${(props) => props.theme.colorName || '#ffffff'};
  background: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.colorName || '#ffffff'};
  border-radius: 20px;
  padding: 2px 20px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.hoverColor || '#0000ff'};
  }
`;


export const ClearButton = styled.button`
    margin-top: 8px;
    padding: 4px 8px;
    border-radius: 6px;
    cursor: pointer;
    background-color: #e74c3c;
    color: white;
    border: none;

    &:hover {
        background-color: #c0392b;
    }
`;