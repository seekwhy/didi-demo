package com.didi.enums;

/**
 * @Author: thought
 * @Description :
 * @Date : Create in 下午2:23 2017/5/2
 * @Modified By :
 */
public enum IDUTIL {
  USER(100, "用户"),
  ORDER(200, "订单");

  private int state;

  private String stateInfo;

  IDUTIL(int state, String stateInfo) {
    this.state = state;
    this.stateInfo = stateInfo;
  }

  public int getState() {
    return state;
  }

  public void setState(int state) {
    this.state = state;
  }

  public String getStateInfo() {
    return stateInfo;
  }

  public void setStateInfo(String stateInfo) {
    this.stateInfo = stateInfo;
  }

  public String getByType(IDUTIL idutil) {
    if (IDUTIL.ORDER.equals(idutil)) {
      return String.valueOf(IDUTIL.ORDER.getState());
    }
    return String.valueOf(IDUTIL.USER.getState());
  }
}
