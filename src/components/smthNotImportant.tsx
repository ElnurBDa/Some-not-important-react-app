import React from 'react';
import MultiActionAreaCard from './Card';
import Grid from '@mui/material/Unstable_Grid2'; 
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const cards = [
  {
      title:"Lizard",
      imagePath:"contemplative-reptile.jpg",
      description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  }
]


function SomeComponent() {
  return (
    <div>
      <Container fixed sx={{marginTop:3, width:"70%"}}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <MultiActionAreaCard title={cards[0].title} imagePath={cards[0].imagePath} description={cards[0].description} />
          </Grid>
          <Grid xs={8}>
            <MultiActionAreaCard title={cards[0].title} imagePath={cards[0].imagePath} description={cards[0].description} />
          </Grid>
          <Grid xs={8}>
            <MultiActionAreaCard title={cards[0].title} imagePath={cards[0].imagePath} description={cards[0].description} />
          </Grid>
          <Grid xs={4}>
            <MultiActionAreaCard title={cards[0].title} imagePath={cards[0].imagePath} description={cards[0].description} />
          </Grid>
        </Grid>
      </Box>
      </Container>
    </div>
  );
}

export default SomeComponent;
