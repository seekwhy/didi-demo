package com.didi.service.impl;

import com.didi.bo.UserBo;
import com.didi.dao.UserDao;
import com.didi.entity.User;
import com.didi.enums.Gender;
import com.didi.enums.IDUTIL;
import com.didi.service.UserService;
import com.didi.util.OrderIdGenerator;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

/**
 * @author thought。
 * @create 2017-05-02 上午11:41
 **/
@Service
public class UserServiceImpl implements UserService {

  private Log LOG = LogFactory.getLog(this.getClass());

  @Autowired
  private UserDao userDao;

  public User addNewUser(UserBo userbo) {
    User user = new User();
    String UserId = OrderIdGenerator.getInstance().genOrderId(IDUTIL.USER);
    user.setId(UUID.randomUUID().toString());
    user.setAddres(userbo.getAddress());
    user.setAge(Integer.parseInt(userbo.getAge()));
    if(Gender.BOY.getValue().equals(userbo.getGender())){
      user.setGender(Gender.BOY.getKey());
    }else if(Gender.GIRL.getValue().equals(userbo.getGender())){
      user.setGender(Gender.GIRL.getKey());
    }
    user.setLoginName(userbo.getLoginName());
    user.setName(userbo.getUserName());
    user.setPhone(userbo.getPhone());
    user.setUserId(UserId);
    user.setPassword(userbo.getPassword());
    userDao.insertSelective(user);
    return user;
  }

  public User findUserByName(String loginName) {
    User user = userDao.findUserByName(loginName);
      return user;
  }

  public User findUserByUserId(String userId) {
    User user = userDao.findUserByUserId(userId);
    return user;
  }
}
