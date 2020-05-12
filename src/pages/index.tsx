import React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'
import Layout from '@/layouts'
import SEO from '@/components/seo'

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
        <SEO title="Top" />
      </Layout>
    )
  }
}

export default withStyles(styles)(App)
