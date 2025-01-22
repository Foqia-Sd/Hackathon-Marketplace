const productSchema = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'product_id',
        title: 'Product ID',
        type: 'string',
      },
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Product Description',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Product Price',
        type: 'number',
      },
      {
        name: 'price_id',
        title: 'Stripe Product Price ID',
        type: 'string',
      },
      {
        name: 'images',
        title: 'Product Image',
        type: 'array',
        of: [{ type: 'image' }],
      },
    ],
  };
  
  export default productSchema;
  