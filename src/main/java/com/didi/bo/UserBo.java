package com.didi.bo;

import java.io.Serializable;

/**
 * @author thought。
 * @create 2017-05-02 上午11:34
 **/
public class UserBo implements Serializable{

  private static final long serialVersionUID = -1125416559232721960L;

  private String userName;

  private String age;

  private String gender;

  private String address;

  private String phone;

  private String loginName;

  private String password;

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public String getAge() {
    return age;
  }

  public void setAge(String age) {
    this.age = age;
  }

  public String getGender() {
    return gender;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getLoginName() {
    return loginName;
  }

  public void setLoginName(String loginName) {
    this.loginName = loginName;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  @Override
  public String toString() {
    return "UserBo{" +
            "userName='" + userName + '\'' +
            ", age='" + age + '\'' +
            ", gender='" + gender + '\'' +
            ", address='" + address + '\'' +
            ", phone='" + phone + '\'' +
            ", loginName='" + loginName + '\'' +
            ", password='" + password + '\'' +
            '}';
  }
}
