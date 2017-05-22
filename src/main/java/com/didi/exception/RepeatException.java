package com.didi.exception;

/**
 * 重复秒杀异常(运行期异常)
 * RuntimeException 不需要try/catch 而且Spring 的声明式事务只接收RuntimeException回滚策略.
 */
public class RepeatException extends DidiException {

    public RepeatException(String message) {
        super(message);
    }

    public RepeatException(String message, Throwable cause) {
        super(message, cause);
    }

}
