package com.didi.enums;

/**
 * @Author: wangmz
 * @Description :
 * @Date : Create in 下午2:49 2017/5/2
 * @Modified By :
 */
public enum Gender {
  BOY(1, "男"),
  GIRL(2, "女");

  private int key;

  private String value;

  Gender(int key, String value) {
    this.key = key;
    this.value = value;
  }

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
}
