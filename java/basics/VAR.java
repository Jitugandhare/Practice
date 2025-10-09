public class VAR {
    public static void main(String[] args) {
        var myNum = 5;                  // 'var' used correctly inside method
        Object obj = myNum;             // autobox to Integer
        System.out.println(obj.getClass().getName()); // prints: java.lang.Integer
    }
}
