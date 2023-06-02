$(window).on("hashchange", function () {
    if (window.location.hash == "#/shipping") {
      fetch(
        `/api/checkout/pub/orderForm/${vtexjs.checkout.orderForm.orderFormId}/attachments/shippingData`,
        {
          body: '{"selectedAddresses":[{"addressType":"residential","receiverName":"VTEX","addressId":"","isDisposable":true,"postalCode":"10017","city":"New York","state":"NY","country":"USA","geoCoordinates":[-73.97682019999999,40.7572742],"street":"12 E 49th St","number":"","neighborhood":"Manhattan","complement":"","reference":null,"addressQuery":"12 E 49th St, New York, NY 10017, USA"}],"clearAddressIfPostalCodeNotFound":false}',
          method: "POST",
          mode: "cors",
          credentials: "include",
        }
      )
        .then((response) => response.json())
        .then(function (data) {
          vtexjs.checkout.getOrderForm().done(function() {
              window.location.href = '#/payment';
          });
        });
    }
  });