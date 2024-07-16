package jp.te4a.spring.boot.mybootapp14.form;

import jakarta.validation.constraints.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserForm {
    @NotNull
    @Size(min=6, max=12)
    private String username;
    @Size(min=6, max=12)
    private String password;
}