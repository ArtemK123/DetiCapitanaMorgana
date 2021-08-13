const productInfo = {
  "Id": 12,
  "GuidIdentifier": "guid",
  "ProductName": "ProductName",
  "Ingredients": "IngredientsTest",
  "ManufactureDate": "10.03.2021",
  "BestBeforeDate": "10.03.2021"
};

export default class BackendService {
  async getProductAsync(id) {
    return Promise.resolve({ ...productInfo, "Id": id });
  }
}