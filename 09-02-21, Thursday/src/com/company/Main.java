package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
//    //        just to print
//	System.out.print("Hewo world\n");
//        // This prints to a new line
//        System.out.println("How are uwu doing?");
//            System.out.print("I'm duwuing great\n");

//        String str = "Word";
//        int num = 15;
//        double numdl = 3.134;
//        float numF = 135.345f;
//        long numL = 23463630043499124L;
//        byte numByte = 126;
//        char strChar = 'e';
//        boolean isFalse = true;

//        int num, top, here;
//        int num;
//        int pop;
//        int here;

//        int num = 0, top = 6, here = 4;
//        int num1 = 0;
//        int pop = 8;
//        int here5 = 4;

//        int here = 0;
//        System.out.println(here);
//
        Scanner input = new Scanner(System.in);
        System.out.println("What is your first name? ");
        String firstName = input.nextLine();
        System.out.println("What's your last name?");
        String lastName = input.nextLine();

//        String numer = "1435934589";
//        Integer number = 123123;
//        Long lnum = 2134234L;
//        System.out.println("Hewo, " + firstName);
//        System.out.printf("Hewo %s!\n", firstName);
//        System.out.printf("Bye-bye %s!\n", firstName);
//        System.out.printf("Bye-bye %s!\n", firstName);
        System.out.printf("Hewo %s, %s!\n", lastName, firstName);
        System.out.printf("Bye-bye %s %s!\n", firstName, lastName);
    }
}
