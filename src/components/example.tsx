/*eslint-disable*/
import React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'

const styles = () =>
  createStyles({
    root: {},
  })

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode
}

interface State {
  //
}

class App extends React.Component<Props, State> {
  render() {
    const { classes } = this.props
    return <div className={classes.root}>Example</div>
  }
}

export default withStyles(styles)(App)
