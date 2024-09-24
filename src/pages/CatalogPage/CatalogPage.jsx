import LocationTravelTrucks from '../../components/LocationTravelTrucks/LocationTravelTrucks.jsx';
import VehicleEquipment from '../../components/VehicleEquipment/VehicleEquipment.jsx';
import VehicleType from '../../components/VehicleType/VehicleType.jsx';
import DescriptionTravelTrucks from '../../components/DescriptionTravelTrucks/DescriptionTravelTrucks.jsx';
import ListServices from '../../components/ListServices/ListServices.jsx';
import styles from './CatalogPage.module.css';
const CatalogPage = () => {
  return (
    <div className={styles.CatalogPage}>
      <div className={styles.CatalogPageContainer}>
        <div className={styles.CatalogPageContainerBlock}>
            <LocationTravelTrucks />
            <VehicleEquipment />
            <VehicleType />    
            <DescriptionTravelTrucks />
            <ListServices />
          </div>
      </div>
    </div>
  );
};

export default CatalogPage;
