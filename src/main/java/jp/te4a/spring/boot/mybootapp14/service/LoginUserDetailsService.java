package jp.te4a.spring.boot.mybootapp14.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import jp.te4a.spring.boot.mybootapp14.bean.UserBean;
import jp.te4a.spring.boot.mybootapp14.repository.UserRepository;
import jp.te4a.spring.boot.mybootapp14.security.LoginUserDetails;

@Service
public class LoginUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;
    public LoginUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserBean> opt = userRepository.findById(username);
        UserBean userBean = opt.orElseThrow(() -> new UsernameNotFoundException("The requested user is not found."));
        return (UserDetails) new LoginUserDetails(userBean, true, true, true, getAuthorities(userBean));
    }

    private Collection<GrantedAuthority> getAuthorities(UserBean userBean) {
        return AuthorityUtils.createAuthorityList("ROLE_USER");
    }
}