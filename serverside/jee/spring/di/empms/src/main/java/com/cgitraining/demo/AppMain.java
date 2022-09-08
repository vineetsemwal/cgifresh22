package com.cgitraining.demo;

import com.cgitraining.demo.frontend.Frontend;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class AppMain {
    public static void main(String args[]){

        ApplicationContext context=new AnnotationConfigApplicationContext(AppConfig.class);
        Frontend frontend=context.getBean(Frontend.class);
        frontend.runUI();

    }
}
