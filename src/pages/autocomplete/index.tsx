import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { createFilterOptions } from '@material-ui/lab/Autocomplete'
import {
  Container,
  Grid,
  TextField,
  createStyles,
  withStyles,
  WithStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from '@material-ui/core'
import { User } from '@/types/User'
import Layout from '@/layouts'

const styles = () =>
  createStyles({
    root: { marginTop: '100px' },
    table: {},
  })

const filterOptions = createFilterOptions<User>({
  matchFrom: 'any',
  stringify: option => option.name + option.kana, //ヒットさせたい文字列を追加する
})

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode
}
interface State {
  users: User[]
  currentUser: User | null
}

class App extends React.Component<Props, State> {
  // eslint-disable-next-line
  constructor(props: Props, context?: any) {
    super(props, context)
    this.state = { users: [], currentUser: null }
  }
  render() {
    const { classes } = this.props
    const table = this.state.currentUser != null && (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>項目</TableCell>
              <TableCell>値</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>ユーザ名</TableCell>
              <TableCell>{this.state.currentUser.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ふりがな</TableCell>
              <TableCell>{this.state.currentUser.kana}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>生年月日</TableCell>
              <TableCell>{this.state.currentUser.birthday}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    )
    return (
      <Layout>
        <Grid container justify="center" alignContent="center" className={classes.root} spacing={4}>
          <Grid item xs={12}>
            <Typography align="center" variant={'h4'} component={'h1'}>
              オートコンプリートでふりがなもヒットさせる
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Autocomplete
                filterOptions={filterOptions}
                id="search-user"
                options={this.state.users}
                getOptionLabel={option => option.name}
                noOptionsText="ユーザが見つかりません"
                renderInput={params => <TextField {...params} label="Search user" variant="outlined" />}
                // eslint-disable-next-line
              onChange={(event: any, newValue: User | null) => {
                  this.setState({ currentUser: newValue })
                }}
              />
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container>{table}</Container>
          </Grid>
        </Grid>
      </Layout>
    )
  }
  componentDidMount() {
    const users: User[] = [
      {
        name: '田中',
        kana: 'たなか',
        birthday: '2000-1-1',
      },
      {
        name: '木村',
        kana: 'きむら',
        birthday: '2001-1-1',
      },
      {
        name: '鈴木',
        kana: 'すずき',
        birthday: '2002-1-1',
      },
    ]
    this.setState({ users })
  }
}

export default withStyles(styles)(App)
