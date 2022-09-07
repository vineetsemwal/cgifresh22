package com.cgitraining.couplingdemo.beans;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Canvas {

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


   public void  drawShape(){
       int area= shape.area();
       System.out.println("canvas using  shape ="+shape.getClass().getSimpleName());
       System.out.println("drawing shape="+area);
   }

}
