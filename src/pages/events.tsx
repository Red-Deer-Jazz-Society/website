import * as React from "react"
import Layout from "../components/Layout.tsx";

const EventPage: React.FC = () => {
  return (
    <Layout pageTitle="Events Page">
      <p>Welcome to the official RDJS schedule! You can find more information about concerts, community events and fundraising from the calendar below:</p>
      <iframe src="https://calendar.google.com/calendar/embed?src=0e9dcf8a5decb8b677c3f82954596f7195cb1d7a9d83bd1c609556b29ebadcc1%40group.calendar.google.com&ctz=America%2FNipigon"></iframe>
    </Layout>
  )
}

export default EventPage

export const Head = () => <title>RDJS - Events</title>
