<h1 align="center">
    📖 Library for IFMA
</h1>

<p align="center">
    Web application for management and access control to the library of Instituto Federal do Maranhã - Campus Avançado Porto Franco.
</p>

<div align="center">
    <img src="https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black">
    <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white">
    <img src="https://img.shields.io/badge/Fastify-000000.svg?style=for-the-badge&logo=Fastify&logoColor=white">
    <img src="https://img.shields.io/badge/Zod-3E67B1.svg?style=for-the-badge&logo=Zod&logoColor=white">
    <img src="https://img.shields.io/badge/Conventional%20Commits-FE5196.svg?style=for-the-badge&logo=Conventional-Commits&logoColor=white">
</div>

##

## Content Table
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Conventional Commits](#conventional-commits)
- [Result Pattern](#result-pattern)
- [License](#license)
- [Contact](#contact)

## Requirements

1. `NodeJS v20.x`.

## Getting Started

Follow the step-by-step instructions to set up and run the project:

1. Clone the repository:

    ```bash
    git clone https://github.com/Victor101106/Library-IFMA.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure environment variables:

    - Copy `.env.example` file and rename it to `.env`:

        ```bash
        cp .env.example .env
        ```

    - Update the `.env` file with the required values. Refer to the [Environment Variables](#environment-variables) for details.

4. Run the project in development mode:

    ```bash
    npm run start:dev
    ```

## Environment Variables

To run the project correctly, you must set the required environment variables. Create a `.env` file in the root directory based on the `.env.example` file. Below is a description of the required variables:

| Variable          | Description                                      | Example Value                |
|-------------------|--------------------------------------------------|------------------------------|
| `PORT`            | The port where the server will listen            | `3030`                       |

## Conventional Commits

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification to maintain a clean and consistent commit history.

### How to Use

1. Stage your changes:

    ```bash
    git add [<pathspec>...]
    ```

2. Commit using `Commitizen`:

    ```bash
    npm git:commit
    ```

3. Follow the interactive prompts.
    `Commitizen` will guide you through crafting a proper commit message.

### Message Structure

The commit message should be structured as follows:

```bash
<type>[optional scope]: <description>
```

The commit type must be followed as follows:

| Type     | Description                                   |
|----------|-----------------------------------------------|
| feat     | A new feature                                 |
| fix      | A bug fix                                     |
| docs     | Documentation-only changes                    |
| style    | Code style changes (no logic modifications)   |
| refactor | Code refactoring (neither fixes nor features) |
| perf     | Performance improvements                      |
| test     | Adding or updating tests                      |
| build    | Changes to the build system or dependencies   |
| ci       | CI/CD configuration changes                   |
| chore    | Maintenance tasks (e.g., formatting)          |
| revert   | Reverts a previous commit                     |

#### Example:
```bash
feat(auth): add login functionality
```

## Result Pattern

This project uses the **Go-based Result Pattern** to manage type-safe operation results. The `Result` type provides a type-safe way to handle both successful and failed operations.

### Defining `Result`

To define a result, use the generic type `Result<E, S>`, where:
- `E`: represents the type of the error (failed result).
- `S`: represents the type of the success (successful result).

#### Example:

Below is an example of a division function. If the operation fails (e.g., division by zero), the result contains a DivisionByZeroError. Otherwise, it contains a number.

```ts
function divide(dividend: number, divisor: number): Result<DivisionByZeroError, number> {
    // Implementation goes here
}
```

### Returning `Result`

To return a result, use:
- `error(E)`: for failed outcomes, passing an instance of the error type (`E`).
- `success(S)`: for successful outcomes, passing the result value (`S`).

#### Example:

Here’s the implementation of the divide function using `error(E)` for failure and `success(S)` for success:

```ts
function divide(dividend: number, divisor: number): Result<DivisionByZeroError, number> {
    
    if (divisor === 0) {
        return error(new DivisionByZeroError());
    }

    return success(dividend / divisor);

}
```

### Handling `Result`

To handle a result, use the `isSuccess` and `isError` methods to determine the return type. Then, access the corresponding value safely.

#### Example:

Here’s an example of using the divide function to calculate the division of `x` and `y`:

```ts

const result = divide(x, y); // Get the result

if (result.isError) {
    throw result.value; // Handle the error (e.g., throw)
}

console.log(`Result: ${result.value}`); // Process the success value

```

## License

Distributed under the GPL v3.0 license. See [LICENSE](LICENSE) for more information.

## Contact

Victor Gabriel • [Github](https://github.com/Victor101106/) • victorgabriel101106+github@gmail.com \
Dyego Santos • [Github](https://github.com/pollary/) • diegopollary@gmail.com