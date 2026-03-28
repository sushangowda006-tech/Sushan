package com.example.Authentication.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Authentication.user.UserEntity;
import com.example.Authentication.user.UserRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

   
    public String register(String username, String password) {

        UserEntity user = new UserEntity();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));

        userRepository.save(user);

        return "User Registered Successfully";
    }

   
    public String login(String username, String password) {

        UserEntity user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        boolean isMatch = passwordEncoder.matches(password, user.getPassword());

        if (!isMatch) {
            throw new RuntimeException("Invalid Credentials");
        }

        return jwtUtil.generateToken(username);
    }
}