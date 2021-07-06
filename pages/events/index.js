import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import { API_URL } from '@/config/index'


export default function EventsPage({ events }) {
    // ここでのconsole.logはクライアントサイドなので、ブラウザのconsole.logに出力される
    return (
        <Layout>
            <h1>Events</h1>
            {events.length === 0 && <h3>No events to Show</h3>}

            {events.map(evt => (
                <EventItem key={evt.id} evt={evt} />
            ))}
        </Layout>
    )
}

export async function getStaticProps() {
    //ここでのconsole.logはサーバーサイドなので、下のターミナルに出力される

    // TypeError: Only absolute URLs are supported. This error happened while generating the page. Any console logs will be displayed in the terminal window.
    // const res = await fetch('${API_URL}/api/events');
    const res = await fetch(API_URL + '/api/events');
    const events = await res.json();

    return {
        props: { events },
        revalidate: 1,
    }
}