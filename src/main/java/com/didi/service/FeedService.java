package com.didi.service;

import com.didi.bo.FeedBo;
import com.didi.entity.Feedback;

import java.util.List;

/**
 * @Author: thought
 * @Description :
 * @Date : Create in 下午10:08 2017/5/21
 * @Modified By :
 */
public interface FeedService {
  void addFeed(FeedBo feedBo);

  List<Feedback> findalllist();
}
