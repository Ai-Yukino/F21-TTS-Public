package com.company;

import java.util.Scanner;

public class MadLib {
    public static void madLib() {
//        System.out.println("madLib called");
        Scanner input = new Scanner(System.in);
        System.out.println("Enter a name:");
        String name = input.nextLine();
        System.out.println("Enter an adverb:");
        String adverb = input.nextLine();
        System.out.println("Enter an adjective:");
        String adjective = input.nextLine();
        System.out.println("Enter a noun:");
        String noun1 = input.nextLine();
        System.out.println("Enter another noun:");
        String noun2 = input.nextLine();
        System.out.println("Enter a number:");
        String number = input.nextLine();
        System.out.println("What is your name?");
        String yourName = input.nextLine();

        System.out.printf("Dear %s,\n", name);
        System.out.printf("You are %s %s, and I want to be your %s! ", adverb, adjective, noun1);
        System.out.printf("I want to go to the %s with you in %s days.\n", noun2, number);
        System.out.printf("Sincerely, %s", yourName);
    }
}
