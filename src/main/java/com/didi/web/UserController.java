package com.didi.web;

import com.didi.bo.UserBo;
import com.didi.entity.User;
import com.didi.service.UserService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

/**
 * @author thought。
 * @create 2017-05-02 上午11:30
 **/
@Controller
@RequestMapping("/user")
public class UserController {
  private Log LOG = LogFactory.getLog(this.getClass());

  @Autowired
  private UserService userService;

  @RequestMapping(value = "/register", method = RequestMethod.POST)
  public String list(HttpServletRequest request,@ModelAttribute("user") UserBo userBo) {
    try{
      User user = userService.addNewUser(userBo);
      user = userService.findUserByName(userBo.getLoginName());
      if(user!=null){
        request.setAttribute("userId",user.getUserId());
        request.setAttribute("username",user.getName());
        return "alltask";
      }
      return "404";
    }catch(Exception e){
      e.printStackTrace();
      return "404";
    }

  }
  @RequestMapping(value = "/login", method = RequestMethod.POST)
  public String login(HttpServletRequest request,@ModelAttribute("user") UserBo userBo) {
    try{
      User user = userService.findUserByName(userBo.getLoginName());
      if(user!=null&&user.getPassword().equals(userBo.getPassword())){
        request.setAttribute("userId",user.getUserId());
        request.setAttribute("username",user.getName());
        return "alltask";
      }
      return "regist";
    }catch(Exception e){
      e.printStackTrace();
      return "regist";
    }

  }

  @RequestMapping(value = "/regist", method = RequestMethod.POST)
  public String regist(HttpServletRequest request) {
      return "regist";
  }

}
