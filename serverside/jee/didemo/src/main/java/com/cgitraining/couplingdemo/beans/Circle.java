package com.cgitraining.couplingdemo.beans;

public class Circle implements IShape {
    private int radius;

    public Circle(){}

    public Circle(int radius){
        this.radius=radius;
    }
    public int getRadius(){
        return radius;
    }
    public void setRadius(int radius){
        this.radius=radius;
    }

    @Override
    public int area() {
        return (int)3.14*radius*radius;
    }
}
