import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 60px;
`
const Wrapper = styled.div`
padding:0px 20px;
display: flex; 
align-items: center; 
justify-content: space-between;
`
const Left = styled.div`
flex:1;
display: flex; 
align-items: center; 
`
const Language = styled.div`
font-size: 15px;
font-weight: 600;
cursor: pointer;
`

const SearchContainer = styled.div`
border: 1.5px solid black;
border-radius: 5px;
display: flex; 
align-items: center;
margin-left: 25px; 
padding: 5px;
`
const Input= styled.input`
border: none;
`

const Center = styled.div`
flex:1;
text-align: center;
`
const Logo = styled.h1`
// height: 40px;
margin: 10px;
`

const Right = styled.div`
flex:1;
display: flex; 
align-items: center;
justify-content: flex-end;
`
const MenuItem= styled.div`
font-size: 15px;
font-weight: 600;
cursor: pointer;
margin-left: 25px;
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
            <SearchContainer>
                <Input/>
                <Search style={{color:"black", fontSize:16}}/>
            </SearchContainer>
            </Left>
            <Center><Logo>Style.Hub</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlined/>
    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar