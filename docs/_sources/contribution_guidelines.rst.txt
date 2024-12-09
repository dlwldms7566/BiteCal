Contribution Guidelines
================================

Welcome! Thank you for your interest in contributing to the BiteCal project.  
This document outlines the process for contributing to our project to ensure a smooth collaboration experience for both team members and external contributors.

Contribution Process
--------------------

1. **Fork and Clone the Repository**
   - Fork this repository and clone it to your local machine:
     ```
     git clone https://github.com/sooheechoi/BiteCal.git
     cd BiteCal
     ```

2. **Add Upstream Repository**
   - Add the original team repository as the upstream remote:
     ```
     git remote add upstream https://github.com/dlwldms7566/BiteCal.git
     ```

3. **Create a Branch**
   - Before starting any work, create a new branch for your changes:
     ```
     git checkout -b feature/your-feature-name
     ```

4. **Write Code and Run Tests**
   - Follow BiteCal's code style guidelines while writing your code.
   - Ensure your changes don’t break any existing features by running tests.

5. **Submit a Pull Request (PR)**
   - After completing your work, commit your changes and push them to your fork:
     ```
     git add .
     git commit -m "Add: New feature added"
     git push origin feature/your-feature-name
     ```
   - Create a Pull Request (PR) on GitHub and request a review from the team.

Code Style
----------

- **Python**: Follow PEP8 guidelines. Use descriptive variable and function names.
- **JavaScript**: Use Prettier and ESLint to maintain consistent formatting.
- **HTML/CSS**: Follow the BEM naming convention and adhere to W3C standards.

Commit Message Guidelines
-------------------------

Use the following format for commit messages:

- `Add:` For adding new features.
- `Fix:` For bug fixes.
- `Update:` For modifying or improving existing features.
- `Docs:` For documentation updates.
- `Refactor:` For code refactoring.
- `Test:` For adding or modifying tests.

Running Tests
-------------

All changes should pass the existing tests. If you add new functionality, ensure it is accompanied by new tests. Run the tests with:


Documentation Contributions
---------------------------

BiteCal documentation is written using Sphinx. You can build the documentation locally with the following commands:
The output will be available in the `docs/_build/html` directory.

Additional Rules
----------------

- Always keep your working branch updated:
- Request a review before pushing major changes.
- Avoid committing unrelated files.

Contact
-------

If you have any questions or need assistance, feel free to reach out through the following channels:

- **GitHub Discussions**: [https://github.com/dlwldms7566/BiteCal/discussions](https://github.com/dlwldms7566/BiteCal/discussions)

