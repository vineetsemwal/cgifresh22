package com.cgitraining.couplingdemo;

import com.cgitraining.couplingdemo.beans.Canvas;
import com.cgitraining.couplingdemo.beans.Circle;
import com.cgitraining.couplingdemo.beans.Square;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class AppMain {
    public static void main(String args[]){

        ApplicationContext context=new AnnotationConfigApplicationContext(JavaConfig.class);
        Canvas canvas1=context.getBean(Canvas.class);// fetched bean by type from container
        canvas1.drawShape();

        Square square=context.getBean(Square.class);// fetched bean by type from container
        System.out.println("side of square="+square.getSide());

        Canvas canvas2= context.getBean("canvas",Canvas.class);//fetch bean by name
        canvas2.drawShape();


    }
}
