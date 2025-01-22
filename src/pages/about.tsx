import * as React from "react"
import Layout from "../components/Layout.tsx";

// TODO
const AboutPage: React.FC = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hello About</p>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>RDJS - About</title>
