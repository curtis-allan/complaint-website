import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Form from '../components/form'
import Stepper from '../components/stepper'
import {Grid} from '@material-ui/core'

const submit = () => (
  <div>
    <Head title="Submit A Complaint" />
    <Nav />
    <Grid container spacing={24}>
    <Stepper />
    </Grid>
    <Form />
  </div>
)

export default submit
