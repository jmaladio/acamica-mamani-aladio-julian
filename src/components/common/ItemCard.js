import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function ItemCard({ item }) {
  const { category, cost, createDate, img, name, productId } = item;

  return (
    <Grid item xs={12} >
      <StyledPaper>
        <HorizontalContainer>
          <StyledImage src={img.hdUrl} alt="purchased item" />
          <VerticalContainer>
            <Typography variant="h4">{name}</Typography>
            <Typography variant="h6">Fecha y Hora: {createDate.slice(0,10)} {createDate.slice(11,16)}</Typography>
            <Typography variant="h5">Categoría: {category}</Typography>
            <Typography variant="h5">$ {cost}</Typography>
            <Typography variant="body1">Producto ID: {productId}</Typography>
          </VerticalContainer>
        </HorizontalContainer>
      </StyledPaper>
    </Grid>
  )
}

const StyledPaper = styled(Paper)`
  display: flex;
  flex-flow: column nowrap;
  padding: 1rem;
  height: 20rem;
`
const HorizontalContainer = styled(Container)`
  display: flex;
`

const VerticalContainer = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 2rem 0 2rem 2rem;
`

const StyledImage = styled.img`
  width: 25rem;
`

export default ItemCard;