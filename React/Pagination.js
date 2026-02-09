/*

We are working on a back-office application that displays products available for purchase on our company's website.

We would like to add pagination to the ListProducts page. The list should only show 10 products at a time, and the page should have links or buttons for navigating backwards and forwards in the list.

*/

import React, {useEffect, useState, useCallback} from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

const useFetch = (url, method) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: ''
  });

  useEffect(() => {
    (async () => {
      let response = await fetch(url, { method });
      if(!response.ok) {
        setState({
          data: null,
          loading: false,
          error: 'An error occurred'
        });
      }
      let data = await response.json();
      setState({
        data,
        loading: false,
        error: ''
      });
    })();
  }, [url, method])

  return state;
}

const ViewProduct = ({id}) => {
  const {data, error, loading} = useFetch("https://dummyjson.com/products/" + id);
 
  if(loading) return <div>Loading...</div>
  if(error) return <div>Error!</div>

  return (
    <>
      <h1>{data.title}</h1>
      <div>Category: {data.category}</div>
      <div>Price: ${data.price.toFixed(2)}</div>
      <div>Description: {data.description}</div>
      <div><img src={data.thumbnail} /></div>
    </>
  );
}

const PRODUCT_PER_PAGE = 10;

const ListProducts = ({changeLocation}) => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(0);
  const [currentpageProduct, setCurrentPageProduct] = useState([]);

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error!</div>
  
  useEffect(() => {
    const {loading, error, data} = useFetch("https://dummyjson.com/products");
    setCurrentPageProduct(data.products.slice(0, PRODUCT_PER_PAGE))
    setData(data);
  }, [])
  
  function handleNext() {
    const newPage = page + 1;
    const newProducts = data.products.slice(page*PRODUCT_PER_PAGE, newPage*PRODUCT_PER_PAGE);
    setPage(newPage);
    setCurrentPageProduct(newProducts);
    console.log(newPage)
  }
  
  function handlePrev() {
    const newPage = page - 1;
    setPage(newPage);
    console.log(newPage)
  }
  

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {currentpageProduct.map(product => (
          <li>
            <a className="link" onClick={() => changeLocation("view", {id: product.id})}>
              {product.title}
            </a>
          </li>
        ))}
      </ul>
      <div>
          {page > 0 && <button onClick={handlePrev}>Prev</button>}
          <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

const App = () => {
  const [location, setLocation] = useState({ page: "list", params: {} });
 
  const changeLocation = useCallback((page, params) => {
    setLocation({page, params: params || {}});
  }, [setLocation])
 
  return (
    <div className="App">
      {location.page === "list" && <ListProducts changeLocation={changeLocation} />}
      {location.page === "view" && <ViewProduct id={location.params.id}/>}
      { location.page !== "list" && (
        <div>
          <a className="link" onClick={() => changeLocation("list")}>Return to list</a>
        </div>
      )}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))