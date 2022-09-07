package com.cgitraining.couplingdemo;

public class Canvas {

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
       System.out.println("drawing shape="+area);
   }

}
