
import DescriptionTravelTrucks from '../../components/DescriptionTravelTrucks/DescriptionTravelTrucks.jsx';
import FeaturesTravelTrucks from '../../components/FeaturesTravelTrucks/FeaturesTravelTrucks.jsx';
import ReviewsTravelTrucks from '../../components/ReviewsTravelTrucks/ReviewsTravelTrucks.jsx';
import BookCampervan from '../../components/BookCampervan/BookCampervan.jsx';
import styles from './CatalogDetailsPage.module.css';
const CatalogDetailsPage = () => {
  return (
    <div className={styles.CatalogDetailsPage}>
      <div className={styles.CatalogDetailsPageContainer}>
        <div className={styles.CatalogDetailsPageContainerBlock}>
            <DescriptionTravelTrucks />
            <FeaturesTravelTrucks />
            <ReviewsTravelTrucks />
            <BookCampervan />    
          </div>
      </div>
    </div>
  );
};

export default CatalogDetailsPage;