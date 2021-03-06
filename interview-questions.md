# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: (model . update) then insert the correct information using db:migrate

Researched answer: I would generate migration.add_column, then add specific information going into the column. The foreign key identifies the larger group that the student belongs to.The foreign key belongs to the student model. The name of the foreign key is cohort_id:.

2. Which RESTful routes must always be passed params? Why?

Your answer:The show route is a get request. An exmaple in our book app would be to show a book and all information about that book. Another example is if you imagine IMDB, once you’ve clicked on a film you will see a lot of different information about a specific film, that would be that films show page.

Researched answer: delete update show, you need a pram(ID) to know the specific item to show update or delete.

3. Name three rails generator commands. What is created by each?

Your answer:rails db:migrate -pushes up information in schema, rails db:create- creates a database ,rails server- allows you to open the rails server.

Researched answer:rails db:migrate-In order to run your tests, your test database will need to have the current structure. The test helper checks whether your test database has any pending migrations. It will try to load your db/schema.rb or db/structure.sql into the test database. If migrations are still pending, an error will be raised. Usually this indicates that your schema is not fully migrated. Running the migrations against the development database (bin/rails db:migrate) will bring the schema up to date. Rails Server -The bin/rails server command launches a web server named Puma which comes bundled with Rails. You'll use this any time you want to access your application through a web browser. Rails db:create- When you create your Rails application for the first time, it will not have a database yet. In order for it to start, you will need to make sure the database is up and running.Just like it's recommended to use different gems for each environment, you should also create three databases, each for development, testing, and production environment. You can configure them in your config/database.yml file.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" route: /students  
GET will show the index- show all or -show one name at a time
action: "POST" route: /students
POST will create -adding new content
action: "GET" route: /students/new
GET will let you retrieve a new form or -edit form.
action: "GET" route: /students/2
GET will show the student 2 index- show all or -show one name at a time
action: "GET" route: /students/2/edit
GET will let you retrieve and edit student 2 form.
action: "PATCH" route: /students/2
PATCH will allow you to update student 2
action: "DELETE" route: /students/2
DELETE will remove content from student 2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1)  As a user I can create a unique profile ID.
2)  As a user I can create password to my profile.
3)  As a user I can connect with my friends and family.
4)  As a user I can create a new post.
5)  As a user I can delete a post.
6)  As a user I can edit a post.
7)  As a user I can securely login/logout.
8)  As a user I can share the post of another user.
9)  As a user I can edit the details of personal profile.
10) As a user I can interact with the post of other users.
