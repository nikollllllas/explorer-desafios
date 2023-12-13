import styled from 'styled-components'

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const Container= styled.div`
  width: 100%;
  height: 100vh;
 
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    'brand header'
    'menu search'
    'menu content'
    'newnote content';

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Content= styled.div`
  grid-area: content;

`

export const Menu= styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding-top: 64px;
  text-align: center;
  
  > li {
    margin-bottom: 16px
  }
`

export const NewNote= styled.button`
  grid-area: newnote;

`

export const Search= styled.div`
  grid-area: search;

`
