package com.example.springcursework.model;

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id; // Primary Key

    @Column
    private String login;
    @Column
    private String password;
    @Column
    private String phone;
    @Column
    private String email;

    public int getId() { return id; }
    public void setId(int id) {
        this.id = id;
    }

    public String getLogin() { return login; }
    public void setLogin(String login) { this.login = login;}

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password;}

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone;}

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email;}


    @Override
    public String toString() {
        return "User [id=" + id + ", name=" + login +  "]";
    }
}
