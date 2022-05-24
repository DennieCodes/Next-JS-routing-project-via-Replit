import EventItem from './EventItem';
import styles from './EventList.module.css';

export default function EventList(props) {
	const { items } = props;

	console.log(items[0].date);

	return (
		<ul className={styles.list}>
			{items.map((event) => (
				<EventItem
					key={event.id}
					id={event.id}
					title={event.title}
					location={event.location}
					date={event.date}
					image={event.image}
				/>
			))}
		</ul>
	);
}
