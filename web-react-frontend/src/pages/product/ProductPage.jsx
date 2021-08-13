import { useState } from "react";
import BackendService from "../../services/backendService";
import ProductNavigation from "./ProductNavigation";

const fetchProductInfoAsync = async (setProductInfo) => {
  const productIdSearchParamKey = "id";
  const searchParams = new URLSearchParams(window.location.search);
  const backendService = new BackendService();
  const productId = searchParams.get(productIdSearchParamKey);
  const fetchedProductInfo = await backendService.getProductAsync(productId)
  setProductInfo(fetchedProductInfo);
}

const createProductComponent = (productInfo) => (
  <div>
    <h3>{productInfo.ProductName}</h3>
    <p>Id: {productInfo.Id}</p>
    <p>Ingredients:<br/>{productInfo.Ingredients}</p>
  </div>);

export default function ProductPage() {
  const [productInfo, setProductInfo] = useState(undefined);

  if (productInfo === undefined) {
    fetchProductInfoAsync(setProductInfo);
  }

  return (
    <div>
      <ProductNavigation/>
      {productInfo === undefined ? (<p>Loading...</p>) : createProductComponent(productInfo)}
    </div>);
}