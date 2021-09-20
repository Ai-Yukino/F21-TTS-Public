package com.company;

public class LunchSpecial {
    public int priceAdjustment1;
    public int priceAdjustment2;
    public int portionAdjustment1;
    public int portionAdjustment2;
    public MenuItem item1;
    public MenuItem item2;

    public LunchSpecial(MenuItem item1, MenuItem item2) {
        this.item1 = item1;
        this.item2 = item2;
        this.priceAdjustment1 = 60;
        this.priceAdjustment2 = 70;
        this.portionAdjustment1 = 80;
        this.portionAdjustment2 = 80;
        System.out.println(item1.priceInDollars);
        this.item1.priceInDollars += 25;
        System.out.println(item1.priceInDollars);
    }

    // public void changeTest(MenuItem item) {
    //
    // }


    public String toString() {
        return "Lunch Special: " + this.item1 + " and " + this.item2;
    }
}