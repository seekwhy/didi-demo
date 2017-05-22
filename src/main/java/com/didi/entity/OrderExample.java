package com.didi.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class OrderExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public OrderExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("ID is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("ID is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(String value) {
            addCriterion("ID =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(String value) {
            addCriterion("ID <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(String value) {
            addCriterion("ID >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(String value) {
            addCriterion("ID >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(String value) {
            addCriterion("ID <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(String value) {
            addCriterion("ID <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLike(String value) {
            addCriterion("ID like", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotLike(String value) {
            addCriterion("ID not like", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<String> values) {
            addCriterion("ID in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<String> values) {
            addCriterion("ID not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(String value1, String value2) {
            addCriterion("ID between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(String value1, String value2) {
            addCriterion("ID not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andOrderIdIsNull() {
            addCriterion("ORDER_ID is null");
            return (Criteria) this;
        }

        public Criteria andOrderIdIsNotNull() {
            addCriterion("ORDER_ID is not null");
            return (Criteria) this;
        }

        public Criteria andOrderIdEqualTo(String value) {
            addCriterion("ORDER_ID =", value, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdNotEqualTo(String value) {
            addCriterion("ORDER_ID <>", value, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdGreaterThan(String value) {
            addCriterion("ORDER_ID >", value, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdGreaterThanOrEqualTo(String value) {
            addCriterion("ORDER_ID >=", value, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdLessThan(String value) {
            addCriterion("ORDER_ID <", value, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdLessThanOrEqualTo(String value) {
            addCriterion("ORDER_ID <=", value, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdLike(String value) {
            addCriterion("ORDER_ID like", value, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdNotLike(String value) {
            addCriterion("ORDER_ID not like", value, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdIn(List<String> values) {
            addCriterion("ORDER_ID in", values, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdNotIn(List<String> values) {
            addCriterion("ORDER_ID not in", values, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdBetween(String value1, String value2) {
            addCriterion("ORDER_ID between", value1, value2, "orderId");
            return (Criteria) this;
        }

        public Criteria andOrderIdNotBetween(String value1, String value2) {
            addCriterion("ORDER_ID not between", value1, value2, "orderId");
            return (Criteria) this;
        }

        public Criteria andUserIdIsNull() {
            addCriterion("USER_ID is null");
            return (Criteria) this;
        }

        public Criteria andUserIdIsNotNull() {
            addCriterion("USER_ID is not null");
            return (Criteria) this;
        }

        public Criteria andUserIdEqualTo(String value) {
            addCriterion("USER_ID =", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdNotEqualTo(String value) {
            addCriterion("USER_ID <>", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdGreaterThan(String value) {
            addCriterion("USER_ID >", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdGreaterThanOrEqualTo(String value) {
            addCriterion("USER_ID >=", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdLessThan(String value) {
            addCriterion("USER_ID <", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdLessThanOrEqualTo(String value) {
            addCriterion("USER_ID <=", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdLike(String value) {
            addCriterion("USER_ID like", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdNotLike(String value) {
            addCriterion("USER_ID not like", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdIn(List<String> values) {
            addCriterion("USER_ID in", values, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdNotIn(List<String> values) {
            addCriterion("USER_ID not in", values, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdBetween(String value1, String value2) {
            addCriterion("USER_ID between", value1, value2, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdNotBetween(String value1, String value2) {
            addCriterion("USER_ID not between", value1, value2, "userId");
            return (Criteria) this;
        }

        public Criteria andOerderStateIsNull() {
            addCriterion("OERDER_STATE is null");
            return (Criteria) this;
        }

        public Criteria andOerderStateIsNotNull() {
            addCriterion("OERDER_STATE is not null");
            return (Criteria) this;
        }

        public Criteria andOerderStateEqualTo(String value) {
            addCriterion("OERDER_STATE =", value, "oerderState");
            return (Criteria) this;
        }

        public Criteria andOerderStateNotEqualTo(String value) {
            addCriterion("OERDER_STATE <>", value, "oerderState");
            return (Criteria) this;
        }

        public Criteria andOerderStateGreaterThan(String value) {
            addCriterion("OERDER_STATE >", value, "oerderState");
            return (Criteria) this;
        }

        public Criteria andOerderStateGreaterThanOrEqualTo(String value) {
            addCriterion("OERDER_STATE >=", value, "oerderState");
            return (Criteria) this;
        }

        public Criteria andOerderStateLessThan(String value) {
            addCriterion("OERDER_STATE <", value, "oerderState");
            return (Criteria) this;
        }

        public Criteria andOerderStateLessThanOrEqualTo(String value) {
            addCriterion("OERDER_STATE <=", value, "oerderState");
            return (Criteria) this;
        }

        public Criteria andOerderStateLike(String value) {
            addCriterion("OERDER_STATE like", value, "oerderState");
            return (Criteria) this;
        }

        public Criteria andOerderStateNotLike(String value) {
            addCriterion("OERDER_STATE not like", value, "oerderState");
            return (Criteria) this;
        }

        public Criteria andOerderStateIn(List<String> values) {
            addCriterion("OERDER_STATE in", values, "oerderState");
            return (Criteria) this;
        }

        public Criteria andOerderStateNotIn(List<String> values) {
            addCriterion("OERDER_STATE not in", values, "oerderState");
            return (Criteria) this;
        }

        public Criteria andOerderStateBetween(String value1, String value2) {
            addCriterion("OERDER_STATE between", value1, value2, "oerderState");
            return (Criteria) this;
        }

        public Criteria andOerderStateNotBetween(String value1, String value2) {
            addCriterion("OERDER_STATE not between", value1, value2, "oerderState");
            return (Criteria) this;
        }

        public Criteria andPhoneIsNull() {
            addCriterion("PHONE is null");
            return (Criteria) this;
        }

        public Criteria andPhoneIsNotNull() {
            addCriterion("PHONE is not null");
            return (Criteria) this;
        }

        public Criteria andPhoneEqualTo(String value) {
            addCriterion("PHONE =", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneNotEqualTo(String value) {
            addCriterion("PHONE <>", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneGreaterThan(String value) {
            addCriterion("PHONE >", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneGreaterThanOrEqualTo(String value) {
            addCriterion("PHONE >=", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneLessThan(String value) {
            addCriterion("PHONE <", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneLessThanOrEqualTo(String value) {
            addCriterion("PHONE <=", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneLike(String value) {
            addCriterion("PHONE like", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneNotLike(String value) {
            addCriterion("PHONE not like", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneIn(List<String> values) {
            addCriterion("PHONE in", values, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneNotIn(List<String> values) {
            addCriterion("PHONE not in", values, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneBetween(String value1, String value2) {
            addCriterion("PHONE between", value1, value2, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneNotBetween(String value1, String value2) {
            addCriterion("PHONE not between", value1, value2, "phone");
            return (Criteria) this;
        }

        public Criteria andAddressIsNull() {
            addCriterion("ADDRESS is null");
            return (Criteria) this;
        }

        public Criteria andAddressIsNotNull() {
            addCriterion("ADDRESS is not null");
            return (Criteria) this;
        }

        public Criteria andAddressEqualTo(String value) {
            addCriterion("ADDRESS =", value, "address");
            return (Criteria) this;
        }

        public Criteria andAddressNotEqualTo(String value) {
            addCriterion("ADDRESS <>", value, "address");
            return (Criteria) this;
        }

        public Criteria andAddressGreaterThan(String value) {
            addCriterion("ADDRESS >", value, "address");
            return (Criteria) this;
        }

        public Criteria andAddressGreaterThanOrEqualTo(String value) {
            addCriterion("ADDRESS >=", value, "address");
            return (Criteria) this;
        }

        public Criteria andAddressLessThan(String value) {
            addCriterion("ADDRESS <", value, "address");
            return (Criteria) this;
        }

        public Criteria andAddressLessThanOrEqualTo(String value) {
            addCriterion("ADDRESS <=", value, "address");
            return (Criteria) this;
        }

        public Criteria andAddressLike(String value) {
            addCriterion("ADDRESS like", value, "address");
            return (Criteria) this;
        }

        public Criteria andAddressNotLike(String value) {
            addCriterion("ADDRESS not like", value, "address");
            return (Criteria) this;
        }

        public Criteria andAddressIn(List<String> values) {
            addCriterion("ADDRESS in", values, "address");
            return (Criteria) this;
        }

        public Criteria andAddressNotIn(List<String> values) {
            addCriterion("ADDRESS not in", values, "address");
            return (Criteria) this;
        }

        public Criteria andAddressBetween(String value1, String value2) {
            addCriterion("ADDRESS between", value1, value2, "address");
            return (Criteria) this;
        }

        public Criteria andAddressNotBetween(String value1, String value2) {
            addCriterion("ADDRESS not between", value1, value2, "address");
            return (Criteria) this;
        }

        public Criteria andTargetAddressIsNull() {
            addCriterion("TARGET_ADDRESS is null");
            return (Criteria) this;
        }

        public Criteria andTargetAddressIsNotNull() {
            addCriterion("TARGET_ADDRESS is not null");
            return (Criteria) this;
        }

        public Criteria andTargetAddressEqualTo(String value) {
            addCriterion("TARGET_ADDRESS =", value, "targetAddress");
            return (Criteria) this;
        }

        public Criteria andTargetAddressNotEqualTo(String value) {
            addCriterion("TARGET_ADDRESS <>", value, "targetAddress");
            return (Criteria) this;
        }

        public Criteria andTargetAddressGreaterThan(String value) {
            addCriterion("TARGET_ADDRESS >", value, "targetAddress");
            return (Criteria) this;
        }

        public Criteria andTargetAddressGreaterThanOrEqualTo(String value) {
            addCriterion("TARGET_ADDRESS >=", value, "targetAddress");
            return (Criteria) this;
        }

        public Criteria andTargetAddressLessThan(String value) {
            addCriterion("TARGET_ADDRESS <", value, "targetAddress");
            return (Criteria) this;
        }

        public Criteria andTargetAddressLessThanOrEqualTo(String value) {
            addCriterion("TARGET_ADDRESS <=", value, "targetAddress");
            return (Criteria) this;
        }

        public Criteria andTargetAddressLike(String value) {
            addCriterion("TARGET_ADDRESS like", value, "targetAddress");
            return (Criteria) this;
        }

        public Criteria andTargetAddressNotLike(String value) {
            addCriterion("TARGET_ADDRESS not like", value, "targetAddress");
            return (Criteria) this;
        }

        public Criteria andTargetAddressIn(List<String> values) {
            addCriterion("TARGET_ADDRESS in", values, "targetAddress");
            return (Criteria) this;
        }

        public Criteria andTargetAddressNotIn(List<String> values) {
            addCriterion("TARGET_ADDRESS not in", values, "targetAddress");
            return (Criteria) this;
        }

        public Criteria andTargetAddressBetween(String value1, String value2) {
            addCriterion("TARGET_ADDRESS between", value1, value2, "targetAddress");
            return (Criteria) this;
        }

        public Criteria andTargetAddressNotBetween(String value1, String value2) {
            addCriterion("TARGET_ADDRESS not between", value1, value2, "targetAddress");
            return (Criteria) this;
        }

        public Criteria andTargetTimeIsNull() {
            addCriterion("TARGET_TIME is null");
            return (Criteria) this;
        }

        public Criteria andTargetTimeIsNotNull() {
            addCriterion("TARGET_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andTargetTimeEqualTo(Date value) {
            addCriterion("TARGET_TIME =", value, "targetTime");
            return (Criteria) this;
        }

        public Criteria andTargetTimeNotEqualTo(Date value) {
            addCriterion("TARGET_TIME <>", value, "targetTime");
            return (Criteria) this;
        }

        public Criteria andTargetTimeGreaterThan(Date value) {
            addCriterion("TARGET_TIME >", value, "targetTime");
            return (Criteria) this;
        }

        public Criteria andTargetTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("TARGET_TIME >=", value, "targetTime");
            return (Criteria) this;
        }

        public Criteria andTargetTimeLessThan(Date value) {
            addCriterion("TARGET_TIME <", value, "targetTime");
            return (Criteria) this;
        }

        public Criteria andTargetTimeLessThanOrEqualTo(Date value) {
            addCriterion("TARGET_TIME <=", value, "targetTime");
            return (Criteria) this;
        }

        public Criteria andTargetTimeIn(List<Date> values) {
            addCriterion("TARGET_TIME in", values, "targetTime");
            return (Criteria) this;
        }

        public Criteria andTargetTimeNotIn(List<Date> values) {
            addCriterion("TARGET_TIME not in", values, "targetTime");
            return (Criteria) this;
        }

        public Criteria andTargetTimeBetween(Date value1, Date value2) {
            addCriterion("TARGET_TIME between", value1, value2, "targetTime");
            return (Criteria) this;
        }

        public Criteria andTargetTimeNotBetween(Date value1, Date value2) {
            addCriterion("TARGET_TIME not between", value1, value2, "targetTime");
            return (Criteria) this;
        }

        public Criteria andOrderInfoIsNull() {
            addCriterion("ORDER_INFO is null");
            return (Criteria) this;
        }

        public Criteria andOrderInfoIsNotNull() {
            addCriterion("ORDER_INFO is not null");
            return (Criteria) this;
        }

        public Criteria andOrderInfoEqualTo(String value) {
            addCriterion("ORDER_INFO =", value, "orderInfo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNotEqualTo(String value) {
            addCriterion("ORDER_INFO <>", value, "orderInfo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoGreaterThan(String value) {
            addCriterion("ORDER_INFO >", value, "orderInfo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoGreaterThanOrEqualTo(String value) {
            addCriterion("ORDER_INFO >=", value, "orderInfo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoLessThan(String value) {
            addCriterion("ORDER_INFO <", value, "orderInfo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoLessThanOrEqualTo(String value) {
            addCriterion("ORDER_INFO <=", value, "orderInfo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoLike(String value) {
            addCriterion("ORDER_INFO like", value, "orderInfo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNotLike(String value) {
            addCriterion("ORDER_INFO not like", value, "orderInfo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoIn(List<String> values) {
            addCriterion("ORDER_INFO in", values, "orderInfo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNotIn(List<String> values) {
            addCriterion("ORDER_INFO not in", values, "orderInfo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoBetween(String value1, String value2) {
            addCriterion("ORDER_INFO between", value1, value2, "orderInfo");
            return (Criteria) this;
        }

        public Criteria andOrderInfoNotBetween(String value1, String value2) {
            addCriterion("ORDER_INFO not between", value1, value2, "orderInfo");
            return (Criteria) this;
        }

        public Criteria andTotalAccountIsNull() {
            addCriterion("TOTAL_ACCOUNT is null");
            return (Criteria) this;
        }

        public Criteria andTotalAccountIsNotNull() {
            addCriterion("TOTAL_ACCOUNT is not null");
            return (Criteria) this;
        }

        public Criteria andTotalAccountEqualTo(Integer value) {
            addCriterion("TOTAL_ACCOUNT =", value, "totalAccount");
            return (Criteria) this;
        }

        public Criteria andTotalAccountNotEqualTo(Integer value) {
            addCriterion("TOTAL_ACCOUNT <>", value, "totalAccount");
            return (Criteria) this;
        }

        public Criteria andTotalAccountGreaterThan(Integer value) {
            addCriterion("TOTAL_ACCOUNT >", value, "totalAccount");
            return (Criteria) this;
        }

        public Criteria andTotalAccountGreaterThanOrEqualTo(Integer value) {
            addCriterion("TOTAL_ACCOUNT >=", value, "totalAccount");
            return (Criteria) this;
        }

        public Criteria andTotalAccountLessThan(Integer value) {
            addCriterion("TOTAL_ACCOUNT <", value, "totalAccount");
            return (Criteria) this;
        }

        public Criteria andTotalAccountLessThanOrEqualTo(Integer value) {
            addCriterion("TOTAL_ACCOUNT <=", value, "totalAccount");
            return (Criteria) this;
        }

        public Criteria andTotalAccountIn(List<Integer> values) {
            addCriterion("TOTAL_ACCOUNT in", values, "totalAccount");
            return (Criteria) this;
        }

        public Criteria andTotalAccountNotIn(List<Integer> values) {
            addCriterion("TOTAL_ACCOUNT not in", values, "totalAccount");
            return (Criteria) this;
        }

        public Criteria andTotalAccountBetween(Integer value1, Integer value2) {
            addCriterion("TOTAL_ACCOUNT between", value1, value2, "totalAccount");
            return (Criteria) this;
        }

        public Criteria andTotalAccountNotBetween(Integer value1, Integer value2) {
            addCriterion("TOTAL_ACCOUNT not between", value1, value2, "totalAccount");
            return (Criteria) this;
        }

        public Criteria andCreateDateIsNull() {
            addCriterion("CREATE_DATE is null");
            return (Criteria) this;
        }

        public Criteria andCreateDateIsNotNull() {
            addCriterion("CREATE_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andCreateDateEqualTo(Date value) {
            addCriterion("CREATE_DATE =", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateNotEqualTo(Date value) {
            addCriterion("CREATE_DATE <>", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateGreaterThan(Date value) {
            addCriterion("CREATE_DATE >", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateGreaterThanOrEqualTo(Date value) {
            addCriterion("CREATE_DATE >=", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateLessThan(Date value) {
            addCriterion("CREATE_DATE <", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateLessThanOrEqualTo(Date value) {
            addCriterion("CREATE_DATE <=", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateIn(List<Date> values) {
            addCriterion("CREATE_DATE in", values, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateNotIn(List<Date> values) {
            addCriterion("CREATE_DATE not in", values, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateBetween(Date value1, Date value2) {
            addCriterion("CREATE_DATE between", value1, value2, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateNotBetween(Date value1, Date value2) {
            addCriterion("CREATE_DATE not between", value1, value2, "createDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateIsNull() {
            addCriterion("UPDATE_DATE is null");
            return (Criteria) this;
        }

        public Criteria andUpdateDateIsNotNull() {
            addCriterion("UPDATE_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andUpdateDateEqualTo(Date value) {
            addCriterion("UPDATE_DATE =", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateNotEqualTo(Date value) {
            addCriterion("UPDATE_DATE <>", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateGreaterThan(Date value) {
            addCriterion("UPDATE_DATE >", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateGreaterThanOrEqualTo(Date value) {
            addCriterion("UPDATE_DATE >=", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateLessThan(Date value) {
            addCriterion("UPDATE_DATE <", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateLessThanOrEqualTo(Date value) {
            addCriterion("UPDATE_DATE <=", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateIn(List<Date> values) {
            addCriterion("UPDATE_DATE in", values, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateNotIn(List<Date> values) {
            addCriterion("UPDATE_DATE not in", values, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateBetween(Date value1, Date value2) {
            addCriterion("UPDATE_DATE between", value1, value2, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateNotBetween(Date value1, Date value2) {
            addCriterion("UPDATE_DATE not between", value1, value2, "updateDate");
            return (Criteria) this;
        }

        public Criteria andFinishDateIsNull() {
            addCriterion("FINISH_DATE is null");
            return (Criteria) this;
        }

        public Criteria andFinishDateIsNotNull() {
            addCriterion("FINISH_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andFinishDateEqualTo(Date value) {
            addCriterion("FINISH_DATE =", value, "finishDate");
            return (Criteria) this;
        }

        public Criteria andFinishDateNotEqualTo(Date value) {
            addCriterion("FINISH_DATE <>", value, "finishDate");
            return (Criteria) this;
        }

        public Criteria andFinishDateGreaterThan(Date value) {
            addCriterion("FINISH_DATE >", value, "finishDate");
            return (Criteria) this;
        }

        public Criteria andFinishDateGreaterThanOrEqualTo(Date value) {
            addCriterion("FINISH_DATE >=", value, "finishDate");
            return (Criteria) this;
        }

        public Criteria andFinishDateLessThan(Date value) {
            addCriterion("FINISH_DATE <", value, "finishDate");
            return (Criteria) this;
        }

        public Criteria andFinishDateLessThanOrEqualTo(Date value) {
            addCriterion("FINISH_DATE <=", value, "finishDate");
            return (Criteria) this;
        }

        public Criteria andFinishDateIn(List<Date> values) {
            addCriterion("FINISH_DATE in", values, "finishDate");
            return (Criteria) this;
        }

        public Criteria andFinishDateNotIn(List<Date> values) {
            addCriterion("FINISH_DATE not in", values, "finishDate");
            return (Criteria) this;
        }

        public Criteria andFinishDateBetween(Date value1, Date value2) {
            addCriterion("FINISH_DATE between", value1, value2, "finishDate");
            return (Criteria) this;
        }

        public Criteria andFinishDateNotBetween(Date value1, Date value2) {
            addCriterion("FINISH_DATE not between", value1, value2, "finishDate");
            return (Criteria) this;
        }

        public Criteria andIsDeletedIsNull() {
            addCriterion("IS_DELETED is null");
            return (Criteria) this;
        }

        public Criteria andIsDeletedIsNotNull() {
            addCriterion("IS_DELETED is not null");
            return (Criteria) this;
        }

        public Criteria andIsDeletedEqualTo(Integer value) {
            addCriterion("IS_DELETED =", value, "isDeleted");
            return (Criteria) this;
        }

        public Criteria andIsDeletedNotEqualTo(Integer value) {
            addCriterion("IS_DELETED <>", value, "isDeleted");
            return (Criteria) this;
        }

        public Criteria andIsDeletedGreaterThan(Integer value) {
            addCriterion("IS_DELETED >", value, "isDeleted");
            return (Criteria) this;
        }

        public Criteria andIsDeletedGreaterThanOrEqualTo(Integer value) {
            addCriterion("IS_DELETED >=", value, "isDeleted");
            return (Criteria) this;
        }

        public Criteria andIsDeletedLessThan(Integer value) {
            addCriterion("IS_DELETED <", value, "isDeleted");
            return (Criteria) this;
        }

        public Criteria andIsDeletedLessThanOrEqualTo(Integer value) {
            addCriterion("IS_DELETED <=", value, "isDeleted");
            return (Criteria) this;
        }

        public Criteria andIsDeletedIn(List<Integer> values) {
            addCriterion("IS_DELETED in", values, "isDeleted");
            return (Criteria) this;
        }

        public Criteria andIsDeletedNotIn(List<Integer> values) {
            addCriterion("IS_DELETED not in", values, "isDeleted");
            return (Criteria) this;
        }

        public Criteria andIsDeletedBetween(Integer value1, Integer value2) {
            addCriterion("IS_DELETED between", value1, value2, "isDeleted");
            return (Criteria) this;
        }

        public Criteria andIsDeletedNotBetween(Integer value1, Integer value2) {
            addCriterion("IS_DELETED not between", value1, value2, "isDeleted");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}