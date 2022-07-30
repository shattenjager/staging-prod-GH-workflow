import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.css"
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to the GitHub workflow demo</h1>
      <p>This is a landing page</p>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage
