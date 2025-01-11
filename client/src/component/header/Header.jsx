import { AppBar, Toolbar, Box, styled, Typography } from '@mui/material';
import Search from './Search';
import CustomeButtons from './CustomButton';

const StyledHeader = styled(AppBar)`
  background: #2874f0;  
  height: 55px;
`;

const Component = styled(Box)` 
  margin-left: 12%;
  line-height: 0;
  display: flex;
  flex-direction: column;  /* Ensure vertical layout */
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
  line-height: 1;
`;


const CustomeButtonWrapper=styled(Box)`
    margin:0 5% 0 auto;
`;

const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';  
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <>
      <StyledHeader>
        <Toolbar style={{minHeight:55}}>
          <Component>
            <img src={logoURL} alt="logo" style={{ width: 75 }} />
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <SubHeading>
                Explore&nbsp;
                <Box component="span" style={{ color: '#ffE500' }}>Plus</Box>
              </SubHeading>
              <img src={subURL} alt="sub-logo" style={{ width: 10, marginLeft: 5 }} />
            </Box>  
          </Component>
          <Search/>
          <CustomeButtonWrapper>
            <CustomeButtons/>
          </CustomeButtonWrapper>

        </Toolbar>
      </StyledHeader>
      
    </>
  );
}

export default Header;
