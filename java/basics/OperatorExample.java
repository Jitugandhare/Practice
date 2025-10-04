public class OperatorExample {

    public static void main(String[] args) {
        int a = 101;
        int b = 30;

        System.out.println("Addition (a+b) = " + (a + b));
        System.out.println("Subtraction (a-b) = " + (a - b));
        System.out.println("Multiplication (a*b) = " + (a * b));
        System.out.println("Divide (a/b) = " + (a / b));

        boolean isEqual = (a == b);
        System.out.println("IsEqual: " + isEqual);

        boolean condition = (a>100 || a<100);
        System.out.println("Is either a or b greater than 100? " + condition);

    }
}
