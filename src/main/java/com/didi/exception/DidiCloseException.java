package com.didi.exception;


public class DidiCloseException extends DidiException {

    public DidiCloseException(String message) {
        super(message);
    }

    public DidiCloseException(String message, Throwable cause) {
        super(message, cause);
    }

}
