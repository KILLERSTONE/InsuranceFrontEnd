# Insurance FE

## Overview
Brief overview of the frontend made for the Insurance Application.

## Components and Modules
Description of various components and modules created for the project.

### Login Component
- Description of the login component.
- How it interacts with the AuthService.
- Usage of HttpClient module for API calls.
- Storage of login information in the database.

### Dashboard Component
- Description of the dashboard component.
- How it is implemented in the shared module.
- Display of policies associated with the employee.
- Links to other pages and buttons based on the design.

### Payment Module
- Description of the payment module.
- Components included: CardForm, Details, and Payment.
- Usage of parent-child communication for controlling components.
- Implementation of CRUD functionality for cards.
- Different form validations used.

### Navbar and Footer
- Description of the navbar and footer.
- Functionality of navbar links.
- Integration with routing for navigation.

### Routing
- Description of routing implementation.
- Mapping of components in the Payment Module.
- Handling of invalid routes.

### Authentication
- Description of the authentication mechanism.
- Usage of LoginAuth guard.
- Persistence of login using SessionStorage.

## Further Exploration
  - Implement an Admin page accessible only to users with admin privileges.
  - Create an Admin Auth Guard to restrict access to admin users.
  - Design the Admin page to display login logs, showing all accesses made to the site.
