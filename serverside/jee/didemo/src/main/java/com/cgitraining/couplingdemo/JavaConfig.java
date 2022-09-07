package com.cgitraining.couplingdemo;

import com.cgitraining.couplingdemo.beans.Square;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@ComponentScan("com.cgitraining.couplingdemo")
@Configuration
public class JavaConfig {

    @Bean
    public Square square(){
        Square square=new Square(5);
        return  square;
    }

}
