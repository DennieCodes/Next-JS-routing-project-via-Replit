import { useRouter } from "next/router";

import styles from "../../../styles/EventsDetailPage.module.css";

export default function EventsDetailPage() {
  const eventsId = useRouter().query;

  return(
    <div className={styles.container}>
      Events Detail Page
    </div>
  )
}