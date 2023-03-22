import styled from "styled-components"

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255,255,255, 0.5)
),
 url("https://images.pexels.com/photos/11869672/pexels-photo-11869672.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load") center;
background-size: cover;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const Wrapper = styled.div`
width: 40%;
padding: 20px; 
background-color: white;
`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300; 
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;

const Input = styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;

const Aggrement = styled.span`
font-size: 12px;
margin: 20px 0px;
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
}
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Aggrement>By creating an account, I consent to processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Aggrement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register