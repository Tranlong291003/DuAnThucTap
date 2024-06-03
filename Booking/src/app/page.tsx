import styles from "./Page.module.css";
export default function Page() {
  return (
    <div className={styles.body}>
      <div className={styles.text}>
        <div className={styles.text1}>Trending destinations</div>
        <div className={styles.text2}>
          Most popular choices for travellers from Vietnam
        </div>
      </div>
      <div className={styles.destination}>
        <div className={styles.destination2}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o="
            alt=""
          />
          <p>Da Nang</p>
        </div>
        <div className={styles.destination2}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o="
            alt=""
          />
          <p>Da Nang</p>
        </div>
      </div>
      <div className={styles.destination}>
        <div className={styles.destination3}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o="
            alt=""
          />
          <p>Da Nang</p>
        </div>
        <div className={styles.destination3}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o="
            alt=""
          />
          <p>Da Nang</p>
        </div>
        <div className={styles.destination3}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o="
            alt=""
          />
          <p>Da Nang</p>
        </div>
      </div>
    </div>
  );
}
