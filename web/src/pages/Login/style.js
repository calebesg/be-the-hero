import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;

    form {
      margin-top: 100px;

      h1 {
        font-size: 32px;
        margin-bottom: 32px;
      }
    }
  }
`