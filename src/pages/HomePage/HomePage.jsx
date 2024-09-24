import TravelTrucks from '../../components/TravelTrucks/TravelTrucks.jsx';
import styles from './TravelTrucks.module.css';
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.homePageContainer}>
        <div className={styles.homePageContainerBlock}>
            <TravelTrucks />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

