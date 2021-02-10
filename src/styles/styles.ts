import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  .logo-owo {
    height: 100px;
  }
  .btn-primary,
  .btn-primary:focus,
  .btn-primary:active,
  .btn-primary:disabled,
  .btn-primary:hover {
    color: ${props => props.theme.colors.background};
    font-size: 16px;
    font-weight: 400;
    border-radius: 8px;
    font-style: normal;
    font-family: Roboto;
    background-color: ${props => props.theme.colors.blue};
    border-color: ${props => props.theme.colors.blue};
    margin-right: 8px;
  }
  .btn-secondary,
  .btn-secondary:focus,
  .btn-secondary:active,
  .btn-secondary:disabled,
  .btn-secondary:hover {
    color: ${props => props.theme.colors.background};
    font-size: 16px;
    font-weight: 400;
    border-radius: 8px;
    font-style: normal;
    font-family: Roboto;
    background-color: ${props => props.theme.colors.black};
    border-color: ${props => props.theme.colors.black};
  }
  form {
    align-items: center;
    padding: 8px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: 2px solid ${props => props.theme.colors.primary};
  }
  .btn-primary,
  .btn-primary:focus,
  .btn-primary:active,
  .btn-primary:disabled,
  .btn-primary:hover {
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.black};
    font-size: 16px;
    font-weight: 400;
    border-radius: 8px;
    font-style: normal;
    font-family: Roboto;
    font-weight: bold;
    margin-right: 8px;
  }

  input {
    background-color: #f6f5f5;
    border: 0.5px solid #dcdcdc;
    outline: none;
    color: #626264;
    font-size: 12px;
  }
  footer {
    font-size: 10px;
  }
`;
