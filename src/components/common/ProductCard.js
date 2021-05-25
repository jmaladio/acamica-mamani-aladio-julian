import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { ReactComponent as BuyIconBlue } from '../../img/buy-blue.svg'

function ProductCard({ product }) {
  const { category, img, name } = product;

  return (
    <Grid item xs={3}>
      <StyledPaper>
        <IconWrapper>
          <BuyIconBlue/>
        </IconWrapper>
        <figure>
          <ImgWrapper src={img.url} alt={name} />
          <figcaption>
            <Typography variant="caption" style={{ color: "gray" }}>{category}</Typography>
            <Typography variant="subtitle2">{name}</Typography>
          </figcaption>
        </figure>
      </StyledPaper>
    </Grid>
  )
}

const StyledPaper = styled(Paper)`
  display: flex;
  flex-flow: column nowrap;
  padding: 1rem;
  position: relative;
`

const ImgWrapper = styled.img`
  width: 100%;
  border-bottom: 1px solid lightgray;
`

const IconWrapper = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1rem;
  top: 1rem;
`

export default ProductCard;