package com.didi.web;

import com.didi.bo.FeedBo;
import com.didi.bo.OrderBo;
import com.didi.entity.Feedback;
import com.didi.entity.Order;
import com.didi.entity.User;
import com.didi.service.FeedService;
import com.didi.service.OrderService;
import com.didi.service.UserService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * @Author: thought
 * @Description :
 * @Date : Create in 上午11:48 2017/5/2
 * @Modified By :
 */
@Controller
@RequestMapping("/feedback")
public class FeedbackController {
  private Log LOG = LogFactory.getLog(this.getClass());

  @Autowired
  private OrderService orderservice;
  @Autowired
  private UserService userservice;
  @Autowired
  private FeedService feedservice;

  @RequestMapping(value = "/addfeed", method = RequestMethod.POST)
  public String addfeed(HttpServletRequest request, @ModelAttribute("feed") FeedBo feedBo) {
    try{

      feedservice.addFeed(feedBo);
      String userId = feedBo.getUserId();

      User user = userservice.findUserByUserId(userId);

      request.setAttribute("username",user.getName());
      request.setAttribute("userId",user.getUserId());
      return "alltask";

    }catch(Exception e){
      e.printStackTrace();
      return "404";
    }

  }

  @RequestMapping(value = "/allfeed", method = RequestMethod.POST)
  public String allfeedlist(HttpServletRequest request) {
    try{
      List<Feedback> listss = new ArrayList<Feedback>();
      List<Feedback> findalllist = feedservice.findalllist();
      for (int i = 0; i < findalllist.size(); i++) {
        LOG.info("----"+findalllist.get(i).getOrderId());
      }

      listss.addAll(findalllist);
      request.setAttribute("listss",listss);
      LOG.info("what = "+listss.toArray().toString());
      return "allfeedlist";

    }catch(Exception e){
      e.printStackTrace();
      return "404";
    }

  }
}
