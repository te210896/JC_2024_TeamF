package jp.te4a.spring.boot.mybootapp14.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.te4a.spring.boot.mybootapp14.bean.BookBean;
import jp.te4a.spring.boot.mybootapp14.form.BookForm;
import jp.te4a.spring.boot.mybootapp14.repository.BookRepository;

@Service
public class BookService {
    
    private final BookRepository bookRepository;
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public BookForm create(BookForm bookForm) {
        BookBean bookBean = new BookBean();
        BeanUtils.copyProperties(bookForm, bookBean);
        bookRepository.save(bookBean);
        return bookForm;
    }

    public List<BookForm> findAll() {
        List<BookBean> beanList = (List<BookBean>)bookRepository.findAll();
        List<BookForm> formList = new ArrayList<BookForm>();
        for (BookBean bookBean : beanList) {
            BookForm bookForm = new BookForm();
            BeanUtils.copyProperties(bookBean, bookForm);
            formList.add(bookForm);
        }
        return formList;
    }

    public BookForm findOne(Integer id) {
        BookForm bookForm = new BookForm();
        Optional<BookBean> opt = bookRepository.findById(id);
        opt.ifPresent(bookBean -> {
            BeanUtils.copyProperties(bookBean, bookForm);
        });
        return bookForm;
    }

    public BookForm update(BookForm bookForm) {
        BookBean bookBean = new BookBean();
        BeanUtils.copyProperties(bookForm, bookBean);
        bookRepository.save(bookBean);
        return bookForm;
    }

    public void delete(Integer id) {
        Optional<BookBean> opt = bookRepository.findById(id);
        opt.ifPresent(bookBean -> {
            bookRepository.delete(bookBean);
        });
    }
}
