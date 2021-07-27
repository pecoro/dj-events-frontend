import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import Pagenation from '@/components/Pagenation'
import { API_URL, PER_PAGE} from '@/config/index'

export default function EventsPage({ events, page, total }) {
    // ここでのconsole.logはクライアントサイドなので、ブラウザのconsole.logに出力される
    // console.log('fronend' + events);
    // console.log('frontend' + JSON.stringify(events));
    return (
        <Layout>
            <h1>Events</h1>
            {events.length === 0 && <h3>No events to Show</h3>}

            {events.map((evt) => (
                <EventItem key={evt.id} evt={evt} />
            ))}

            <Pagenation page={page} total={total}/>
        </Layout>
    )
}

export async function getServerSideProps({query:{page=1}}) {
    //ここでのconsole.logはサーバーサイドなので、下のターミナルに出力される

    //Calculate start page
    const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

    // Fetch total/count
    const totalRes = await fetch(
        `${API_URL}/events/count`
    );
    const total = await totalRes.json();


    // fetch events
    const eventRes = await fetch(
        `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
        );
    const events = await eventRes.json();

    // console.log('backend' + events);
    // console.log('backend' + JSON.stringify(events));

    return {
        props: { events , page: +page, total},
    }
}