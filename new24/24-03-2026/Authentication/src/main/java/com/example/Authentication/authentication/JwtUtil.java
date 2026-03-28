package com.example.Authentication.authentication;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;
import java.util.Date;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Claims; 
import javax.crypto.SecretKey; 


@Component
public class JwtUtil {
    
    private final String SECRET="jhfhekjfndskjbvkjkaahfekjghdjnkjbkjbsdfhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjh";
    private final SecretKey key=Keys.hmacShaKeyFor(SECRET.getBytes());
    private final long EXPIRATION=1000*60*60*24;

   public String generateToken(String username)
{
    return Jwts.builder()
        .setSubject(username)
        .setIssuedAt(new Date())
        .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))
        .signWith(key)
        .compact();
}

   public String extractUsername(String token)
{
    return getClaims(token).getSubject();
}

   public boolean validateToken(String token)
{
    try {
        getClaims(token);
        return true;
    } catch (Exception e) {
        return false;
    }
}
       public Claims getClaims(String token){
    return Jwts.parserBuilder()
        .setSigningKey(key)
        .build()
        .parseClaimsJws(token)
        .getBody();     
}
}