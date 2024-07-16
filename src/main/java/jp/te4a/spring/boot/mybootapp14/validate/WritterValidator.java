package jp.te4a.spring.boot.mybootapp14.validate;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class WritterValidator implements ConstraintValidator<Writter, String> {
    String ok;
    @Override
    public void initialize(Writter wv){ok = wv.ok();}
    @Override
    public boolean isValid(String in, ConstraintValidatorContext ctxt) {
        // inがnullの場合とparamと一致した場合にエラー
        if (in == null) {
            return false;
        }
        return in.equals(ok);
    }
}
