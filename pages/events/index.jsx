
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';

export default function AllEventsPage() {
	const events = getAllEvents();
	
	return (
		<>
			<EventSearch />
			<EventList items={events} />
		</>
	);
}
