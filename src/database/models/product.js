'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        as: "category",
        foreignKey: "categoryId",
    });


    Product.hasOne(models.ProductStatus, {
        as: "ProductStatus",
        foreignKey: "productStatusId",
    });


    Product.hasMany(models.Size, {
        as: "size",
        foreignKey: "sizeId",
    });

    Product.hasMany(models.Cart, {
      as: "cart",
      foreignKey: "productId",
  });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
   
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};