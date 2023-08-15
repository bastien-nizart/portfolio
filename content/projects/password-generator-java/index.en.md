---
draft: false
date: 2022-12-23
title: "Password Generator"
description: "This project is a random password generator. It allows you to select a security level at the time of instantiation, or manually choose the number of each type of characters"
summary: "This project is a random password generator. It allows you to select a security level at the time of instantiation, or manually choose the number of each type of characters"
author: "Bastien Nizart"
tags: ["java","programming"]
---
# Password generator

## Description

This project is a random password generator. 
It allows you to select a security level at the time of instantiation, 
or manually choose the number of each type of characters (alphanumeric / special)

## Setup

Different parts of the program can be modified/parameterized.

### 1. Character lists

There are three character lists in this program: - letters (all letters from **a to z** and their copies in capital letters) - numbers (all numeric characters from **0 to 9**) - special characters (characters included in the following characters: **@&()§:=+-_%$\*!?,**) 

These lists are defined as lists of private 'char' stored as an argument to the generator.

```java
private final static char[] letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".toCharArray();
```

```java
private final static char[] numericChar = "0123456789".toCharArray();
```

```java
private final static char[] specialChar = "@&()§:=+-_%$*!?,".toCharArray();
```

To add / remove a character from this list, simply modify the character strings directly in the generator class.

### 2. Minimum size

The minimum password size is simply represented by a constant in the generator class.

```java
private final int MIN_LENGTH = 6;
```

To modify it, it is enough to modify this constant.

### 3. Levels of protection

It is possible to instantiate a password generator by passing it as a parameter an enum of type 'PasswordGenerator.PasswordProtection'. 

This enum can take 4 values by default: 
- 'LOW': length equal to the minimum password size 
- 'MEDIUM': has at least 2 types of characters 
- 'STRONG': has all types of characters, and measures at least 12 characters 
- 'CRAZY': meets all the previous conditions and is at least 20 characters long 

You don't need to determine this level of security by hand. It is calculated automatically by the generator with each change. 

To add a level of difficulty, you must first add it to the enum inside the generator:

```java
public enum PasswordProtection {
    LOW, // MINIMUM OF LENGTH
    MEDIUM, // MINIMUM TWO TYPE OF CHARACTER
    STRONG, // MINIMUM ALL CHARACTER + LENGTH OF 12
    CRAZY // WOW MEN, MINIMUM ALL CHARACTER + LENGTH OF 20
}
```

Then modify the method 'setLevelOfProtection()' by adding your conditions

```java
private void setLevelOfProtection() {
    if (this.numberOfNumericChar > 0 && this.numberOfLetter > 0 && this.numberOfSpecialChar > 0) {
        if (getLength() >= 20) {
            this.levelOfProtection = PasswordProtection.CRAZY;
        } else {
            this.levelOfProtection = PasswordProtection.STRONG;
        }
    } else if (
            (this.numberOfNumericChar > 0 && this.numberOfLetter > 0) ||
                    (this.numberOfSpecialChar > 0 && this.numberOfLetter > 0) ||
                    (this.numberOfNumericChar > 0 && this.numberOfSpecialChar > 0)
    ) {
        this.levelOfProtection = PasswordProtection.MEDIUM;
    } else {
        this.levelOfProtection = PasswordProtection.LOW;
    }
}
```

## Usage

### a. Without arguments

```java
PasswordGenerator passwordGen = new PasswordGenerator();
```

With this type of construction, passwordGen will be set with protection to 'PasswordProtection.LOW'. 
It will therefore be composed of 6 letters

```java
PasswordGenerator passwordGen = new PasswordGenerator();
System.out.println(passwordGen.generatePassword());
```

```bash
> "aGjsiK"
```

### b. With the level of robustness

```java
PasswordGenerator passwordGen = new PasswordGenerator(PasswordProtection.STRONG);
```

With this type of construction, passwordGen will be defined with protection given as an argument. It will therefore have the basic configuration of this protection.

```java
PasswordGenerator passwordGen = new PasswordGenerator(PasswordProtection.STRONG);
System.out.println(passwordGen.generatePassword());
```

```bash
> "0h7Z0+p&M0tu7Q1"
```

### c. With an argument

```java
PasswordGenerator passwordGen = new PasswordGenerator(7);
```

Here the parameter given is the number of characters of type 'letters'.

```java
PasswordGenerator passwordGen = new PasswordGenerator(7);
System.out.println(passwordGen.generatePassword());
```

```bash
> "aGhjOqK"
```

#### Exception

If the given number is less than the minimum size, an exception is thrown

```java
PasswordGenerator passwordGen = new PasswordGenerator(4);
System.out.println(passwordGen.generatePassword());
```

```bash
> Exception : Minimum password size is not reached
```

### d. With two arguments

```java
PasswordGenerator passwordGen = new PasswordGenerator(7, 6);
```

Here the first parameter given is the number of characters of type 'letters'. The second is the number of digits present in the password.

```java
PasswordGenerator passwordGen = new PasswordGenerator(7, 6);
System.out.println(passwordGen.generatePassword());
```

```bash
> "37aG6hjO8q8K9"
```

### e. With three arguments

```java
PasswordGenerator passwordGen = new PasswordGenerator(7, 6, 4);
```

Here the first parameter given is the number of characters of type 'letters'. The second is the number of digits present in the password. The third is the number of special characters in the password.

```java
PasswordGenerator passwordGen = new PasswordGenerator(7, 6, 4);
System.out.println(passwordGen.generatePassword());
```

```bash
> "&37(aG6h*jO8$q8K9"
```