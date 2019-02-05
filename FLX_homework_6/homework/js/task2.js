function discountCalculator() {
    var price = prompt('Input amount of money ', '');
    var discount = prompt('Input the discount  ', '');
    var discountPrice = price - ((price / 100) * discount);
    var savedMoney = (price / 100) * discount;

    if (price < 0 || price > 9999999 || price === '' || isNaN(price) ||
        discount < 0 || discount > 99 || discount === '' || isNaN(discount)) {
        alert('Invalid input data');
    } else {
        alert(
            ' Price without discount: ' + price +
            '\r\n Discount: ' + discount + '%' +
            '\r\n Price with discount: ' + +discountPrice.toFixed(2) +
            '\r\n Saved: ' + +savedMoney.toFixed(2)
        );
    }
}

discountCalculator()