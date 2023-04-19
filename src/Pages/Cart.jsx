import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { mobile } from "../Responsive";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
font-weight: 400;
text-align: center;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
color: ${props=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobile({ display: "none" })};`;

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;


const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })};
`;

const Info= styled.div`

flex: 3;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })};
`;

const ProductDetail = styled.div`
flex: 2;
display: flex;
`;

const Image = styled.img`
width: 200px;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
${mobile({ marginBottom: "0px" })};

`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
${mobile({ flexDirection: "row", justifyContent: "space-evenly", marginBottom: "10px"})};
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
${mobile({ marginBottom: "0px", alignItems: "center" })};
`;

const ProductAmount = styled.div`
font-size: 24px;
margin: 10px;
`;

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 700;
${mobile({ fontSize: "24px", })};
`;

const Hr =styled.hr`
background-color: #eee;
border: none;
height: 2px;
`;

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 15px;
padding: 20px;
height: 50vh;
`;

const SummaryTitle = styled.h1`
font-weight: 300;
`;

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
cursor: pointer;
font-size: 15px;
font-weight: 600;
`;

const Cart = () => {
    const cart = useSelector(state=>state.cart)
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton> 
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map(product=>(
                    <Product>
                        <ProductDetail>
                            <Image src="https://m.media-amazon.com/images/I/51CstosUIoL._UL1200_.jpg" />
                            <Details>
                            <ProductName><b>Product:</b> puma tshirt</ProductName>
                            <ProductId><b>ID:</b> 642165159150153d4d11ae1d</ProductId>
                            <ProductColor color="pink"/>
                            <ProductSize><b>Size:</b> M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>{product.quantity}</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 60</ProductPrice>
                        </PriceDetail>
                    </Product>
                    ))}
<Hr/>
                   
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 60</SummaryItemPrice>
                    </SummaryItem> 

                    <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem> 

                    <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem> 

                    <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>$ 60</SummaryItemPrice>
                    </SummaryItem>
                    <Link to ="/success">
                    <Button>BUY NOW</Button>
                    </Link>
                </Summary>                
            </Bottom>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Cart