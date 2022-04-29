import { Container, Typography, Grid } from '@material-ui/core'

import useStyles from '../../styles'

import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

const Terms = () => {
  const classes = useStyles()

  return (
    <>
      <Navbar />

      <section id='ourTeam'>
        <Container>
          <Grid container spacing={2} className={classes.paddingY}>
            <Grid
              item
              xs={12}
              md={12}
              className={`${classes.dflex} ${classes.justifyCenter} ${classes.directionColumn} ${classes.alignCenter}`}>
              <Typography
                className={classes.uppercase}
                variant='h3'
                gutterBottom={true}
                align='center'>
                Terms of Service
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section id='cardPricing' className={classes.paddingY}>
        <Container>
          <Typography variant='h4' gutterBottom={true} align='left'>
            Terms of Service
          </Typography>

          <Typography variant='body1' gutterBottom={true} align='left'>
            These Terms govern your access to and use of processes.ai,
            processesdigitalspace.com, and the Processes for DETA Power-Up, as
            well as all content, products and services available at or though
            these websites (collectively, "Services"). These Terms also govern
            DETA members' access to and use of any features that are based on
            our Services, in particular the Processes for DETA Power-Up. Our
            Services are offered subject to your acceptance, without
            modification, of all of the terms and conditions contained herein
            and all other operating rules, policies (including, without
            limitation, processes.ai's Privacy Policy), and procedures that may
            be published from time to time by processes.ai (collectively, the
            "Agreement"). You agree that we may automatically upgrade our
            Services, and the Agreement will apply to any upgrades. Please read
            the Agreement carefully before accessing or using our Services. By
            accessing or using any part of our Services, you agree to become
            bound by the Agreement. If you do not agree to all the terms of the
            Agreement, then you may not access or use our Services.
          </Typography>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export default Terms
