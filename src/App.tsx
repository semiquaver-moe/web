import styled from './styled'
import React, { FunctionComponent, useState } from 'react'
import { Route, Link as RouterLink } from 'react-router-dom'
import { Toolbar, Typography, IconButton, Link, Hidden } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import GitHubIcon from '@material-ui/icons/GitHub'

import AppBar from './AppBar'
import AppDrawer from './AppDrawer'
import Home from './Home'
import UserBox from './UserBox'
import DxIntl from './dx_intl/index'

import './App.css'

const Title = styled(Typography)`
  flex-grow: 1;
  font-family: 'McLaren', cursive;
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
`
const AppMenuButton = styled(IconButton)`
  margin-right: ${props => props.theme.spacing(2)}px;
`
const StyledMain = styled('main')`
  margin-top: ${props => props.theme.spacing(6)}px;
  padding: ${props => props.theme.spacing(1)}px;
  flex: 1;
  min-width: 0;
`

const StyledFooter = styled('footer')`
  margin-top: ${props => props.theme.spacing(2)}px;
  padding-left: ${props => props.theme.spacing(2)}px;
  padding-top: ${props => props.theme.spacing(2)}px;
  border-top: 1px solid #CCCCCC;
  color: #999999;
`

const StyledLink = styled(Link)`
  margin: 0 ${props => props.theme.spacing(2)}px;
`

const App: FunctionComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  function toggleDrawerOpen (): void {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <div className='App'>
      <AppBar position='fixed' className={(drawerOpen) ? 'open' : ''}>
        <Toolbar>
          <AppMenuButton edge='start' color='inherit' aria-label='menu' onClick={toggleDrawerOpen}>
            <MenuIcon />
          </AppMenuButton>
          <Title variant='h6'>
            <Link component={RouterLink} to='/'>
              Otohime
            </Link>
          </Title>
          <UserBox />
        </Toolbar>
      </AppBar>
      <Hidden smUp={true}>
        <AppDrawer variant='temporary' drawerOpen={drawerOpen} toggleDrawerOpen={toggleDrawerOpen} />
      </Hidden>
      <Hidden xsDown={true} implementation='css'>
        <AppDrawer variant='permanent' drawerOpen={drawerOpen} toggleDrawerOpen={toggleDrawerOpen} />
      </Hidden>
      <StyledMain>
        <Route path='/' exact={true} component={Home} />
        <Route path='/dxi' component={DxIntl} />
        <StyledFooter>
          <Typography variant='body2' color='textSecondary'>
            &copy; 2020 Otohime Team。Otohime 是一個開源專案。
            <StyledLink href='https://github.com/otohime-site/' target='_blank' rel='noopener noreferrer'>
              <GitHubIcon style={{ marginRight: '8px' }} fontSize='inherit' />
              GitHub
            </StyledLink>
            <StyledLink>關於我們</StyledLink>
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            Otohime 團隊與本站中所支援遊戲的相關遊戲公司皆無關聯。我們不為任何造成的問題提供擔保。
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            您在本站中的個人資料受台灣《個人資料保護法》和/或您居住地的個資法律保護。
          </Typography>
        </StyledFooter>
      </StyledMain>
    </div>
  )
}

export default App
