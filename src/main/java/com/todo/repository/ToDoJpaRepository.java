/**
 * 
 */
package com.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.todo.model.ToDo;

/**
 * @author ntanwa
 *
 */
public interface ToDoJpaRepository extends JpaRepository<ToDo, Long> {

	List<ToDo> findByTitle(@Param("title") String title);
	List<ToDo> findByIsCompleted(@Param("isCompleted")boolean isCompleted);
}
