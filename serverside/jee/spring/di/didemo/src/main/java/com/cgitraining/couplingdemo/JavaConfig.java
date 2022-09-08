package com.cgitraining.couplingdemo;

import com.cgitraining.couplingdemo.beans.Square;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;


@PropertySource("app.properties")
@ComponentScan("com.cgitraining.couplingdemo")
@Configuration
public class JavaConfig {

  //  @Bean
    public Square square(){
        Square square=new Square();
        square.setSide(5);
        return  square;
    }

}
