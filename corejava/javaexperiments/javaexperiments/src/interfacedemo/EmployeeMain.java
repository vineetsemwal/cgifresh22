package interfacedemo;

public class EmployeeMain {

    public static  void main(String args[]){
        Employee e1=new Employee(1,"pankaj",22);
        Employee e2=new Employee(1,"pankaj",22);
        boolean identity=e1==e2;
        System.out.println("identity="+identity);

        boolean equality=e1.equals(e2);
        System.out.println("equality="+equality);

        ObjectOu
    }
}
