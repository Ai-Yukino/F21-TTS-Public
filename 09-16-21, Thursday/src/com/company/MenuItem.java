package com.company;

public class MenuItem {
    //Instance Variables
    // private int priceInDollars;
    protected int priceInDollars;
    private String name;
    protected boolean available;
    protected String ingredients;

    // Constructors
    public MenuItem(int priceInDollars, String name) {
        this.priceInDollars = priceInDollars;
        this.name = name;
    }

    public MenuItem() {
    }

    // Try to override toString()
    public String toString() {
        return name;
    }
}