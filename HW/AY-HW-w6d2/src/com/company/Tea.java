package com.company;

public class Tea {
    public String Category;
    public String CommonName;

    // 🍂Private attributes🍃
    private float Price;
    private float InventoryWeight;
    private float Age;
    private int ID;

    // 🍂Empty constructor🍃
    public Tea() {
    }

    // 🍂Two-variable constructor🍃
    public Tea(int newID, float newInventoryWeight) {
        this.ID = newID;
        this.InventoryWeight = newInventoryWeight;
    }

    // 🍂Three-variable constructor🍃
    public Tea(int newID, float newAge, float newPrice) {
        this.ID = newID;
        this.Age = newAge;
        this.Price = newPrice;
    }

    // 🍂Get methods🍃
    public float getPrice() {
        return Price;
    }

    public float getInventoryWeight() {
        return InventoryWeight;
    }

    public int getID() {
        return ID;
    }

    public float getAge() {
        return Age;
    }

    // 🍂Set methods🍃
    public void setPrice(float newPrice) {
        this.Price = newPrice;
    }

    public void setInventoryWeight(float newInventoryWeight) {
        this.InventoryWeight = newInventoryWeight;
    }

    public void setAge(float newAge) {
        this.Age = newAge;
    }

    public void setID(int newID) {
        this.ID = newID;
    }

    // 🍂Boolean method🍃
    private boolean checkWeight(float weight) {
        boolean hasWeight = false;
        if (this.InventoryWeight >= weight) {
            hasWeight = true;
        }
        return hasWeight;
    }

    // 🍂String method🍃
    public String awake(Tea tea) {
        System.out.println("Why are you awake?");
        return "Java and also " + tea.CommonName;
    }
}
