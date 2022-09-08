package com.cgitraining.couplingdemo.beans;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class Canvas {

    @Qualifier("circle")
    @Autowired
   private IShape shape;

   public Canvas(){

   }

   public Canvas(IShape shape){
       this.shape =shape;
   }


   public void setShape(IShape shape){
       this.shape =shape;
   }

    @PostConstruct
    public void afterInit(){
        System.out.println("**inside Canvas after init shape area="+shape.getClass().getSimpleName());
    }

   public void  drawShape(){
       int area= shape.area();
       System.out.println("canvas using  shape ="+shape.getClass().getSimpleName());
       System.out.println("drawing shape="+area);
   }

}
