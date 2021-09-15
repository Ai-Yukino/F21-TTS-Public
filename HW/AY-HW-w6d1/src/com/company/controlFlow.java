package com.company;

import java.util.Random;
import java.util.Scanner;
import java.util.Arrays;

public class controlFlow {

    public static void flow() {
        // 🍂Print default valid characters🍃
        AsciiChars.printChars();

        // 🍂Initialize some objects🍃
        Scanner scannerObject = new Scanner(System.in);
        String message;
        boolean isPlaying = false;

        // 🍂Name prompt🍃
        message = "\nPlease enter your name: ";
        String playerName = inputValidation.prompt(message, scannerObject);
        System.out.printf("Hello %s!\n", playerName);

        // 🍂Start game🍃
        message = "Would you like to play a game?" +
                "\n (Enter 'yes' or 'y' to play)";
        String isPlayingString = inputValidation.promptln(message, scannerObject);

        if (inputValidation.checkSpecific(isPlayingString, "yes", "y")) {
            System.out.println("Starting the game!");
            isPlaying = true;
        } else {
            System.out.printf("Goodbye, %s!\n", playerName);
            return;
        }

        while (isPlaying) {
            numbers(scannerObject);
            message = "Do you want to play again?\n(Enter 'yes' or 'y' to play again.)";
            isPlayingString = inputValidation.promptln(message, scannerObject);

            if (inputValidation.checkSpecific(isPlayingString, "yes", "y")) {
                isPlaying = true;
            } else {
                System.out.printf("Thanks for playing, %s!\n", playerName);
                isPlaying = false;
            }
        }
    }

    public static void numbers(Scanner scannerObject) {

        // 🍂Initialize objects🍃
        String message;

        // 🍂Get player inputs🍃
        message = "Do you have a red car?\n(Enter 'yes' or 'no')";
        String hasRedCar = inputValidation.promptln(message, scannerObject, "yes", "no");

        message = "What is the name of your favorite pet?";
        String petName = inputValidation.promptln(message, scannerObject);

        message = "How old is your favorite pet?" +
                "\n(Enter a whole human year.)";
        int petAge = inputValidation.promptlnInt(message, scannerObject, 0);

        message = "What is your lucky number?" +
                "\n(Enter a positive whole number.)";
        int luckyNumber = inputValidation.promptlnInt(message, scannerObject, 1);

        message = "Do you have a favorite quarterback? If so, what is their jersey number?" +
                "\n(Enter a whole number or '-1'.)";
        int jerseyNumber = inputValidation.promptlnInt(message, scannerObject, -1, 99);

        message = "What is the two-digit model year of your car?" +
                "\n (e.g. 2001 -> '01'; 1973 -> '73'; Enter -1 if this does not apply to you.)";
        int carNumber = inputValidation.promptlnInt(message, scannerObject, -1, 99);

        message = "What is the name of your favorite actor?";
        String actorName = inputValidation.promptln(message, scannerObject);

        message = "Enter random number between 1 and 50." +
                "\n(Enter a whole number.)";
        int randomNumber = inputValidation.promptlnInt(message, scannerObject, 1, 50);

        // 🍂Generate numbers🍃
        int[] ticket = new int[6];

        // 🌿Random numbers🌿
        // https://www.geeksforgeeks.org/generating-random-numbers-in-java/
        Random rand = new Random();
        int x1 = rand.nextInt(10 * hasRedCar.length());
        int x2 = rand.nextInt(10 * hasRedCar.length());
        int x3 = rand.nextInt(10 * hasRedCar.length());
        int[] x = {x1, x2, x3};
        int y;

        // 🌿Magic ball:
        // jersey/lucky number🌿
        y = x[rand.nextInt(3)];
        int base = -1;
        if (jerseyNumber == -1) {
            base = luckyNumber;
        } else {
            base = (y % 2) * jerseyNumber + (y % 2) * luckyNumber;
        }
        ticket[0] = (base * y) % (75 + 1);

        // 🌿Pet/actor number🌿
        // https://www.geeksforgeeks.org/java-program-to-get-a-character-from-a-string/
        if (petName.length() >= 3) {
            ticket[1] = petName.charAt(2) % 65;
        } else {
            ticket[1] = (actorName.charAt(0) * actorName.charAt(actorName.length() - 1)) % 65;
        }

        // 🌿Car/lucky number🌿
        if (carNumber == -1) {
            carNumber = luckyNumber * y;
        }
        ticket[2] = (carNumber + luckyNumber) % (65 + 1);

        // 🌿Random number🌿
        y = x[rand.nextInt(3)];
        ticket[3] = randomNumber - y;

        // 🌿42/pet age/car number🌿
        ticket[4] = (42 + petAge + carNumber) % (65 + 1);

        // 🌿jersey/pet age/lucky number🌿
        ticket[5] = (jerseyNumber + petAge + luckyNumber) % (65 + 1);

        // 🍂Print results🍃
        System.out.printf("\nLottery numbers: %d %d %d %d %d Magic ball: %d\n", ticket[1],
                ticket[2], ticket[3], ticket[4], ticket[5], ticket[0]);
    }
}