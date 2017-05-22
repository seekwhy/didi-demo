package com.didi.dao;

import com.didi.entity.Feedback;
import com.didi.entity.FeedbackExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface FeedbackDao {
    long countByExample(FeedbackExample example);

    int deleteByExample(FeedbackExample example);

    int deleteByPrimaryKey(String id);

    int insert(Feedback record);

    int insertSelective(Feedback record);

    List<Feedback> selectByExample(FeedbackExample example);

    Feedback selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") Feedback record,
                                 @Param("example") FeedbackExample example);

    int updateByExample(@Param("record") Feedback record,
                        @Param("example") FeedbackExample example);

    int updateByPrimaryKeySelective(Feedback record);

    int updateByPrimaryKey(Feedback record);

    List<Feedback> findalllist();

    List<Feedback> findalllistByUserId(String userId);
}