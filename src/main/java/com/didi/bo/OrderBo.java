package com.didi.bo;

import java.io.Serializable;
import java.util.Date;

/**
 * @Author: thought
 * @Description :
 * @Date : Create in 下午5:40 2017/5/3
 * @Modified By .
 */

public class OrderBo implements Serializable {

  private static final long serialVersionUID = -1125416559232721960L;

  private String userId;

  private String userName;

  private String telphone;

  private String address;

  private String targetaddress;

  private Date wannatime;

  private String something;

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

  public String getTelphone() {
    return telphone;
  }

  public void setTelphone(String telphone) {
    this.telphone = telphone;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getTargetaddress() {
    return targetaddress;
  }

  public void setTargetaddress(String targetaddress) {
    this.targetaddress = targetaddress;
  }

  public Date getWannatime() {
    return wannatime;
  }

  public void setWannatime(Date wannatime) {
    this.wannatime = wannatime;
  }

  public String getSomething() {
    return something;
  }

  public void setSomething(String something) {
    this.something = something;
  }
}
