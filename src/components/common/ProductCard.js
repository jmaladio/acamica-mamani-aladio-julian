import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function ProductCard() {
  return (
    <Grid item xs={3}>
      <StyledPaper>xs=3</StyledPaper>
    </Grid>
  )
}

const StyledPaper = styled(Paper)`
  padding: 1rem;
`

export default ProductCard;