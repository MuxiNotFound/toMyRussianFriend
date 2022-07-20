# Commentator

You need to develop a simple version of the commenting system

## Server

Should be able to save a new comment to the systems and return all created comments. To save comments, you can use structures that store information in-memory.

It is also necessary to implement the validation of the correct format of the comment model: the comment author and comment fields must not be empty, the comment author field is no more than 100 characters long, the comment field is no more than 1000 characters long. In case of unsuccessful validation, return 400 Bad Request.

 - The list of comments is received via the http-protocol by the **GET** method at url: /*allComments*, the received data is a list of pairs \{author, comment\}
 - A new comment is added via the http-protocol using the **POST** method at url: /*addComment*, data: \{author, comment\}

## Client

The client must implement:

 1. A form for viewing all comments, which will update the content asynchronously in real time (without reloading the page). You can implement a timer update (with timeout 1000ms), and redraw the component only if the list of received comments differs from the displayed one.
 2. The form for entering a new comment should contain:
    - field for entering username - *required field*, maximum field length **100 characters**
    - field for entering a comment - *required field*, the maximum length of the field is **1000 charactersa**
    - button - send, by clicking on which, it is necessary to validate the fields: username and comment, and in case of successful validation, send an asynchronous request to the server with a new comment. In case of unsuccessful validation, display a message.

If the server returned an error, you must log this message.

# Publish Results
 - In this repository, you need to develop in the development branch
 - After you decide that the task is ready, you need to create a merge request in the master branch. You need to add one of the course teachers to reviewers
 - Further communication, code review, testing will take place through this merge request
 - All corrections of comments should go through one merge request. **No need to create separate merge requests after each fix.**
 - After the merge request is approved and merged in the master, the task is considered completed

# Pipeline
After creating a merge request, a pipeline will appear in your branch consisting of 3 stages **build**, **tidy**, **test**.
 - **build** - checking the build of the project under different compilers clang++/g++
 - **tidy** - static analyzer and style guide compliance check
 - **test** - integration tests that check the performance of your project

In addition to pipeline stages, merge request will display tests and their execution results. For dropped tests, you can see the detailed reason for the falls. Detailed information about the gitlab pipeline can be found [here](https://docs.gitlab.com/ee/ci/pipelines/)
