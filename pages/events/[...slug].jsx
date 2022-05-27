import { useRouter } from 'next/router';

export default function FilteredEventsPage() {
	const eventsId = useRouter().query;

	console.log(eventsId);

	return (
		<div>
		</div>
	);
}
