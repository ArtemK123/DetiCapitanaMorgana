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

let users = [
    {
      Id:1,
      Login:"Login",
      Password:"Password",
      Name:"Name",
      Surname:"Surname",
      IngredientExceptionSettings:["IngredientsTest"]
    }
]

export default class BackendService {
  async getProductAsync(id) {
    const product = products.find(currentProduct => currentProduct.Id === id);
    return Promise.resolve({ ...product, "Id": id });
  }

  async addBannedIngredientAsync(ingredient) {
    const bannedIngredients = this.__getBannedIngredients();
    bannedIngredients.push(ingredient);
    this.__saveBannedIngredients(bannedIngredients);
    return Promise.resolve();
  }

  async getBannedIngredientsAsync() {
    return Promise.resolve(this.__getBannedIngredients());
  }

  async deleteBannedIngredientAsync(ingredient) {
    const bannedIngredients = this.__getBannedIngredients().filter(elem => elem !== ingredient);
    this.__saveBannedIngredients(bannedIngredients);
    return Promise.resolve();
  }

  async login(login, password){
    return Promise.resolve(users.find(user => {
        return user.Password === password && user.Login === login;
    }))
  }

  async logoutAsync() {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("bannedIngredients");
    return Promise.resolve();
  }

  async checkBannedIngredientsInProductAsync(productId) {
    const product = await this.getProductAsync(productId);
    const bannedIngredients = this.__getBannedIngredients();
    const bannedIngredientsInProduct = product.Ingredients.filter(ingredient => bannedIngredients.includes(ingredient));
    return Promise.resolve(bannedIngredientsInProduct);
  }

  __getBannedIngredients() {
    return JSON.parse(localStorage.getItem("bannedIngredients"));
  }

  __saveBannedIngredients(bannedIngredients) {
    localStorage.setItem("bannedIngredients", JSON.stringify(bannedIngredients))
  }
}