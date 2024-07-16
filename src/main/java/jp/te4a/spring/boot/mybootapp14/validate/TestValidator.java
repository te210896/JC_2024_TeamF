package jp.te4a.spring.boot.mybootapp14.validate;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class TestValidator implements ConstraintValidator<TestValid, String> {
    String param;
    @Override
    public void initialize(TestValid tv){param = tv.param();}
    @Override
    public boolean isValid(String in, ConstraintValidatorContext ctxt) {
        // inがnullの場合とparamと一致した場合にエラー
        if (in == null) {
            return false;
        }
        return !in.equals(param);
    }
}
