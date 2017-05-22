package com.didi.web;

import com.didi.bo.OrderBo;
import com.didi.entity.Order;
import com.didi.entity.User;
import com.didi.enums.OrderStateEnum;
import com.didi.service.OrderService;
import com.didi.service.UserService;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

/**
 * @Author: thought
 * @Description :
 * @Date : Create in 上午11:47 2017/5/2
 * @Modified By :
 */
@Controller
@RequestMapping("/order")
public class OrderController {

  private Log _log = LogFactory.getLog(OrderController.class);

  @Autowired
  private OrderService orderservice;
  @Autowired
  private UserService userservice;

  @RequestMapping(value = "/addorder")
  public String list(HttpServletRequest request, @ModelAttribute("order") OrderBo orderBo) {
    try {
      String orderId = orderservice.addOrder(orderBo);
      String userId = orderBo.getUserId();

      List<Order> orderList = orderservice.findAllOrderByUserId(userId);

      request.setAttribute("orderList", orderList);

      return "orderlist";

    } catch (Exception e) {
      e.printStackTrace();
      return "404";
    }

  }

  @RequestMapping(value = "/notgrab")
  public String weiqiangdan(HttpServletRequest request, String userId, HttpServletResponse response) {
    try {
      _log.info("userId " + userId);
      String[] userIds = userId.split("/");
      for (int i = 0; i < userIds.length; i++) {
        userId = userIds[i];
      }
      List<Order> lists = new ArrayList<Order>();
      List<Order> orders = orderservice.findNotgragOrdersByUidAndState(userId);
      if (orders.size() > 0) {
        lists.addAll(orders);
      }
      request.setAttribute("lists", lists);

      return "notgrab";

    } catch (Exception e) {
      e.printStackTrace();
      return "404";
    }

  }

  @RequestMapping(value = "/notget", method = RequestMethod.POST)
  public String daishoudingdan(HttpServletRequest request, HttpServletResponse response) {
    try {
      List<Order> lists = new ArrayList<Order>();
      String orderState = String.valueOf(OrderStateEnum.GRAB.getKey());
      List<Order> orderList = orderservice.findorderbystate(orderState);
      if (orderList.size() > 0) {
        lists.addAll(orderList);
      }
      request.setAttribute("lists", lists);

      return "waitorder";

    } catch (Exception e) {
      e.printStackTrace();
      return "404";
    }

  }

  @RequestMapping(value = "/waitconfirmorder", method = RequestMethod.POST)
  public String daiquerendingdan(HttpServletRequest request, HttpServletResponse response) {
    try {
      List<Order> lists = new ArrayList<Order>();
      String orderState = String.valueOf(OrderStateEnum.CREATE.getKey());
      List<Order> orderList = orderservice.findorderbystate(orderState);
      if (orderList.size() > 0) {
        lists.addAll(orderList);
      }
      request.setAttribute("lists", lists);

      return "waitconfirmorder";

    } catch (Exception e) {
      e.printStackTrace();
      return "404";
    }

  }

  @RequestMapping(value = "/watchorder")
  public String chakandingdan(HttpServletRequest request,String userId) {
    try {
      String[] userIds = userId.split("/");
      for (int i = 0; i < userIds.length; i++) {
        userId = userIds[i];
      }
      List<Order> lists = new ArrayList<Order>();
      List<Order> orderList = orderservice.findAllFinishOrdersByUserId(userId);
      if (orderList.size() > 0) {
        lists.addAll(orderList);
      }
      request.setAttribute("orderList", lists);

      return "orderlist";

    } catch (Exception e) {
      e.printStackTrace();
      return "404";
    }

  }

  @RequestMapping(value = "/addorderpage")
  public String addorderpage(HttpServletRequest request, String userId,String userName) {
    try {
      _log.info("userId =" + userId+" usreName = "+userName);
      String[] userIds = userId.split("/");
      for (int i = 0; i < userIds.length; i++) {
        userId = userIds[i];
      }
      if (!StringUtils.isBlank(userId)) {
        User user = userservice.findUserByUserId(userId);
        request.setAttribute("username", user.getName());
        request.setAttribute("userId", user.getUserId());
      }

      return "order";

    } catch (Exception e) {
      e.printStackTrace();
      return "404";
    }

  }

  @RequestMapping(value = "/confirm")
  public String confirm(HttpServletRequest request, String orderId) throws Exception {
    User user = null;
    try {
      _log.info("待确认的订单" + orderId);
      orderservice.confirmOrder(orderId);
      Order order = orderservice.findOrderByOrderId(orderId);
      String userId = order.getUserId();
      user = userservice.findUserByUserId(userId);

      if (user != null) {
        request.setAttribute("username", user.getName());
        request.setAttribute("userId", user.getUserId());
      }

      return "alltask";

    } catch (Exception e) {
      e.printStackTrace();
      return "404";
    }

  }

  @RequestMapping(value = "/cancle")
  public String cancle(HttpServletRequest request, String orderId) throws Exception {
    User user = null;
    try {
      _log.info("待取消的订单" + orderId);
      orderservice.cancleOrder(orderId);
      Order order = orderservice.findOrderByOrderId(orderId);
      String userId = order.getUserId();
      user = userservice.findUserByUserId(userId);

      if (user != null) {
        request.setAttribute("username", user.getName());
        request.setAttribute("userId", user.getUserId());
      }

      return "alltask";

    } catch (Exception e) {
      e.printStackTrace();
      return "404";
    }

  }


  @RequestMapping(value = "/resend")
  public String resend(HttpServletRequest request, String orderId) throws Exception {
    User user = null;
    try {
      _log.info("重新发送的订单" + orderId);
      orderservice.resendOrder(orderId);
      Order order = orderservice.findOrderByOrderId(orderId);
      String userId = order.getUserId();
      user = userservice.findUserByUserId(userId);

      if (user != null) {
        request.setAttribute("username", user.getName());
        request.setAttribute("userId", user.getUserId());
      }

      return "alltask";

    } catch (Exception e) {
      e.printStackTrace();
      return "404";
    }

  }

  @RequestMapping(value = "/addfeed")
  public String daishoudingdan(HttpServletRequest request, String orderId, String userId) {
    try {
      User user = userservice.findUserByUserId(userId);

      if (user != null) {
        request.setAttribute("username", user.getName());
      }

      request.setAttribute("orderId", orderId);
      request.setAttribute("userId", userId);

      return "addfeed";

    } catch (Exception e) {
      e.printStackTrace();
      return "404";
    }

  }
}
