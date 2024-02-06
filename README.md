# React Component Library

## Overview
This document provides instructions to set up and run the React Component Library developed as part of the coding assignment. This library includes various UI components and is Dockerized for easy setup and deployment.

## Prerequisites
- Docker installed on your system.

## Setup and Running the Application

### Cloning the Repository
First, clone the repository to your local machine:
```bash
git clone https://github.com/nfeng037/React-Component-Library
cd react-component-library
```

### Building the Docker Image
To build the Docker image for the application, run the following command in the root directory of the project:
```bash
docker build -t feng_na_coding_assignment12 .
```

### Running the Docker Container
Once the image is built, you can run the container using:
```bash
docker run -p 8083:8083 --name feng_na_coding_assignment12 feng_na_coding_assignment12
```

### Accessing the Component Library
After the container starts, you can access the component library by navigating to [http://localhost:8083](http://localhost:8083)
 in your web browser.

## Components
The library includes the following components:

*   Button
*   Label
*   Text
*   Table (with Table Header, Table Row, Table Cell, and Table Footer)
*   Dropdown
*   Radio Button
*   Image
*   Hero Image
*   Card
Each component is responsive and includes a default state and a disabled state.

## Testing
The library includes basic tests for each component. To run the tests, use the following command:

```bash
npm test
```

## Storybook
This project uses Storybook to showcase components. You can view the components and their different states in the Storybook interface.

