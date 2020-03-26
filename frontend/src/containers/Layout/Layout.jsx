import React from 'react'
import Grid from '@material-ui/core/Grid'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import useStyles from './styles'
import Menu from '../Menu/Menu'
import Spinner from '../../components/Spinner/Spinner'
import CategoryPage from '../CategoryPage/CategoryPage'
import useDataApi from '../../utils/hooks/useDataApi'

const Layout = () => {
  const classes = useStyles()

  const { rawData, isLoading } = useDataApi({ url: '/categories', method: 'GET' })
  const categories = rawData ? rawData : []

  return (
    <Router>
      <Grid container className={classes.app}>
        <Grid container direction="row">
          <Grid className={classes.menu}>{isLoading ? <Spinner /> : <Menu categories={categories} />}</Grid>
          <Grid className={classes.mainSection}>
            <Switch>
              <Route exact path="/">
                Main page
              </Route>
              <Route path="/category/:parent?/:name">
                <CategoryPage />
              </Route>
              <Route>404</Route>
            </Switch>
          </Grid>
        </Grid>
      </Grid>
    </Router>
  )
}

export default Layout
