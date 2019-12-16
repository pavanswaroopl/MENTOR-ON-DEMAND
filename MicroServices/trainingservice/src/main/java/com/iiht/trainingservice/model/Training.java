package com.iiht.trainingservice.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="training")
public class Training {
	
	@Id
	@NotNull
	@Column(name="training_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;

	@NotNull
	@ManyToOne
	@JoinColumn(name="training_user_id")
	private User user;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name="training_mentor_id")
	private Mentors mentor;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name="training_skill_id")
	private Skill skill;
	
	@NotNull
	@Column(name="training_status")
	@Size(max=20)
	private String status;
	
	@NotNull
	@Column(name="training_progress")
	private int progress;
	
	@Column(name="training_rating")
	private float rating;
	
	@NotNull
	@Column(name="training_start_date")
	private Date startDate;
	
	@NotNull
	@Column(name="training_end_date")
	private Date endDate;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Mentors getMentor() {
		return mentor;
	}

	public void setMentor(Mentors mentor) {
		this.mentor = mentor;
	}

	public Skill getSkill() {
		return skill;
	}

	public void setSkill(Skill skill) {
		this.skill = skill;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getProgress() {
		return progress;
	}

	public void setProgress(int progress) {
		this.progress = progress;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	@Override
	public String toString() {
		return "Training [id=" + id + ", user=" + user + ", mentor=" + mentor + ", skill=" + skill + ", status="
				+ status + ", progress=" + progress + ", rating=" + rating + ", startDate=" + startDate + ", endDate="
				+ endDate + "]";
	}
	
}
