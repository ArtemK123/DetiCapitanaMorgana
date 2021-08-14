const products = [
  {
    "Id": "1",
    "ProductName": "Батончик Баунті",
    "Ingredients": ['цукор', 'кокосова стружка', 'шоколад', 'Е200', 'Е201', 'райське насолодження'],
    "Amount": "55 г",
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
    "BestBeforeDate": "10.03.2022",
    "ImageHref": "https://economycandy.com/wp-content/uploads/2019/07/products-Bounty-Milk-Chocolate-Bar-1.jpg"
  },
  {
    "Id": "2",
    "ProductName": "Напій безалкогольний сильногазований на ароматизаторах Кока-Кола",
    "Ingredients": ['вода питна', 'цукор', 'діоксид вуглецю', 'барвник', 'цукровий колер', 'кофеїн'],
    "Amount": "500 мл",
    "Nutritions": {
      "білки": "0 г",
      "вуглеводи": "10.6 г",
      "цукри": "10.6 г",
      "жири": "0 г",
      "сіль": "0 г"
    },
    "Energy": {
      "калорії": "42 ккал",
      "енергія": "180 кДж"
    },
    "ManufactureDate": "08.08.2021",
    "BestBeforeDate": "07.02.2022",
    "ImageHref": "https://arshbaba.com/wp-content/uploads/2021/01/Coca-Cola-Bottle-350ml35.jpg"
  },
  {
    "Id": "3",
    "ProductName": "Напій безалкогольний сильногазований Фанта з апельсиновим соком",
    "Ingredients": ['вода питна', 'цукор', 'сік апельсиновий', 'діоксид вуглецю',  'лимонна кислота', 'регулятор кислотності', 'клюконат натрію', 'підсоложувач'],
    "Amount": "500 мл",
    "Nutritions": {
      "білки": "0 г",
      "вуглеводи": "7.9 г",
      "цукри": "7.9 г",
      "жири": "0 г",
      "сіль": "0.01 г"
    },
    "Energy": {
      "калорії": "33 ккал",
      "енергія": "140 кДж"
    },
    "ManufactureDate": "04.08.2021",
    "BestBeforeDate": "03.02.2022",
    "ImageHref": "https://i2.wp.com/partydrinks9ja.com/wp-content/uploads/2020/06/fanta-pet-2.jpg?fit=500%2C500&ssl=1"
  }
];

export default class BackendService {
  constructor() {
    this.bannedIngredients = ["цукор", "кофеїн"];
  }

  async getProductAsync(id) {
    const product = products.find(currentProduct => currentProduct.Id === id);
    return Promise.resolve({ ...product, "Id": id });
  }

  async addBannedIngredientAsync(ingredient) {
    this.bannedIngredients.push(ingredient);
    return Promise.resolve();
  }

  async getBannedIngredientsAsync() {
    return Promise.resolve(this.bannedIngredients);
  }

  async deleteBannedIngredientAsync(ingredient) {
    this.bannedIngredients = this.bannedIngredients.filter(elem => elem !== ingredient);
    return Promise.resolve();
  }
}