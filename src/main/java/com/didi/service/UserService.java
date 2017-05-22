package com.didi.service;

import com.didi.bo.UserBo;
import com.didi.entity.User;

/**
 * @author wangmz。
 * @create 2017-05-02 上午11:40
 **/
public interface UserService {
  User addNewUser(UserBo userbo);

  User findUserByName(String loginName);

  User findUserByUserId(String userId);
}
