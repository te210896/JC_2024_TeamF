package jp.te4a.spring.boot.mybootapp14.service;

import org.springframework.beans.BeanUtils;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import jp.te4a.spring.boot.mybootapp14.bean.UserBean;
import jp.te4a.spring.boot.mybootapp14.form.UserForm;
import jp.te4a.spring.boot.mybootapp14.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserForm create(UserForm userForm) {
        userForm.setPassword(new BCryptPasswordEncoder().encode(userForm.getPassword()));
        UserBean userBean = new UserBean();
        BeanUtils.copyProperties(userForm, userBean);
        userRepository.save(userBean);
        return userForm;
    }
}
