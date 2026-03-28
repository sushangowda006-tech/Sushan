package com.example.Authentication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.Authentication.authentication.AuthService;
import com.example.Authentication.dto.AuthRequest;
import com.example.Authentication.dto.AuthResponse;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    // 🔹 REGISTER
    @PostMapping("/register")
public String register(@RequestBody AuthRequest request) {
    return authService.register(request.getUsername(), request.getPassword());
}

    // 🔹 LOGIN
    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {
    String token = authService.login(request.getUsername(), request.getPassword());
    return new AuthResponse(token);
}
}
