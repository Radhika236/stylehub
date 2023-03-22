import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter';


const Container = styled.div``;

const Wrapper = styled.div`
display: flex;
padding: 15px;
`;

const ImageContainer = styled.div`
width: 50%;
height: 50%;
flex: 1;
margin-left: 30px;
`;

const Image = styled.img`
width: 90%;
height: 85%;
object-fit: cover;
border-radius: 10px;
`;

const InfoContainer = styled.div`
flex: 0.7;
margin: 40px 30px;
`;

const HeadContainer = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
`;

const Title = styled.h2``;

const Price = styled.h2``;

const FilterContainer = styled.div`
width: 83%;
display: flex;
justify-content: space-between;
margin: 30px 0px;
`;

const Filter = styled.div`
Display: flex;
align-items: center;
`;

const FilterTitle = styled.h3``;

const FilterColor = styled.div`
width: 30px;
height: 30px;
margin: 0px 5px;
border-radius: 50%;
border: 2px solid black;
background-color: ${props=>props.color};
cursor: pointer;
`;

const FilterSize = styled.select`
margin-left: 5px;
padding: 5px;
border: 1px solid black;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
width: 83%;
margin: 50px 0px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 2px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;

const Button = styled.button`
width: 70%;
font-size: 20px;
padding: 10px;
border: 2px solid teal;
border-radius: 10px;
background-color: white;
cursor: pointer;
font-weight: 600;

&:hover{
    background-color: gray;
}
`;

const Desctitle = styled.h3`
margin-top: 60px;
`;

const Desc = styled.p`
width: 80%;
margin-top: 30px;
font-size: 16px;
letter-spacing: 2.5px;`;

const InfoTitle = styled.h3`
margin-top 60px;
`;

const List = styled.ul`
margin: 10px 0px;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 80%;
letter-spacing: 1px;
margin-bottom: 10px;
`;

const NewProduct = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
        <ImageContainer>
            <Image src="product.jpg" />
        </ImageContainer>
        <InfoContainer>
        <HeadContainer>
            <Title>Basic Tee</Title>
            <Price>Rs. 500</Price>
        </HeadContainer>
        <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black"/>
            <FilterColor color="gray"/>
            </Filter>
            <Filter>
            <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
            </Filter>
        </FilterContainer>
        <AddContainer>
        <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
        </AmountContainer>
        <Button>ADD TO CART</Button>
        </AddContainer>
        <Desctitle>Description.</Desctitle>
        <Desc>Start every outfit with Symbol's elevated wardrobe basics that are versatile, stylish and compliment your everyday look. This pack of 2 t-shirts feature a round neck and short sleeves. Made in stretchable cotton jersey fabric with 3% lycra for a soft hand feel and added comfort. Style it with a pair of denim shorts or skinny jeans and sneakers for an easy-going casual look.</Desc>
        <InfoTitle>Instructions.</InfoTitle>
            <List>
                <ListItem>Care Instructions: Hand Wash Only</ListItem>
                <ListItem>Fit Type: Regular Fit</ListItem>
                <ListItem>Wash Care Instructions: Wash in cold water</ListItem>
                <ListItem>Fit Type: Regular Fit</ListItem>
                <ListItem>This womens Long sleeve shirt is made of strechy</ListItem>
                <ListItem>Classic Camo Inspired Design</ListItem>
                
            </List>
        </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default NewProduct