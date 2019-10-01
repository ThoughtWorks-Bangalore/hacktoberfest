import React from 'react'
import Layout from '../components/layout'
import { PageNav } from '../components/PageNav'

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <PageNav />
    <p>Uh oh! You've hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
