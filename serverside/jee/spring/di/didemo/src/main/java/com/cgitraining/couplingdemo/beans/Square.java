package com.cgitraining.couplingdemo.beans;

import com.cgitraining.couplingdemo.beans.IShape;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;


@Component
public class Square implements IShape {

    @Value("${square.side}")
    private int side;

    public Square() {
    }

    public Square(int side) {
        this.side = side;
    }

    public int getSide() {
        return side;
    }

    public void setSide(int side) {
        this.side = side;
    }

    @PostConstruct
    public void afterInit(){
        System.out.println("**inside Square after init side="+side);
    }

    @PreDestroy
    public void destroy(){
        System.out.println("***inside square bean will be destroyed");
    }


    @Override
    public int area() {
        return side * side;
    }

}
