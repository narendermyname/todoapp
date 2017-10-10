/**
 * 
 */
package com.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Todo Model dto
 * 
 * @author ntanwa
 *
 */

@Entity
public class ToDo {

	// Id
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	// Title of TODO
	private String title;

	// Status Pending or Completed
	private boolean isCompleted;

	public ToDo() {
	}

	/**
	 * @param title
	 * @param isCompleted
	 */
	public ToDo(String title, boolean isCompleted) {
		this.title = title;
		this.isCompleted = isCompleted;
	}

	/**
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}

	/**
	 * @param title
	 *            the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * @return the isCompleted
	 */
	public boolean isCompleted() {
		return isCompleted;
	}

	/**
	 * @param isCompleted
	 *            the isCompleted to set
	 */
	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "ToDo [id=" + id + ", title=" + title + ", isCompleted=" + isCompleted + "]";
	}
}
