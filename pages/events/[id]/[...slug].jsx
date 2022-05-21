import { useRouter } from 'next/router';

import styles from '../../../styles/FilteredEventsPage.module.css';

export default function FilteredEventsPage() {
	const eventsId = useRouter().query;

	console.log(eventsId);

	return <div className={styles.container}>Filtered Events Page</div>;
}
