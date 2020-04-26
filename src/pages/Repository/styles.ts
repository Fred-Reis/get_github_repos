import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    /**o Link do react é um <a> */
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;

    &:hover {
      color: #666;
      transition: color 0.2ms;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex; /**pra colocar esse header pro lado  */
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        margin-top: 4px;
        font-size: 18px;
        color: #737380;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block; /**coloca embaixo (quebrar a linha, pois tanto sapan quanto strong não quebram automático) */
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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
