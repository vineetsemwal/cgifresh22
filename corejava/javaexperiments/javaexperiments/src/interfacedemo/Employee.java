package interfacedemo;

public class Employee {
    private int id;

    private  String name;
    private  int age;

    public  Employee(int id, String name, int age){
        this.id=id;
        this.name=name;
        this.age=age;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public boolean equals(Object obj) {
        if(this==obj){
            return true;
        }

        if(obj==null || !(obj instanceof Employee)){
            return  false;
        }
        Employee that=(Employee) obj;
        return (id==that.id);

    }

    @Override
    public int hashCode() {
        return id;
    }
}
