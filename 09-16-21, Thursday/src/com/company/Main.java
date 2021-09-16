package com.company;

// We dont need to import when its in the same package
//import com.company.MenuItem;
public class Main {
    public static void main(String[] args) {
        MenuItem mongBeef = new MenuItem(25, "Mongolian Beef");
        System.out.println(mongBeef);
        MenuItem kPChick = new MenuItem(20, "Kung Pao Chicken");
        System.out.println(kPChick);
        LunchSpecial myLunchSpecial = new LunchSpecial(mongBeef, kPChick);
        System.out.println(myLunchSpecial);
    }
}
