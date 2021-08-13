import { useState } from "react";
import BackendService from "../../services/backendService";
import InformationTab from "./InformationTab/InformationTab";
import ProductNavigation from "./ProductNavigation";

const fetchProductInfoAsync = async (setProductInfo) => {
  const productIdSearchParamKey = "id";
  const searchParams = new URLSearchParams(window.location.search);
  const backendService = new BackendService();
  const productId = searchParams.get(productIdSearchParamKey);
  const fetchedProductInfo = await backendService.getProductAsync(productId)
  setProductInfo(fetchedProductInfo);
}

export default function ProductPage() {
  const [productInfo, setProductInfo] = useState(undefined);

  if (productInfo === undefined) {
    fetchProductInfoAsync(setProductInfo);
  }

  return (
    <div>
      <ProductNavigation/>
      {productInfo === undefined ? (<p>Loading...</p>) : (<InformationTab productInfo={productInfo}/>)}
    </div>);
}