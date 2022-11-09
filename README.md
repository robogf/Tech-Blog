# Tech-Blog

# Deployed Link

This is a deployed link of our application.
![site](https://interesting-techblog.herokuapp.com/)

## Techonologies Used

Handlebars - We formatted our webpage for our frontend, through the use of our sql database
Heroku- this was our first use of heroku in order to deploy our website and not display our backend technology.

## Summary

Through this application you wil be able to create and view blog posts.

## Code Snippet

```JavaScript
const seedDataBase = async () => {
    await sequelize.sync({force: true});

    const user = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const post = await Post.bulkCreate(postData, {
        individualHooks: true,
        returning: true,
    });
    const comments = await Comments.bulkCreate(commentsData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};
```

## Author Links

[LinkedIn](https://www.linkedin.com/in/angel-matias-01120b251/)
[GitHub] (https://github.com/robogf)
