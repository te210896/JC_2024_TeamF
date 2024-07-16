package jp.te4a.spring.boot.mybootapp14.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import jp.te4a.spring.boot.mybootapp14.bean.UserBean;

public interface UserRepository extends JpaRepository<UserBean, String>{
}