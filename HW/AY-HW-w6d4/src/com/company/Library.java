package com.company;

import java.util.ArrayList;

public class Library {
    // 🍂Attributes🍃
    private static String hours = "9AM - 5PM every day";
    private String address;
    private ArrayList<Book> books;

    // 🍂Methods🍃
    public Library(String newAddress) {
        this.address = newAddress;
        this.books = new ArrayList<Book>();
    }

    public void addBook(Book newBook) {
        this.books.add(newBook);
    }

    public static void printOpeningHours() {
        System.out.println(hours);
    }

    public void printAddress() {
        System.out.println(this.address);
    }

    public void borrowBook(String requestTitle) {
        for (Book book : this.books) {
            if ((book.title == requestTitle) && !book.isBorrowed()) {
                book.borrowed();
                System.out.printf("%s has been successfully checked out." +
                        "\n", requestTitle);
                return;
            } else if ((book.title == requestTitle) && book.isBorrowed()) {
                System.out.printf("%s is currently checked out." +
                        "\n", requestTitle);
                return;
            }
        }
        System.out.printf("%s is not in our catalog.\n", requestTitle);
    }

    public void printAvailableBooks() {
        int count = 0;
        for (Book book : this.books) {
            if (!book.isBorrowed()) {
                System.out.println(book.title);
                count++;
            }
        }
        if (count == 0) {
            System.out.println("Our catalog is empty.");
        }
    }

    public void returnBook(String requestTitle) {
        for (Book book : this.books) {
            if ((book.title == requestTitle) && book.isBorrowed()) {
                book.returned();
                System.out.printf("%s has been successfully returned." +
                        "\n", requestTitle);
                return;
            }
        }
        System.out.printf("%s is either not checked out or " +
                "part of our collection.\n", requestTitle);
    }
}
