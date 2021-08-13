const productInfo = {
  "Id": 12,
  "GuidIdentifier": "guid",
  "ProductName": "Батончик Баунті",
  "Ingredients": ['цукор', 'кокосова стружка', 'шоколад', 'Е200', 'Е201', 'райське насолодження'],
  "Weight": "55 г",
  "Nutritions": {
    "білки": "1.2 г",
    "вуглеводи": "12 г",
    "жири": "0.5 г",
    "сіль": "0.25 г",
    "клітковина": "1 г",
  },
  "Energy": {
    "калорії": "136 ккал",
    "енергія": "569 кДж"
  },
  "ManufactureDate": "10.03.2021",
  "BestBeforeDate": "10.03.2022"
};

export default class BackendService {
  async getProductAsync(id) {
    return Promise.resolve({ ...productInfo, "Id": id });
  }
}