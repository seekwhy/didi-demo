package com.didi.service.impl;

import com.didi.bo.FeedBo;
import com.didi.dao.FeedbackDao;
import com.didi.entity.Feedback;
import com.didi.service.FeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

/**
 * @Author: wangmz
 * @Description :
 * @Date : Create in 下午10:08 2017/5/21
 * @Modified By :
 */
@Service
public class FeedServiceImpl implements FeedService {
  @Autowired
  private FeedbackDao feedbackDao;

  public void addFeed(FeedBo feedBo) {
    Feedback feedback =new Feedback();
    feedback.setId(UUID.randomUUID().toString());
    feedback.setUserId(feedBo.getUserId());
    feedback.setOrderId(feedBo.getOrderId());
    feedback.setUserComment(feedBo.getUserComment());
    feedbackDao.insertSelective(feedback);
  }

  public List<Feedback> findalllist() {
    return feedbackDao.findalllist();
  }

}
