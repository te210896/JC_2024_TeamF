package jp.te4a.spring.boot.mybootapp14.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {
@GetMapping(path="loginForm")
    String loginForm() {
        return "loginForm";
    }
}
