import { Box, Typography } from "@material-ui/core";
import { useState } from "react";
import BackendService from "../../services/BackendService";
import InformationTab from "./InformationTab/InformationTab";
import IngredientsTab from "./IngregientsTab/IngredientsTab";
import NutritionTab from "./NutritionTab/NutritionTab";
import CurrentTabSelector from "./CurrentTabSelector";

const fetchProductInfoAsync = async (setProductInfo) => {
  const productIdSearchParamKey = "id";
  const searchParams = new URLSearchParams(window.location.search);
  const backendService = new BackendService();
  const productId = searchParams.get(productIdSearchParamKey);
  const fetchedProductInfo = await backendService.getProductAsync(productId)
  setProductInfo(fetchedProductInfo);
}

export default function ProductPage({isUserAuthenticated}) {
  const [productInfo, setProductInfo] = useState(undefined);
  const [currentTab, setCurrentTab] = useState(0);

  if (productInfo === undefined) {
    fetchProductInfoAsync(setProductInfo);
  }

  const generateCurrentTab = () => {
    if (productInfo === undefined) {
      return (<Typography variant="body1">Loading...</Typography>);
    }
    if (currentTab === 0) {
      return (<InformationTab productInfo={productInfo} isUserAuthenticated={isUserAuthenticated}/>);
    }
    if (currentTab === 1) {
      return (<IngredientsTab productInfo={productInfo}></IngredientsTab>)
    }
    if (currentTab === 2) {
      return (<NutritionTab productInfo={productInfo}></NutritionTab>)
    }

    setCurrentTab(0);
    return undefined;
  }

  return (
    <div>
      <CurrentTabSelector currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      <Box mx={2}>
        {generateCurrentTab()}
      </Box>
    </div>);
}