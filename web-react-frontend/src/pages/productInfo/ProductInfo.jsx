import { useState } from "react";
import { Link } from "react-router-dom";
import BackendService from "../../services/backendService";

export default function ProductInfo() {
  const [productInfo, setProductInfo] = useState(undefined);

  if (productInfo === undefined) {
    const productIdSearchParamKey = "id";
    const searchParams = new URLSearchParams(window.location.search);
    const backendService = new BackendService();
    const productId = searchParams.get(productIdSearchParamKey);
    backendService.getProductAsync(productId)
      .then(fetchedProductInfo => setProductInfo(fetchedProductInfo));
  }

  if (productInfo === undefined) {
    return (<p>Loading...</p>);
  }

  return (
    <div>
      <h3>{productInfo.ProductName}</h3>
      <p>Id: {productInfo.Id}</p>
      <p>Ingredients:<br/>{productInfo.Ingredients}</p>
      <Link to="/">Go to landing</Link>
    </div>
  );
}