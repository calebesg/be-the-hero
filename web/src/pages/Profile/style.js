import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin: 80px 0 24px;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }

  a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;
    transition: border-color .3s;

    &:hover {
      border-color: #999;
    }
  }
`

export const ListCasos = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  li {
    background-color: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;

    button {
      position: absolute;
      right: 24px;
      top: 24px;
      background: transparent;
      border: 0;

      &:hover {
        opacity: .8;
      }
    }

    strong {
      display: block;
      margin-bottom: 16px;
      color: #41414d;
    }

    p + strong {
      margin-top: 32px;
    }

    p {
      color: #737380;
      line-height: 21px;
      font-size: 16px;
    }
  }
`
