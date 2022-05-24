import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

import styles from '../../styles/EventsDetailPage.module.css';

export default function EventsDetailPage() {
	const router = useRouter().query;

	// console.log(`The Router: ${router.eventId}`);

	const eventId = router.eventId;
	const event = getEventById(eventId);

	if (!event) {
		return <p>No event found!</p>
	}
	// return <Fragment>H</Fragment>
	return (
		<Fragment>
			<EventSummary title={event.title}/>
			<EventLogistics 
				date={event.date} 
				address={event.location} 
				image={event.image} 
				imageAlt={event.title}/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</Fragment>
	);
}