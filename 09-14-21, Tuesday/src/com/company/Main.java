
package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        //🍂Private versus public methods🍃

        // Check difference between private static and private access
        // E.g. can instance x and instance y of the same class
        // access private methods from each other?
        // Answer: Yes
        Car myCar = new Car();
        System.out.println(myCar.hello());
        myCar.setColor("bright red");
        // myCar.color = "bright red";
        System.out.printf("My color is %s\n", myCar.printColor());

        Car anotherCar = new Car();
        anotherCar.setFriendsColor(myCar);
        System.out.printf("My color is %s\n", myCar.printColor());

        // Can a class (i.e. non-static) method
        // change the private variable
        // on an instance of that class?
        // Answer: yes
        Car.changeWheelNumber(myCar);
        myCar.printWheelNumber();

        // 🍂Validate user inputs🍃
        // Test.test2();
        // Test.test3();
    }
}
