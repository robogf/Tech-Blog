const router = require('express').Router();
const withAuth = require('../../utils/utils');
const { Post } = require('../../models');


router.post('/',withAuth, async (req,res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/:id',withAuth, async (req,res) => {

});
