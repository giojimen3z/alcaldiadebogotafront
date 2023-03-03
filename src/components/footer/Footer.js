import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardsEntidades from './Entidades';


function Footer(props) {
  return (
    <Box component="footer" sx={{ bgcolor: 'black'}}>
      <Container >
      <CardsEntidades/>
      </Container>
    </Box>
  );
}

export default Footer;