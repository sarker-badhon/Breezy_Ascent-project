import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import OpportunitiesProduct from "../OpportunitiesProduct/OpportunitiesProduct";
import ProfesionalSec from "../ProfesionalSec/ProfesionalSec";
import TriangularSolar from "../TriangularSolar/TriangularSolar";
import VrvAircon from "../VrvAircon/VrvAircon";
import LatestTrends from "../LatestTrends/LatestTrends";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <OpportunitiesProduct></OpportunitiesProduct>
            <ProfesionalSec></ProfesionalSec>
            <TriangularSolar></TriangularSolar>
            <VrvAircon></VrvAircon>
            <LatestTrends></LatestTrends>
        </div>
    );
};
export default Home;