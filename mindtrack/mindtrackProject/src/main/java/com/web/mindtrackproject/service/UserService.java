package com.web.mindtrackproject.service;

import com.web.mindtrackproject.entity.User;
import com.web.mindtrackproject.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User createUser(User user) {
        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public User loginUser(String email, String password) throws Exception {
        //TODO fazer funcionar
//        User user = userRepository.findByEmail(email);
//
//        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
//            return user;
//        } else {
//            throw new Exception("Email e/ou senha inválidos.");
//        }
        throw new Exception("Email e/ou senha inválidos.");
    }
}
