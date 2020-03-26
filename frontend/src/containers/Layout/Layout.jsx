import React from 'react'
import Grid from '@material-ui/core/Grid'

import useStyles from './styles'
import Menu from '../Menu/Menu'
import Spinner from '../../components/Spinner/Spinner'
import useDataApi from '../../utils/hooks/useDataApi'

const Layout = () => {
  const classes = useStyles()

  const { rawData, isLoading } = useDataApi({ url: '/categories', method: 'GET' })
  const categories = rawData ? rawData : []

  return (
    <Grid container className={classes.app}>
      <Grid container direction="row">
        <Grid className={classes.menu}>{isLoading ? <Spinner /> : <Menu categories={categories} />}</Grid>
        <Grid className={classes.mainSection}>Products</Grid>
      </Grid>
    </Grid>
  )
}

export default Layout
