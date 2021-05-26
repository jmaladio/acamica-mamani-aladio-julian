import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import {ReactComponent as AerolabLogo} from '../../img/aerolab-logo.svg';
import UserControls from './UserControls';

function Header() {
  return (
    <>
      <StyledAppBar>
        <StyledToolbar>
            <NavLink to="/">
              <AerolabLogo />
            </NavLink>
            <UserControls />
        </StyledToolbar>
      </StyledAppBar>
    </>
  )
}

const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  position: static;
  color: black;
`
const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  background-color: #fafafa;
`

export default Header