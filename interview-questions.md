# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: (modle . update) then insert the correct information

Researched answer:

2. Which RESTful routes must always be passed params? Why?

Your answer: RESTful routes provide mapping between HTTP verbs, controller actions, and CRUD operations in a database.

Researched answer:Calling the :create action to create a new article, passing in text for the title in params, as JSON request

3. Name three rails generator commands. What is created by each?

Your answer:rails db:migrate -pushes up information in schema, rails db:create- creates a database ,rails server- allows you to open the rails server.

Researched answer:rails db:migrate-In order to run your tests, your test database will need to have the current structure. The test helper checks whether your test database has any pending migrations. It will try to load your db/schema.rb or db/structure.sql into the test database. If migrations are still pending, an error will be raised. Usually this indicates that your schema is not fully migrated. Running the migrations against the development database (bin/rails db:migrate) will bring the schema up to date. Rails Server -The bin/rails server command launches a web server named Puma which comes bundled with Rails. You'll use this any time you want to access your application through a web browser. Rails db:create- When you create your Rails application for the first time, it will not have a database yet. In order for it to start, you will need to make sure the database is up and running.Just like it's recommended to use different gems for each environment, you should also create three databases, each for development, testing, and production environment. You can configure them in your config/database.yml file.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" route: /students

action: "POST" route: /students

action: "GET" route: /students/new

action: "GET" route: /students/2

action: "GET" route: /students/2/edit

action: "PATCH" route: /students/2

action: "DELETE" route: /students/2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
