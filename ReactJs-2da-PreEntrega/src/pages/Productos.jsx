import Layout from "../components/Layout"
import '../components/Productos.css';
import ItemListContainer from "../components/ItemListContainer";




const Productos = () => {
  return (

    <Layout>
        <>
      <div className="home-products">
        <ItemListContainer />
      </div>
      </>
    </Layout>
  )
}
export default Productos;

