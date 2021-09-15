package com.company;

public class Pet {
    // 🍂Attritutes🍃
    private String Name;
    private int Age;
    private String Location;
    private String Type;

    // 🍂Constructors🍃
    // 🌿Empty constructor🌿
    public Pet() {
    }

    // 🌿All-attribute constructor🌿
    public Pet(String newName, int newAge, String newLocation, String newType) {
        this.Name = newName;
        this.Age = newAge;
        this.Location = newLocation;
        this.Type = newType;
    }

    // 🍂Get methods🍃
    public String getName() {
        return Name;
    }

    public int getAge() {
        return Age;
    }

    public String getType() {
        return Type;
    }

    // 🍂Set methods🍃
    public void setName(String newName) {
        this.Name = newName;
    }

    public void setAge(int newAge) {
        this.Age = newAge;
    }

    public void setLocation(String newLocation) {
        this.Location = newLocation;
    }

}
