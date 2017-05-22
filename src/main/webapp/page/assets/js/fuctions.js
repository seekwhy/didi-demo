
jQuery(document).ready(function edit(orderId){
    alert(orderId);
    window.location = "http://localhost:9550/order/confirm?orderId="+orderId;
});