import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  createStyles,
  withStyles,
  WithStyles,
  CssBaseline,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { StaticQuery, graphql } from 'gatsby'

const styles = () =>
  createStyles({
    container: {
      marginTop: '20px',
    },
  })

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode
}

class App extends React.Component<Props> {
  render() {
    const { classes } = this.props
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            <CssBaseline />
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">{data.site.siteMetadata.title}</Typography>
              </Toolbar>
            </AppBar>
            <Container className={classes.container}>{this.props.children}</Container>
          </React.Fragment>
        )}
      ></StaticQuery>
    )
  }
}

export default withStyles(styles)(App)
