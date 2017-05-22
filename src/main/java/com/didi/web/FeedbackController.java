package com.didi.web;

import com.didi.bo.FeedBo;
import com.didi.entity.Feedback;
import com.didi.entity.User;
import com.didi.service.FeedService;
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

import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

/**
 * @Author: thought
 * @Description :
 * @Date : Create in 上午11:48 2017/5/2
 * @Modified By .
 */
@Controller
@RequestMapping("/feedback")
public class FeedbackController {

  private Log _log = LogFactory.getLog(FeedbackController.class);

  @Autowired
  private OrderService orderservice;
  @Autowired
  private UserService userservice;
  @Autowired
  private FeedService feedservice;

  /**
   *
   * @param request not null
   * @param feedBo not null
   * @return null  .
   */
  @RequestMapping(value = "/addfeed", method = RequestMethod.POST)
  public String addfeed(HttpServletRequest request, @ModelAttribute("feed") FeedBo feedBo) {
    try {

      feedservice.addFeed(feedBo);
      String userId = feedBo.getUserId();

      User user = userservice.findUserByUserId(userId);

      request.setAttribute("username", user.getName());
      request.setAttribute("userId", user.getUserId());
      return "alltask";

    } catch (Exception e) {
      e.printStackTrace();
      return "404";
    }

  }

  /**
   *
   * @param request not null
   * @param userId not null
   * @param orderId not null
   * @return null .
   */
  @RequestMapping(value = "/allfeed", method = RequestMethod.POST)
  public String allfeedlist(HttpServletRequest request, String userId, String orderId) {
    try {
      if (!StringUtils.isBlank(userId)) {
        List<Feedback> listss = new ArrayList<Feedback>();
        String[] userIds = userId.split("/");
        for (int i = 0; i < userIds.length; i++) {
          userId = userIds[i];
        }
        List<Feedback> findalllist = feedservice.findalllistByUserId(userId);
        for (int i = 0; i < findalllist.size(); i++) {
          _log.info("----" + findalllist.get(i).getOrderId());
        }
        listss.addAll(findalllist);
        request.setAttribute("listss", listss);
        _log.info("what = " + listss.toArray().toString());
      }

      return "allfeedlist";

    } catch (Exception e) {
      e.printStackTrace();
      return "404";
    }

  }
}
