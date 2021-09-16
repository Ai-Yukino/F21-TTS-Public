subclassing food and drink  
drink:  
Should we subtype alc drinks?  
alcoholic and non alcoholic  
cup type  
food:  
prep and delivery time  
side or entree?

# Questions

__If we wanted to rename LunchSpecials to LunchSpecial in Intellij, how do we do that?__

Refactor

__If we don't want LunchSpecial to be able to change the values of the MenuItems that are referenced as item1 and item2,
how do we prevent that? How do we still give access to the data that LunchSpecial needs?__

Change to final maybe

__Consider subclasses for MenuItem including two direct subclasses: Drink and Food. What are appropriate subclasses of
each from a business operational perspective and how does that affect what properties and methods that are attached to
them?__

Drink -> alcoholic/non-alcoholic, milk shakes, hot drinks  
Food -> Sides, entries, desserts  
Does it need to prepped in advance? Or made on the spot?  
Class beverages extends menuItems   
Class entree extends food

__Create a class the represents a MenuItem (or its subclass) as a business analytic object and also a class that Might
represent MenuItem as a presentation object (e.g. as a description on a printed or online object). Think specifically
about what data you would want a business manager to have and what data should(should not) be available to a customer.
(I capitalized Might in the last post. Ignore my capitalization.)__

Business manager yes: cost to make product, ingredients for product, recipe  
Customer no: cost to make, recipe  
Customer yes: ingredients for product (e.g. for allergies)

Business analytic object:

Presentation object:

__As you work through any or all of the above: Please remember the three steps I suggest in the video: 1) Define a use
case as "USER can do X by steps A,B,C and that fulfills NEED by..." 2) List out objects(nouns) and operations(verbs)
that enables this use case. 3) Implement the best version you can think of AT THE MOMENT. Don't worry if it is not
perfect. You will learn something by going through the exercise. Make sure to write down what you learned. 🙂__

# Notes

Review enums and interfaces

# summary

implements vs extends:

extends: subclass/childclass extends takes on properties of parent/super class, implements: follows direct chain of
inheritance and can inherit all the methods

implements interface to use behavior/action.

extend classes implement an interface

Abstract Class:
Any class with at least one abstract method. This requires using abstract keyword. cant be instanciated

Not as comment but has use case scenario

Enums:
constant version of a java. calendar related stuff usually

associations of classes:
Aggregation - one to one Composition - one to many Association - many to many

Factory Pattern:
FP allows abstraction to take place so main method doesn't have to care what is happening.

model view controller

