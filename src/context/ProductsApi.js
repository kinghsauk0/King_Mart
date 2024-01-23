import axios from "axios";
import { createContext, useContext, useState } from "react";


export const ProductsDataContext = createContext({
    productData: [],
    ProductApiCall: ()=>{},
})

export const  ProductsDataProvider = ({ children }) => {
  
  const [productData, setProductData] = useState([]);

  
  const ProductApiCall = async (Url) => {
    const options = {
        method: 'GET',
        url: Url
       }
       try{
        const response = await axios.request(options)
        return setProductData(response.data)
       }catch(e){
        setProductData(e)
        return null
       }
  };


  return(
    <ProductsDataContext.Provider value={{productData,ProductApiCall}}>
        {children}
    </ProductsDataContext.Provider>
  )
};

export const UseProuductContext =() => {
    return useContext(ProductsDataContext)
}