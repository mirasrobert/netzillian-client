import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  primaryBgBlue: {
    backgroundColor: '#0462DE',
  },
  primaryColorBlue: {
    color: '#0462DE',
  },
  White: {
    color: '#fff',
  },
  GrayishWhite: {
    color: '#f2f2f2',
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
  bgGrayishWhite: {
    backgroundColor: '#f2f2f2',
  },
  dflex: {
    display: 'flex',
  },
  directionColumn: {
    flexDirection: 'column',
  },
  hidden: {
    height: 0,
    display: 'none',
  },
  hAuto: {
    height: 'auto',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyCenter: {
    justifyContent: 'space-center',
  },
  centerFlex: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  paddingX: {
    padding: '0px 10px',
  },
  paddingAround: {
    padding: '30px',
  },
  paddingSmallAround: {
    padding: '15px',
  },
  textDecoration: {
    textDecoration: 'none',
  },
  listStyleNone: {
    listStyle: 'none',
  },
  wFull: {
    width: '100%',
  },
  wHalf: {
    width: '50%',
  },
  wQuarter: {
    width: '25%',
  },
  w75: {
    width: '75%',
  },
  vidSize: {
    width: '100%',
    height: '250px',
  },
  marginY: {
    margin: '40px 0',
  },
  paddingY: {
    padding: '40px 0',
  },
  marginBottom: {
    marginBottom: '25px',
  },
  paddingMed: {
    paddingBottom: '12px',
  },
  marginTop: {
    marginTop: '25px',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  fontLg: {
    margin: 0,
    fontSize: '50px',
  },
  fontMed: {
    margin: 0,
    fontSize: '25px',
  },
  fontSmall: {
    margin: 0,
    fontSize: '15px',
  },
  fontBold: {
    fontWeight: 'bold',
  },
  borderPrimaryTop: {
    borderTop: '2px solid #0462DE',
  },
  borderPrimaryBottom: {
    borderBottom: '2px solid #0462DE',
  },
  borderPrimaryY: {
    borderTop: '2px solid #0462DE',
    borderBottom: '2px solid #0462DE',
  },
}))

export default useStyles
