import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Container>
        <Header/>
        <Container disableGutters={true}>
          {children}
        </Container>
      </Container>
    </>
  )
}

export default Layout;