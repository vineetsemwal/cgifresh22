package com.cgitraining.couplingdemo;

public class AppMain {
    public static void main(String args[]){
        Square shape1=new Square(5);
        Canvas canvas1=new Canvas();
        canvas1.setShape(shape1);
        canvas1.drawShape();

        Circle shape2=new Circle(3);
        Canvas canvas2=new Canvas(shape2);
        canvas2.drawShape();

    }
}
