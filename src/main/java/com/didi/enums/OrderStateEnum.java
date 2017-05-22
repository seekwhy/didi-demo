package com.didi.enums;

/**
 * @Author: thought
 * @Description :
 * @Date : Create in 下午5:00 2017/5/17
 * @Modified By :
 */
public enum OrderStateEnum {
  CREATE(1, "创建订单"),
  CONFIRM(2,"确认订单"),
  NOTGRAB(5,"未接收"),
  GRAB(6,"接收"),
  CANCEL(3,"取消订单"),
  FINISH(4, "完成订单");

  private int key;
  private String value;

  public int getKey() {
    return key;
  }

  public void setKey(int key) {
    this.key = key;
  }

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }

  OrderStateEnum(int key, String value) {
    this.key = key;
    this.value = value;
  }
}
