// temp database


  class Product {
    constructor(data) {
      this.name = data.name;
      this.price = data.price;
      this.image = data.image;
      this.id = this.#generateId();
    }
  
    /**
     * @description This is a private method that returns an unique id
     * @param {number} len
     * @returns string
     */
  
    #generateId(len = 10) {
      const characters = "qwertyuio1p2a3s4d5f6g7h8j9k0lzxcvbnm";
      let uid = "";
  
      for (let count = 0; count < len; count++) {
        const character = Math.floor(Math.random() * characters.length);
        uid += characters[character];
      }
  
      return uid;
    }
  }
  
  class Collection {
    #Model;
    #items;
    constructor(model, startingData) {
      this.#Model = model;
      this.#items = startingData.map(item => new this.#Model(item));
    }
  
    /**
     * @description Will return an array with all items availible in this.items
     * @returns array
     */
  
    find() {
      return this.#items;
    }
  
    /**
     * @description Will return item match with the itemId
     * @param { string } itemId
     * @param { function } callBack Will return error or item
     * @returns function;
     */
    findById(itemId, callBack) {
      if (!itemId) return console.log("missing id in first argument");
  
      if (typeof callBack !== "function") {
        return console.log("missing function in second argument");
      }
  
      const item = this.#items.find(({ id }) => id === itemId);
      let error;
  
      if (!item) {
        error = { message: `item can't be found` };
      }
  
      return callBack(error, item);
    }
  }
  
  module.exports = new Collection(Product, [
    {
      name: "Internet Friends",
      price: 29,
      image:
        "https://cdn.shopify.com/s/files/1/1297/1509/products/hero1_6de889fb-b540-49e4-b733-3af0baaa7f63_x1440.jpg?v=1571274629",
    },
    {
      name: "Angry Pants",
      price: 35,
      image:
        "https://cdn.shopify.com/s/files/1/1297/1509/products/HERO_c5b0ec76-ad06-4cc7-a165-6129e11a8ff6_x1440.jpg?v=1571274622",
    },
    {
      name: "Dead Cool",
      price: 50,
      image:
        "https://cdn.shopify.com/s/files/1/1297/1509/products/hero1_40030160-f468-4d50-8f30-c8b9733ce84e_x1440.jpg?v=1575020412",
    },
  ]);

  
