import React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'
import { Grid, Typography } from '@material-ui/core'
import Layout from '@/layouts'

const styles = () =>
  createStyles({
    root: {},
  })

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode
}

class App extends React.Component<Props> {
  render() {
    return (
      <Layout>
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h4" component="h1">
              404 not found
            </Typography>
          </Grid>
        </Grid>
      </Layout>
    )
  }
}

export default withStyles(styles)(App)
