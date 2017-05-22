package com.didi.exception;

/**
 * 秒杀相关业务异常
 */
public class DidiException extends RuntimeException {

    public DidiException(String message) {
        super(message);
    }

    public DidiException(String message, Throwable cause) {
        super(message, cause);
    }

}
