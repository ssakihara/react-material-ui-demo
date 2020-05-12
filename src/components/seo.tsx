import React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const styles = () =>
  createStyles({
    root: {},
  })

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode
  title?: string
  description?: string
}

class App extends React.Component<Props> {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
                lang
              }
            }
          }
        `}
        render={data => (
          <Helmet
            htmlAttributes={{
              lang: data.site.siteMetadata.lang,
            }}
            title={this.props.title || data.site.siteMetadata.title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: this.props.description || data.site.siteMetadata.description,
              },
              {
                property: `og:title`,
                content: this.props.title || data.site.siteMetadata.title,
              },
              {
                property: `og:description`,
                content: this.props.description || data.site.siteMetadata.description,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: this.props.title || data.site.siteMetadata.title,
              },
              {
                name: `twitter:description`,
                content: this.props.description || data.site.siteMetadata.description,
              },
            ]}
          />
        )}
      ></StaticQuery>
    )
  }
}

export default withStyles(styles)(App)
