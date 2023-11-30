import Layout from "../components/Layout"
import '../components/Home.css';
import Presentacion from '../components/Presentacion'




const Home = () => {
  return (

    <Layout>
      <div className="home">
        <Presentacion />
      </div>
    </Layout>
  )
}
export default Home;

