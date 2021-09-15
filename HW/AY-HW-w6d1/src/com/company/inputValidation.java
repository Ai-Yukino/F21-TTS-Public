package com.company;

import java.util.Scanner;

public class inputValidation {

    // 🍂Prompt player and validate their input;
    // Overloaded for different return types🍃
    // https://www.geeksforgeeks.org/overloading-in-java/

    // 🍂System.out.print🍃
    public static String prompt(String message, Scanner scannerObject, String... validInputs) {

        String playerInput = "";
        boolean isValid = false;

        // 🍂Check if player enters some input🍃
        do {
            // 🌿Prompt player for input🌿
            System.out.print(message);

            // 🌿Check if player enters any input🌿
            if (scannerObject.hasNextLine()) {
                playerInput = scannerObject.nextLine();

                // 🌿If validInputs varargs
                // was at least one value in the prompt() call,
                // then validate against those values;
                //  otherwise, use validate with
                //  default criteria🌿
                if (validInputs.length > 0) {
                    isValid = checkSpecific(playerInput, validInputs);
                } else {
                    isValid = checkDefault(playerInput);
                }
            }
        } while (!isValid);

        return playerInput;
    }

    // 🍂System.out.println🍃
    public static String promptln(String message, Scanner scannerObject, String... validInputs) {

        String playerInput = "";
        boolean isValid = false;

        // 🍂Check if player enters some input🍃
        do {
            // 🌿Prompt player for input🌿
            System.out.println(message);

            // 🌿Check if player enters any input🌿
            if (scannerObject.hasNextLine()) {
                playerInput = scannerObject.nextLine();

                // 🌿If validInputs varargs
                // was at least one value in the prompt() call,
                // then validate against those values;
                //  otherwise, use validate with
                //  default criteria🌿
                if (validInputs.length > 0) {
                    isValid = checkSpecific(playerInput, validInputs);
                } else {
                    isValid = checkDefault(playerInput);
                }
            }
        } while (!isValid);

        return playerInput;
    }

    // 🍂System.out.println🍃
    public static int promptlnInt(String message, Scanner scannerObject, int... validInputs) {

        int playerInput = 0;
        boolean isValid = false;

        // 🍂Check if player enters some input🍃
        do {
            // 🌿Prompt player for input🌿
            System.out.println(message);

            // 🌿Check if player enters any input🌿
            if (scannerObject.hasNextInt()) {
                playerInput = scannerObject.nextInt();

                // 🌿If validInputs varargs
                // was at least one value in the prompt() call,
                // then validate against those values;
                //  otherwise, use validate with
                //  default criteria🌿
                if (validInputs.length > 0) {
                    isValid = checkSpecificInt(playerInput, validInputs);
                } else {
                    isValid = checkDefaultInt(playerInput);
                }
            }
            //🌿Clear scanner buffer🌿
            scannerObject.nextLine();
        } while (!isValid);

        return playerInput;
    }
    
    // 🍂"Small" methods used
    // to build the prompt methods 🍃

    // 🍂Check specific validation
    // criteria given by (non-null)
    // validInputs vararg in prompt
    // methods call🍃
    public static boolean checkSpecific(String playerInput, String... validInputs) {
        boolean isValid = false;

        // 🍂playerInput must match
        // at least one string in
        // validInputs🍃
        for (String entry : validInputs) {
            if (playerInput.equals(entry)) {
                isValid = true;
                break;
            }
        }

        return isValid;
    }

    // 🍂Check specific validation
    // criteria given by (non-null)
    // validInputs vararg in prompt
    // methods call🍃
    public static boolean checkSpecificInt(int playerInput, int... validInputs) {
        boolean isValid = false;

        // 🍂validInputs[0] -> lower bound
        // validInputs[1] -> upper bound
        // validInputs[2] -> number of digits🍃
        if (validInputs.length == 1) {
            if (playerInput >= validInputs[0]) {
                isValid = true;
            }
        } else if (validInputs.length == 2) {
            if ((playerInput >= validInputs[0]) && (playerInput <= validInputs[1])) {
                isValid = true;
            }
        }
        return isValid;
    }

    // 🌿Default validation criteria
    // when validInputs vararg is
    // **not** specified in prompt methods call🌿
    public static boolean checkDefault(String playerInput) {
        boolean isValid = false;

        for (int i = 0; i < playerInput.length(); i++) {
            Character character = playerInput.charAt(i);

            // 🍂Non-alphanumeric characters except
            // space ' ' and dash '-' are not allowed🍃
            if (!Character.isLetterOrDigit(character) && !character.equals(' ') && !character.equals('-')) {
                isValid = false;
                break;
                // 🍂The first character cannot
                // be a space ' ' or dash '-'🍃
            } else if ((i == 0) && (character.equals(' ') || character.equals('-'))) {
                isValid = false;
                break;
            } else {
                isValid = true;
            }
        }

        return isValid;
    }

    // 🌿Default validation criteria
    // when validInputs vararg is
    // **not** specified in prompt methods call🌿
    public static boolean checkDefaultInt(int playerInput) {
        boolean isValid = false;

        if (playerInput >= 0) {
            isValid = true;
        }

        return isValid;
    }
}
