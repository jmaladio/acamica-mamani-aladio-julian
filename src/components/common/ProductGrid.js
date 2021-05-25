import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import ProductCard from './ProductCard';

function ProductGrid() {
  const cards = Array(16).fill(null).map((_, index) => <ProductCard key={index} />)
  return (
    <GridWrapper>
      <Grid container spacing={2}>
        {cards}
      </Grid>
    </GridWrapper>
  )
}

const GridWrapper = styled.div`
  display: flex;
  padding: 0.5rem 6rem;
  border: 1px solid papayawhip;
`

export default ProductGrid