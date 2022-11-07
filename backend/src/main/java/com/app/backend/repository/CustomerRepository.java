package com.app.backend.repository;

import com.app.backend.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {
    Customer findByCpf(String cpf);
    Customer findByCnpj(String cnpj);
    Customer findByEmail(String email);
    Customer findByName(String name);
    Customer deleteByCpf(String cpf);
    boolean existsByCpf(String cpf);
    boolean existsByCnpj(String cnpj);
}
