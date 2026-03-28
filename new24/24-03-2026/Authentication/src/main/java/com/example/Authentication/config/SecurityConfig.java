package com.example.Authentication.config;

import com.example.Authentication.authentication.JwFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    private final JwFilter jwFilter;

    public SecurityConfig(JwFilter jwFilter) {
        this.jwFilter = jwFilter;
    }


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
            .csrf(csrf -> csrf.disable()) // disable for testing
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/auth/**").permitAll() // allow login/register
                .anyRequest().authenticated() // everything else needs auth
            );

        return http.build();
    }
}