package com.company;

public class JCC {
    public static int add(int x, int y) {
        return x + y;
    }

    public static int substract(int x, int y) {
        return x - y;
    }

    public static int multiply(int x, int y) {
        return x * y;
    }

    public static int divide(int x, int y) {
        return x / y;
    }

    public static int square(int x) {
        return x * x;
    }
}

// https://www.geeksforgeeks.org/inheritance-in-java/
class MagicCalculator extends JCC {

    // 🍂Overloaded operations from JCC🍃
    public static double add(double x, double y) {
        return x + y;
    }

    public static double substract(double x, double y) {
        return x - y;
    }

    public static double multiply(double x, double y) {
        return x * y;
    }

    public static double divide(double x, double y) {
        return x / y;
    }

    public static double square(double x) {
        return x * x;
    }

    // https://en.wikipedia.org/wiki/Newton%27s_method#Square_root
    // x -> find root of x
    // x0 -> initial guess to use with Newton's method
    // e -> error tolerance, e.g. see
    // https://en.wikipedia.org/wiki/Machine_epsilon
    public static double sqrt(double a, double x0, double e) {
        double result = x0 - divide(square(x0) - a, multiply(2, x0));
        while (Math.abs(square(result) - a) > e) {
            result = result - divide(square(result) - a, multiply(2, result));
        }
        return result;
    }

    public static double sin(double x) {
        return Math.sin(x);
    }

    public static double cos(double x) {
        return Math.cos(x);
    }

    public static double tan(double x) {
        return Math.tan(x);
    }

    public static int factorial(int x) {
        if (x < 0) {
            System.out.println("Please enter a non-negative integer as an argument.");
            return -1;
        } else if (x == 0) {
            // https://en.wikipedia.org/wiki/Factorial#Factorial_of_zero
            return 1;
        } else {
            int result = x;
            for (int i = x - 1; i > 0; i--) {
                // result *= i;
                result = multiply(result, i);
            }
            return result;
        }

    }

}