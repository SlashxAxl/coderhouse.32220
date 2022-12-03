export default class Product{
    /**
   * Crea una instancia nueva de producto especificando el título,
   * descripción, precio, URL de su imagen, código SKU, y stock
   * disponible en el almacén.
   *
   * @param {string} title - Título del producto.
   * @param {string} description - Descripción del producto.
   * @param {Number} price - Precio del producto (debe ser mayo o igual a cero).
   * @param {string} thumbnail - URL a la imagen del producto.
   * @param {string} code - Código SKU del producto.
   * @param {Number} stock - Cantidad del producto disponible en el almacén.
   */
   constructor(title, description, price, thumbnail, code, stock) {
    if ((title ?? 'empty') === 'empty') {
      throw new Error('"title" es obligatorio. Por favor agrega un valor para "title".');
    }

    if ((description ?? 'empty') === 'empty') {
      throw new Error('"description" es obligatorio. Por favor agrega un valor para "description".');
    }

    if ((price ?? 'empty') === 'empty') {
      throw new Error('"price" es obligatorio. Por favor agrega un valor para "price".');
    }

    if (price < 0) {
      throw new RangeError('"price" debe tener un valor mayor a 0.');
    }

    if ((thumbnail ?? 'empty') === 'empty') {
      throw new Error('"thumbnail" es obligatorio. Por favor agrega un valor para "thumbnail".');
    }

    if ((code ?? 'empty') === 'empty') {
      throw new Error('"code" es obligatorio. Por favor agrega un valor para "code".');
    }

    if ((stock ?? 'empty') === 'empty') {
      throw new Error('"stock" es obligatorio. Por favor agrega un valor para "stock".');
    }

    if (stock < 0) {
      throw new Error('"stock" debe tener un valor mayor a 0.');
    }

    this.title = title.trim();
    this.description = description.trim();
    this.price = price;
    this.thumbnail = thumbnail.trim();
    this.code = code.trim().toUpperCase();
    this.stock = stock;
  }

}