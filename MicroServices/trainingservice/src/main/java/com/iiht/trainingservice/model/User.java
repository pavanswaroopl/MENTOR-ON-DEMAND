package com.iiht.trainingservice.model;


import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private long id;

	@Column(name = "user_name")
	@NotNull
	private String userName;

	@Column(name = "first_name")
	@NotNull
	private String firstName;

	@Column(name = "last_name")
	@NotNull
	private String lastName;

	@Column(name = "contact_number")
	@NotNull
	private long contactNumber;

	@Column(name="role")
	@NotNull
	private String role;
	
	@Column(name = "password")
	@NotNull
	private String password;
	
	@Column(name="reset_password")
	private boolean resetPassword=false;
	
	@Column(name="reset_password_date")
	private Date resetPasswordDate;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public long getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(long contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isResetPassword() {
		return resetPassword;
	}

	public void setResetPassword(boolean resetPassword) {
		this.resetPassword = resetPassword;
	}

	public Date getResetPasswordDate() {
		return resetPasswordDate;
	}

	public void setResetPasswordDate(Date resetPasswordDate) {
		this.resetPasswordDate = resetPasswordDate;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", userName=" + userName + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", contactNumber=" + contactNumber + ", role=" + role + ", password=" + password + ", resetPassword="
				+ resetPassword + ", resetPasswordDate=" + resetPasswordDate + "]";
	}

	public User(long id, @NotNull String userName, @NotNull String firstName, @NotNull String lastName,
			@NotNull long contactNumber, @NotNull String role, @NotNull String password, boolean resetPassword,
			Date resetPasswordDate) {
		super();
		this.id = id;
		this.userName = userName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.contactNumber = contactNumber;
		this.role = role;
		this.password = password;
		this.resetPassword = resetPassword;
		this.resetPasswordDate = resetPasswordDate;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
}
