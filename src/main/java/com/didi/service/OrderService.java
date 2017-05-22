package com.didi.service;

import com.didi.bo.OrderBo;
import com.didi.entity.Order;

import java.util.List;

/**
 * @Author: thought
 * @Description :
 * @Date : Create in 下午5:40 2017/5/3
 * @Modified By :
 */
public interface OrderService {
  String addOrder(OrderBo orderBo);

  List<Order> findAllOrder();

  List<Order> findorderbystate(String oerderState);

  void confirmOrder(String orderId);

  Order findOrderByOrderId(String orderId);

  void cancleOrder(String orderId);

  void resendOrder(String orderId);

  List<Order> findAllFinishOrders();

}
