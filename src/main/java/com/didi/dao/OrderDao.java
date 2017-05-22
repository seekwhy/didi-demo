package com.didi.dao;

import com.didi.entity.Order;
import com.didi.entity.OrderExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface OrderDao {
    long countByExample(OrderExample example);

    int deleteByExample(OrderExample example);

    int deleteByPrimaryKey(String id);

    int insert(Order record);

    int insertSelective(Order record);

    List<Order> selectByExample(OrderExample example);

    Order selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") Order record, @Param("example") OrderExample example);

    int updateByExample(@Param("record") Order record, @Param("example") OrderExample example);

    int updateByPrimaryKeySelective(Order record);

    int updateByPrimaryKey(Order record);

    List<Order> findAllOrders();

    List<Order> findAllFinishOrders();

    List<Order> findorderbystate(String oerderState);

    void confirmOrder(String orderId);

    Order findOrderByOrderId(String orderId);

    void cancleOrder(String orderId);

    void resendOrder(String orderId);
}