import * as React from "react"
import Layout from "../components/Layout.tsx";

const IndexPage: React.FC = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Discover the rhythm of Red Deer! The Red Deer Jazz Society is your gateway to the soulful sounds of live jazz, right here in the heart of Alberta. Whether you’re a lifelong jazz enthusiast or just starting to explore this vibrant genre, we’re here to bring the community together through performances, workshops, and events featuring local talents and world-class artists. Join us in celebrating the art of improvisation, creativity, and connection. Explore upcoming events, become a member, or just swing by and soak in the music. Let’s keep jazz alive and thriving in Red Deer!</p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>RDJS - Home</title>
