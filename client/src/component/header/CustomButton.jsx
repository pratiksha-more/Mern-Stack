
import {Box,Button, Typography,colors,styled} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Wrapper=styled(Box)`
        display:flex;
        margin:0 3% 0 auto;
        & > button,& > P,& > div{
            margin-right:40px;
            font-size:16px;
            align-items:center;
    }
`;

const Container=styled(Box)`
        display:flex;
`;


const LoginButton=styled(Button)
`
    color:#2874f0;
    background:#FFF;
    text-transform:none;
    padding:5px 40px;
    border-radius:2px;
    font-weight=600;
    height:32px;
`




const CustomeButtons=()=>
{
    return(

        <Wrapper>
           <LoginButton variant='contained'>Login</LoginButton> 

           <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
           <Typography style={{marginTop:3}}>More</Typography>


           <Container>
            <ShoppingCartIcon/>
                <Typography>
                    Cart
                </Typography>
            </Container>
        </Wrapper>
    )
}

export default CustomeButtons;