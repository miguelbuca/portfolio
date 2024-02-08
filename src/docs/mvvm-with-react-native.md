# Implementing MVVM Architecture in React Native
___

## Introduction

React Native has become a popular framework for building cross-platform mobile applications. To ensure a scalable and maintainable codebase, adopting a proper architectural pattern is crucial. In this article, we'll explore the Model-View-ViewModel (MVVM) architecture and how to implement it in a React Native project.

## Understanding MVVM

MVVM is an architectural pattern that separates the application into three main components:

- **Model**: Represents the data and business logic of the application.
- **View**: Displays the user interface and forwards user inputs to the ViewModel.
- **ViewModel**: Acts as a mediator between the Model and the View, handling user inputs, updating the Model, and notifying the View of changes.

## Setting Up a React Native Project

Before diving into MVVM, let's set up a new React Native project:

```bash
npx create-expo-app app
cd app
```

## Installing Dependencies

To implement MVVM in React Native, we'll use the following dependencies:

```bash
npm install react-navigation react-navigation-stack react-native-gesture-handler
```

## Structuring the Project

Organize your project into folders for better maintainability:

```lua
app
|-- src
|   |-- interfaces
|   |  |-- user.ts
|   |-- models
|   |  |-- user.ts
|   |-- views
|   |  |-- sign-in.tsx
|   |-- viewmodels
|   |  |-- sign-in.ts
|-- App.ts
```

## **Implementing MVVM**

## Interfaces

Create a simple interface representing our user data. In **src/interfaces/user.ts**:

```ts
export interface User{
  id: string;
  name: string;
  email: string;
  password: string;
}
```

## Models

Create a simple model representing our application data. In **src/models/user.ts**:

```ts
import api from 'your-api-file'
import { User } from '../interfaces/user';

export function userModel<T>(){
  
  const signIn = async (credentials: Pick<T, 'email' | 'password'>) =>{
    const res = await api.post<T>('/signIn',{
      ...credentials
    })
    return res
  }

  return {
    signIn
  }
}
```
