import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components"
import { mobile } from "../Responsive";

const Container = styled.div`
display: flex;

${mobile({ flexDirection: "column" })};
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h2`
// width: 40%;
`;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex;
margin: 0px 0px;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;

${mobile({ display: "none" })};
`;

const Title = styled.h3`
margin-bottom: 20px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px 0px;

${mobile({ backgroundColor: "#eee" })};
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Payment = styled.img`
width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Style.hub</Logo>
            <Desc>Lorem ipsum dolor sit amet. Qui voluptatem quisquam aut quaerat nihil ut veritatis eligendi? Et exercitationem maxime qui asperiores illo ut voluptatum tempore. Et error officia qui quia tenetur non perspiciatis vitae.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="0E76A8">
                    <LinkedIn/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>123 Industrial Area phase 1, Chandigarh</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+91 7814915760</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>contact@stylehub.com</ContactItem>
            <Payment src="images/i.png"/>
        </Right> 
    </Container>
  )
}

export default Footer