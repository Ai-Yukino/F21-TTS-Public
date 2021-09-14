package com.company;

public class Car {
    public int numOfDoors;
    private int wheelNumber;
    private String color;
    public String hello() {
        return "Hello, I am a car.";
    }
    public String printColor() {
        return color;
    }
    public void setColor(String newColor) {
        this.color = newColor;
    }
    public void setFriendsColor(Car carObject) {
        String newColor = "purple polka-dots";
        carObject.color = newColor;
    }
    public static void changeWheelNumber(Car carObject) {
        carObject.wheelNumber = 18;
    }
    public void printWheelNumber() {
        System.out.printf("Number of wheels %d", this.wheelNumber);
    }
}
