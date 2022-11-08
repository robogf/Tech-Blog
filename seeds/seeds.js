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

    for(const post of postData) {
        await Post.create({
            ...post,
            user_id: user[Math.floor(Math.random() * user.length)].id 
        });
    for(const comments of commentsData) {
        await Comments.create({
            ...comments,
            user_id: user[Math.floor(Math.random() * user.length)].id
        });
    }
    }
    process.exit(0);
};

seedDataBase();