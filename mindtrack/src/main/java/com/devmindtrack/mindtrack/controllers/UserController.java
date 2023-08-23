package com.devmindtrack.mindtrack.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devmindtrack.mindtrack.exceptions.GeneralException;
import com.devmindtrack.mindtrack.exceptions.UserException;
import com.devmindtrack.mindtrack.models.User;
import com.devmindtrack.mindtrack.repositories.UserRepository;

@RestController // Define que a classe usara as requisicoes
@RequestMapping(value = "/user") // Define a rota do controller
public class UserController {

	@Autowired // Usado para injecao de dependencia
	private UserRepository repository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@PostMapping(value = "/register") // Definicao do verbo http utilizado
	public ResponseEntity<String> registerUser(@RequestBody User user) throws Throwable {
		try {
			String encryptedPassword = passwordEncoder.encode(user.getUserPassword());
			user.setUserPassword(encryptedPassword);
			User result = repository.save(user);
			return ResponseEntity.ok(result.getUserName() + "\n" + result.getUserEmail() + "\n" + result.getUserId());
		} catch (Exception ex) {
			throw new UserException().userNotSaved();
		}
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<String> findUserById(@PathVariable Long id) throws Throwable {
		try {
			User result = repository.findById(id).get();
			return ResponseEntity.ok(result.getUserName() + "\n" + result.getUserEmail());
		} catch (Exception ex) {
			throw new UserException().userNotFound(id);
		}
	}
	
	@DeleteMapping(value = "/delete/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable Long id) throws Throwable {
	    try {
	        repository.deleteById(id);
	        return ResponseEntity.ok("User deleted successfully");
	    } catch (Exception ex) {
	        throw new UserException().userNotDeleted(id);
	    }
	}


}
