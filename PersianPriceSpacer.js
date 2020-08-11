let y = 20000000;
//Function
function PersianPriceSpacer(price, length) {
  let result = "";
  let el;
  if (typeof price == "number") {
    price = String(price)
  }
  for (let count = 1; count <= price.length; count++) {
    el = price.charAt(price.length - count);
    result = el + result;
    if (count % length == 0) result = "," + result;
  }
  if(result[0] == ",") return result.substring(1)
  return result;
}
//
console.log(PersianPriceSpacer(y, 4));
