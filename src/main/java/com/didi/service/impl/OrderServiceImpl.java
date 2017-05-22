package com.didi.service.impl;

import com.didi.bo.OrderBo;
import com.didi.dao.OrderDao;
import com.didi.entity.Order;
import com.didi.enums.IDUTIL;
import com.didi.enums.OrderStateEnum;
import com.didi.service.OrderService;
import com.didi.util.OrderIdGenerator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

/**
 * @Author: thought
 * @Description :
 * @Date : Create in 下午5:42 2017/5/3
 * @Modified By :
 */
@Service
public class OrderServiceImpl implements OrderService {

  private static final Logger _log = LoggerFactory.getLogger(OrderServiceImpl.class);
  @Autowired
  private OrderDao orderDao;

  public String  addOrder(OrderBo orderBo) {
    Order order = new Order();
    String OrderId = OrderIdGenerator.getInstance().genOrderId(IDUTIL.ORDER);
    order.setId(UUID.randomUUID().toString());
    order.setOrderId(OrderId);
    order.setUserId(orderBo.getUserId());
    order.setOerderState(String.valueOf(OrderStateEnum.CREATE.getKey()));
    order.setPhone(orderBo.getTelphone());
    order.setAddress(orderBo.getAddress());
    order.setTargetAddress(orderBo.getTargetaddress());
    _log.info("date = "+orderBo.getWannatime().toString());

    _log.info("order = "+order.toString());
    order.setTargetTime(orderBo.getWannatime());
    order.setOrderInfo(orderBo.getSomething());
    orderDao.insertSelective(order);
    return OrderId;
  }

  public List<Order> findAllOrder() {
    List<Order> orders = orderDao.findAllOrders();
    return orders;
  }

  public List<Order> findorderbystate(String oerderState) {
    List<Order> orders = orderDao.findorderbystate(oerderState);
    return orders;
  }

  public void confirmOrder(String orderId) {
    orderDao.confirmOrder(orderId);
  }

  public Order findOrderByOrderId(String orderId) {
    return orderDao.findOrderByOrderId(orderId);
  }

  public void cancleOrder(String orderId) {
    orderDao.cancleOrder(orderId);
  }

  public void resendOrder(String orderId) {
    orderDao.resendOrder(orderId);
  }

  public List<Order> findAllFinishOrders() {
    return orderDao.findAllFinishOrders();
  }
}
