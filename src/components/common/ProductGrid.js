import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import ProductCard from './ProductCard';

function ProductGrid({ products }) {
  const cards = products.map(product => <ProductCard key={product._id} product={product} />)
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
  padding: 0 6rem 4rem 6rem;
  border: 1px solid papayawhip;
  margin-top: 2rem;
`

export default ProductGrid