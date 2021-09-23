// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
 
});
// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  foreignKey: 'tag_id',
  through: ProductTag
});
// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  foreignKey: 'product_id',
  through: ProductTag
});

// A reader can have many books


// A book belongs to a single reader



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
