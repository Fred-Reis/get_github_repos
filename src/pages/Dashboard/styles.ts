import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px; /* sempre começa do canto superior esquerdo */
    color: #3a3a3a;
    border: 2px solid #fff; /**mesma cor do background */
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    height: 70px;
    width: 210px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s; /**aqui diz o tempo que leva para mudar de cor */

    &:hover {
      /** esse & sempre se refere ao próprio elemento */
      background: ${shade(
        0.2,
        '#04d361',
      )}; /**recebe dois parâmetros o percentual e a cor para escurecer */
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8ox;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s; /**tempo de transição para o hover */

    &:hover {
      transform: translateX(
        10px
      ); /**essa função moxe no eixo X no caso 10 px quando hover(mouse passar por cima) */
    }

    & + a {
      /** dessa forma na lista eu só passo o css para o segundo elemento identico */
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1; /**obriga a ocupar somente o tamanho disponivel */

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-left: 4px;
      }
    }

    svg {
      /** Quando quiser incluir estilização do icone incluir como svg */
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
