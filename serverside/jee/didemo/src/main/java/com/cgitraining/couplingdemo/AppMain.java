package com.cgitraining.couplingdemo;

import com.cgitraining.couplingdemo.beans.Canvas;
import com.cgitraining.couplingdemo.beans.Circle;
import com.cgitraining.couplingdemo.beans.Square;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class AppMain {
    public static void main(String args[]){

        ApplicationContext context=new AnnotationConfigApplicationContext(JavaConfig.class);
        Canvas canvas=context.getBean(Canvas.class);
        canvas.drawShape();

        Square square=context.getBean(Square.class);
        System.out.println("side of square="+square.getSide());
    }
}
