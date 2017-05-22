package com.didi.util;

import com.didi.enums.IDUTIL;
import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

import java.net.InetAddress;
import java.util.HashSet;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @author wangmz。
 * @create 2017-03-23 上午11:09
 **/
public class OrderIdGenerator {
  private static final int IP;
  private static final DateTimeFormatter timeFormatter = DateTimeFormat.forPattern("yyMMddHHmmssSSS");
  private static AtomicInteger counter = new AtomicInteger(0);
  private static OrderIdGenerator uuidgen = new OrderIdGenerator();

  static {
    int ipadd;
    try {
      ipadd = InetAddress.getLocalHost().getAddress()[3];
      if (ipadd < 0) {
        ipadd += 256;
      }
    } catch (Exception var2) {
      ipadd = 0;
    }

    IP = ipadd;
  }

  public OrderIdGenerator() {
  }

  public static OrderIdGenerator getInstance() {
    return uuidgen;
  }

  public static void main(String[] str) {
    OrderIdGenerator id = getInstance();
    HashSet set = new HashSet();

    for (int i = 0; i < 200; ++i) {
      System.out.println(id.genOrderId(IDUTIL.USER));
    }

    System.out.println(set.size());
  }

  public String genOrderId(IDUTIL itemType) {
    String pre = itemType.getByType(itemType);
    String ipString = Integer.toHexString(this.getIP());
    if (ipString.length() < 2) {
      ipString = "0" + ipString;
    }

    String ret = pre + this.formatCurTime() + ipString + this.format(this.getCount());
    return ret;
  }

  protected String format(short interval) {
    String formatted = Integer.toHexString(interval);
    StringBuffer buf = new StringBuffer("000");
    buf.replace(3 - formatted.length(), 3, formatted);
    return buf.toString();
  }

  protected short getCount() {
    counter.compareAndSet(4000, 0);
    return (short) counter.incrementAndGet();
  }

  protected int getIP() {
    return IP;
  }

  private String formatCurTime() {
    DateTime dateTime = new DateTime();
    return dateTime.toString(timeFormatter);
  }
}
