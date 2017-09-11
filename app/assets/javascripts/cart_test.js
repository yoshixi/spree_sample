$(function(){
  var globalData;
  var token = '4365a23c4588a8fb463d87416749b09f933d13ed6eed6b02'

 function ordersAjax() {
    console.log('func:ordersAjax');
    var url = `http://localhost:3000/api/v1/orders.json?token=${token}`
    $.ajax({
      type: 'put',
      url: url,
      dataType: 'json',
      timeout: 10000,
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data);
      globalData = data;
    })
    .fail(function(error){
        alert('error');
        console.log(error);
     });
 }
 $('.cart_test_btn a').on('click', function(){
  ordersAjax();
 })

})
