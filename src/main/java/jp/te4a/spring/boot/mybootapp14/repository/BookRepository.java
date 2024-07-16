package jp.te4a.spring.boot.mybootapp14.repository;

// import java.util.ArrayList;
// import java.util.List;
// import java.util.concurrent.ConcurrentHashMap;
// import java.util.concurrent.ConcurrentMap;
// import org.springframework.beans.BeanUtils;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import jp.te4a.spring.boot.mybootapp14.bean.BookBean;

@Repository
public interface BookRepository extends JpaRepository<BookBean, Integer>{
        
}