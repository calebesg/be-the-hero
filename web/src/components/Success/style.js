import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 5, .97);

  h1 {
    color: #FFF;
    margin-top: 28px;
    font-weight: normal;

    span {
      font-weight: bold;
      color: #ddd;
    }
  }

  a {
    max-width: 300px;
    width: 100%;

    margin-top: 28px;
  }
`