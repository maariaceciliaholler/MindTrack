package com.devmindtrack.mindtrack.exceptions;

public class UserException extends Exception{
	
	public Throwable userNotFound(Long id) {
		throw new Error("User not found with ID: " + id);
	}
	
	public Throwable userNotSaved() {
		throw new Error("User was not successfully saved");
	}
	
	public Throwable userNotDeleted(Long id) {
		throw new Error("User " + id + " could not be deleted");
	}
}
