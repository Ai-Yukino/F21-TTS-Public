package com.company;

public class Arrays {
    //🍂2.1🍃
    //🍂Overloading sum()🍃
    //https://www.geeksforgeeks.org/overloading-in-java/
    public static int sum(int[] array) {
        int sum = array[0];
        for (int i = 1; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    public static float sum(float[] array) {
        float sum = array[0];
        for (int i = 1; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    public static double sum(double[] array) {
        double sum = array[0];
        for (int i = 1; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    //🍂2.3🍃
    public static int[] toPower(int size, int power) {
        int[] array = new int[size];
        for (int i = 0; i < size; i++) {
            array[i] = (int) Math.pow(i, power);
        }
        //🍂Print out array🍃`
        System.out.println("Here's what the array looks like: ");
        System.out.print("[");
        for (int i = 0; i < size - 1; i++) {
            System.out.printf("%d, ", array[i]);
        }
        System.out.printf("%d]\n", array[size - 1]);
        //🍂Return array object🍃
        return array;
    }
}
