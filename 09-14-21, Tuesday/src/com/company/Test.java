package com.company;

import java.util.Scanner;

// 🍂Validating user inputs🍃
public class Test {
    public static void test2() {
        Scanner scanner = new Scanner(System.in);
        boolean go = true;
        while (go) {
            System.out.println("1 to kill: ");
            int x = scanner.nextInt();
            if (x == 1) {
                go = false;
            }
        }
    }

    public static void test3() {
        Scanner scanner = new Scanner(System.in);
        boolean go = true;
        while (go) {
            System.out.println("1 to kill: ");
            if (scanner.hasNextInt()) {
                int x = scanner.nextInt();
                if (x == 1) {
                    go = false;
                }
            } else {
                scanner.nextLine();
                System.out.println("Please input an integer.");
            }
        }
    }
}
