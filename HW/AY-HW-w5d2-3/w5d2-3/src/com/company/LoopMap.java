package com.company;

import java.util.Scanner;
import java.util.HashMap;
import java.util.Map;

public class LoopMap {
    //🍂1.1🍃
    public static void loop() {
        Scanner input = new Scanner(System.in);
        float[] numbers = new float[5];
        System.out.println("Running Loop()\n---");
        System.out.println("We'll take five numbers (floats) and compute the sum, product, largest, " +
                "and smallest of those numbers.");
        //🍂User input🍃
        System.out.print("Enter the first number: ");
        numbers[0] = Float.parseFloat(input.nextLine());
        System.out.print("Enter the second number: ");
        numbers[1] = Float.parseFloat(input.nextLine());
        System.out.print("Enter the third number: ");
        numbers[2] = Float.parseFloat(input.nextLine());
        System.out.print("Enter the fourth number: ");
        numbers[3] = Float.parseFloat(input.nextLine());
        System.out.print("Enter the fifth number: ");
        numbers[4] = Float.parseFloat(input.nextLine());

        //🍂Calculations🍃
        float sum = numbers[0];
        float product = numbers[0];
        float largest = numbers[0];
        float smallest = numbers[0];
        for (int i = 1; i < numbers.length; i++) {
            sum += numbers[i];
            product *= numbers[i];
            if (largest < numbers[i]) {
                largest = numbers[i];
            }
            if (smallest > numbers[i]) {
                smallest = numbers[i];
            }
        }

        //🍂Output calculations🍃
        System.out.println("\nResults:");
        System.out.printf("Sum: %.2f\n", sum);
        System.out.printf("Product: %.2f\n", product);
        System.out.printf("Largest number: %.2f\n", largest);
        System.out.printf("Smallest number: %.2f\n", smallest);
        System.out.println("---\nTerminating Loop()");
    }

    //🍂1.2🍃
    //https://www.geeksforgeeks.org/java-util-hashmap-in-java-with-examples/
    public static void map() {
        //🍂Define and fill HashMap🍃
        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put("Lexus ES", "Lexus");
        hashMap.put("Lexus LX", "Lexus");
        hashMap.put("Elantra", "Hyundai");
        hashMap.put("Ioniq", "Hyundai");
        hashMap.put("Sprinter Trueno", "Toyota");
        hashMap.put("Tundra", "Toyota");
        hashMap.put("Model S", "Tesla");
        hashMap.put("DeLorean", "DMC");
        hashMap.put("Range Rover", "Land Rover");

        //🍂Get user input (i.e. make)
        // and return value (i.e. model)
        // or print out full hashMap🍃
        Scanner input = new Scanner(System.in);
        System.out.println("Running map()\n---");
        System.out.println("What model are you looking for?");
        String model = input.nextLine();
        if (hashMap.get(model) != null) {
            System.out.printf("Yes, the %s made by %s is in stock.\n", model, hashMap.get(model));
        } else {
            System.out.printf("No, we don't have a vehicle with %s as the exact **model** name.\n\n", model);
            System.out.println("Our current inventory is:");
            //https://www.geeksforgeeks.org/iterate-map-java/
            for (Map.Entry<String, String> entry : hashMap.entrySet()) {
                System.out.printf("Model: %s, Make: %s\n", entry.getKey(), entry.getValue());
            }
        }
        System.out.println("---\nTerminating map()");
    }
}