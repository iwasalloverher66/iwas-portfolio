import Layout from '@/app/layout/layout'
import AppRouter from '@/app/router/app-router'
import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Layout>
        <AppRouter />
      </Layout>
    </Router>
  )
}
