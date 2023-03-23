import styled from "styled-components"
import { mobile } from "../Responsive";

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255,255,255, 0.5)
),
 url("https://images.pexels.com/photos/11028517/pexels-photo-11028517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
background-size: cover;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const Wrapper = styled.div`
width: 25%;
padding: 20px; 
background-color: white;
border-radius: 10px;

${mobile({ width: "70%" })};
`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300; 
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
flex:1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 10px; 
background-color: teal;
color: white;
cursor: pointer;

&:hover{
    background-color: gray;
};
margin-bottom: 10px;
`;

const Link = styled.a`
margin: 10px 0px;
font-size: 13px;
font-weight: 500;
text-decoration: underline;
cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>DO NOT REMEMBER THE PASSWORD?</Link>
                <Link>CREATE NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login