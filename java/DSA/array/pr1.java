public class pr1 {
    public static void main(String[] args) {
        String[] fruits = { "banana", "apple", "papaya", "grapes" };
        for (int i = 0; i < fruits.length; i++) {

            System.out.println(fruits[i]);
        }

        int[] nums = { 1, 2, 3, 4, 5 };
        int sum = 0;

        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
        }
        ;

        System.out.println("sum:" + sum);
    }

}