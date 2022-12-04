import { useEffect , useState , createContext } from "react";
import {Link} from "react-router-dom"
import { add , viewProduct } from "../Redux/Reducer/CardsSlice";
import { useDispatch } from "react-redux";

export const ContextData = createContext()

const Home = () => {
  const [productsData, setProductsData] = useState([]);
  const dispatch = useDispatch()

  const fetch_data = async() => {
    const respons = await fetch('https://dummyjson.com/products')
    const data = await respons.json()
    setProductsData(data.products)
  }
  
  // console.log(productsData)

  useEffect(() => {
    fetch_data()
  }, []);
  
  return (
    <>
      <section className="main--container">
      {productsData.map((item)=>{
        return(
          <article className="card" key={item.id}>
            <Link onClick={()=>dispatch(viewProduct(item))} to={`/ViewProduct/${item.category}`}>
              <img src={item.thumbnail} alt=''/>
            </Link>
                <article className="content">
                  <h3>{item.title}</h3>
                  <h5>{item.brand}</h5>
                  <h2>Price ${item.price} </h2>
                  <button className="button" onClick={()=>dispatch(add(item))}><span>Add To Cart</span></button>
                </article>
          </article>
        )
      })}
      </section>
    </>
  );
};
export default Home;