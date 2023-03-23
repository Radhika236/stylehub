import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { mobile } from "../Responsive";

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
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.pexels.com/photos/1461048/pexels-photo-1461048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s" />
                            <Details>
                            <ProductName><b>Product:</b> SHOES</ProductName>
                            <ProductId><b>ID:</b> 68416466164</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
<Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://cdn.shopify.com/s/files/1/1002/7150/products/New-Mockups---no-hanger---TShirt-Man-of-Masses---NTR-a.jpg?v=1643011256" />
                            <Details>
                            <ProductName><b>Product:</b> T-Shirt</ProductName>
                            <ProductId><b>ID:</b> 68416466164</ProductId>
                            <ProductColor color="darkblue"/>
                            <ProductSize><b>Size:</b> M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 50</SummaryItemPrice>
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
                    <SummaryItemPrice>$ 50</SummaryItemPrice>
                    </SummaryItem> 

                    <Button>BUY NOW</Button>
                </Summary>                
            </Bottom>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Cart