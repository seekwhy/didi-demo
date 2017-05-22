package com.didi.bo;

import java.io.Serializable;
import java.util.Date;

/**
 * @Author: thought
 * @Description :
 * @Date : Create in 下午5:40 2017/5/3
 * @Modified By .
 */

public class FeedBo implements Serializable {

  private static final long serialVersionUID = -1125416559232721960L;

  private String orderId;

  private String userId;

  private String userName;

  private String userComment;

  public String getOrderId() {
    return orderId;
  }

  public void setOrderId(String orderId) {
    this.orderId = orderId;
  }

  public String getUserId() {
    return userId;
  }

  public void setUserId(String userId) {
    this.userId = userId;
  }

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public String getUserComment() {
    return userComment;
  }

  public void setUserComment(String userComment) {
    this.userComment = userComment;
  }
}
