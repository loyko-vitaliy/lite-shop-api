import React, { useState } from 'react'
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

import SubHeader from '../../components/SubHeader/SubHeader'
import ListItemLink from '../../components/ListItemLink/ListItemLink'
import categoriesPropTypes from '../../types/categoriesPropTypes'
import useStyles from './styles'

const Menu = ({ categories }) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const handleCategoriesClick = () => setOpen(!open)

  const renderRecursiveCategories = category => {
    if (category.children.length > 0) {
      return (
        <List className={classes.list}>
          {category.children.map(subcategory => (
            <ListItemLink
              key={subcategory.id}
              primary={subcategory.name}
              className={classes.listItem}
              to={`/category/${category.slug !== 'appstore' ? `${category.slug}/` : ''}${subcategory.slug}`}
            >
              {renderRecursiveCategories(subcategory)}
            </ListItemLink>
          ))}
        </List>
      )
    }
  }
  return (
    <nav>
      <List>
        <SubHeader />
        {categories.map(category => (
          <div key={category.id}>
            <ListItem button onClick={handleCategoriesClick}>
              <ListItemText primary={category.name} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse component="li" in={open} timeout="auto" unmountOnExit>
              {renderRecursiveCategories(category)}
            </Collapse>
          </div>
        ))}
      </List>
    </nav>
  )
}

Menu.propTypes = {
  categories: categoriesPropTypes
}

export default Menu
