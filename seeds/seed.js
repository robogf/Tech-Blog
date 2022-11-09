const sequelize = require('../config/connection');
const {User, Post, Comments} = require ('../models');

const userData = require('./UserData.json'); 
const postData = require('./PostData.json');
const commentsData = require('./CommentContent.json')

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

seedDataBase();