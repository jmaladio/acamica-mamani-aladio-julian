import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import ProductGrid from '../common/ProductGrid';

export function Home() {
  return (
    <HomeWrapper>
      <Hero>
        <StyledTypography variant="h2">Electronics</StyledTypography>
      </Hero>
      <Controls>
        Controles
      </Controls>
      <ProductGrid />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.main`
  display: flex;
  flex-flow: column nowrap;
`

const Hero = styled(Container)`
  display: flex;
  height: 20vh;
  background-color: blueviolet;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0 6rem 1rem 6rem;
`

const StyledTypography = styled(Typography)`
  font-weight: 700;
  color: #fafafa;
`

const Controls = styled(Container)`
  display: flex;
  border: 1px solid olive;
  height: 10vh;
  padding: 0 6rem;
  align-items: center;
`

