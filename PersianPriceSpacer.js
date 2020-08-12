let y = 20000000;
//Function
function PersianPriceSpacer(price, length) {
  let result = "";
  let el;
  price = price.replace(/,/g, '');
  if (typeof price == "number") price = String(price);
  for (let count = 1; count <= price.length; count++) {
    el = price.charAt(price.length - count);
    result = el + result;
    if (count % length == 0) result = "," + result;
  }
  return result[0] == "," ? result.substring(1) : result;
}
//
console.log(PersianPriceSpacer(y, 4));
