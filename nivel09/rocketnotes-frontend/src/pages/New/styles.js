import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-areas: 
    'header'
    'content';
  grid-template-rows: 
    105px 
    auto;
` 

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;
    
    > a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      text-decoration: none;
    }
  }
`