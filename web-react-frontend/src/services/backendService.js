const productInfo = {
  "Id": 12,
  "GuidIdentifier": "guid",
  "ProductName": "Батончик Баунті",
  "Ingredients": "Цукор, кокосова струшка, Е200, Е201, райське насолодження",
  "ManufactureDate": "10.03.2021",
  "BestBeforeDate": "10.03.2022"
};

export default class BackendService {
  async getProductAsync(id) {
    return Promise.resolve({ ...productInfo, "Id": id });
  }
}