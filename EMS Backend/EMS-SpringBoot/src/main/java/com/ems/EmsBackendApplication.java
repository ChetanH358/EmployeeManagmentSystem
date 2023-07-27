package com.ems;

import com.ems.model.Employee;
import com.ems.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmsBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(EmsBackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository repository;

	@Override
	public void run(String... args) throws Exception {
	/*
		Employee e1 = new Employee();
		e1.setFirstName("Suresh");
		e1.setLastName("bennekoppa");
		e1.setEmailId("suresh56@gmail.com");
		repository.save(e1);

		Employee e2 = new Employee();
		e2.setFirstName("Ramesh");
		e2.setLastName("basankoppa");
		e2.setEmailId("rameesh84@gmail.com");
		repository.save(e2);

		Employee e3 = new Employee();
		e3.setFirstName("Mantesh");
		e3.setLastName("kalawad");
		e3.setEmailId("mantesh27@gmail.com");
		repository.save(e3);
	*/
	}
}
