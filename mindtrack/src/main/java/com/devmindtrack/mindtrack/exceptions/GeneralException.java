package com.devmindtrack.mindtrack.exceptions;

public class GeneralException extends Exception{
	
	public Throwable nullParameter() {
		throw new Error("Invalid parameter was sent");
	}
}
