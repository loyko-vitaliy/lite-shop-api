import React from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from '@material-ui/core'

import useStyles from './styles'

const CategoryPage = () => {
  const { parent, name } = useParams()
  const path = parent ? `${parent}/${name}` : `${name}`
  const classes = useStyles()

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.categoryPage}>
      <div>Category page for {path}</div>
    </Grid>
  )
}

export default CategoryPage
