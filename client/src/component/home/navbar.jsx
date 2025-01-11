import {Box,styled, Typography} from '@mui/material';
import {navData} from '../constants/data';


const Component=styled(Box)`
        display:flex;
        margin:55px 130px 0px 130px;
        justify-content:space-between;
`;
const Constraint=styled(Box)`
        padding:12px 8px;
        text-align:center;

`;


const Text=styled(Typography)`
        font-size:14px;
        font-weight:600;
        font-family:inherite;
`;
const Navbar=()=>
{
    return(

        <Component>
            {
                navData.map(data=>(
                    <Constraint >
                        <img src={data.url} alt='nav'/> 
                        <Text>{data.text}</Text>
                        
                    </Constraint>


                ))
            }

        </Component>

    )
}

export default Navbar;