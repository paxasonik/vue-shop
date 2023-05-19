
const declOfProduct: string[] = ['товар', 'товара', 'товаров'];

const paginationDisabledClass :string = 'pagination__link--disabled';
const paginationCurrentClass :string = 'pagination__link--current';
const pageOne :number = 1;
const productsPerPage :number = 6;
const maxDisplayedPages :number = 10;

interface Emit {
  UPDATE_PAGE: string;
  [key: string]: any;
}

const Emit :Emit = {
  UPDATE_PAGE: 'update:page',
};

export {
  declOfProduct,
  paginationDisabledClass,
  paginationCurrentClass,
  pageOne,
  productsPerPage,
  maxDisplayedPages,
  Emit,
};