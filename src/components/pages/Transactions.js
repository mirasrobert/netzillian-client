import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useHistory } from 'react-router-dom'

import axios from 'axios'

import Navbar from '../other/Navbar'

import Footer from '../layouts/Footer'

import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Paper,
  Container,
  Card,
  CardContent,
} from '@material-ui/core'

import CircularProgress from '@material-ui/core/CircularProgress'

const Transactions = () => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)
  const [tableData, setTableData] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(3)
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage)

  const { user, isAuthenticated } = useSelector((state) => state.auth)

  const history = useHistory()

  useEffect(() => {
    document.title = `${process.env.REACT_APP_NAME} | Billing`

    if (!isAuthenticated) {
      history.push('/login')
    }

    const fetchTransactions = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/transactions`
      )
      setTableData(res.data)
      setLoading(false)
    }

    fetchTransactions()
  }, [])

  return (
    <>
      <div className='dashboard-and-navbar'>
        <Navbar />
        <section className='billing'>
          <Container>
            <h1 className='mb-3'>Transactions</h1>

            {loading ? (
              <CircularProgress className='dashboard-loading' />
            ) : (
              <Card className='mb-5'>
                <CardContent>
                  <TableContainer>
                    <Table aria-label='transaction table'>
                      <TableHead>
                        <TableRow>
                          <TableCell>Transaction ID</TableCell>
                          <TableCell align='right'>Plan</TableCell>
                          <TableCell align='right'>Amount</TableCell>
                          <TableCell align='right'>Payment Method</TableCell>
                          <TableCell align='right'>Date</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {tableData
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row, index) => (
                            <TableRow key={row.transactionId}>
                              <TableCell component='th' scope='row'>
                                {row.transactionId}
                              </TableCell>
                              <TableCell align='right'>{row.plan}</TableCell>
                              <TableCell align='right'>{row.amount}</TableCell>
                              <TableCell align='right'>
                                {row.paymentMethod}
                              </TableCell>
                              <TableCell align='right'>
                                {row.createdAt}
                              </TableCell>
                            </TableRow>
                          ))}

                        {emptyRows > 0 && (
                          <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                    <TablePagination
                      rowsPerPageOptions={[3, 10]}
                      component='div'
                      count={tableData.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                  </TableContainer>
                </CardContent>
              </Card>
            )}
          </Container>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default Transactions
