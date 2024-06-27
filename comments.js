// Create web server
// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

// Create web server
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Store comments
const commentsByPostId = {};

// Get comments by post id
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

// Create comment
app.post('/posts/:id/comments', async (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commentsByPostId[req.params.id] || [];
    comments.push({ id: commentId, content });

    commentsByPostId[req.params.id] = comments;

    await axios.post('http://localhost:4005/events', {
        type: 'CommentCreated',
        data: {
            id: commentId,
            content,
            postId: req.params.id,
        },
    });

    res.status(201).send(comments);
});

// Event handler
app.post('/events', (req, res) => {
    console.log('Received Event:', req.body.type);

    res.send({});
});

// Start server
app.listen(4001, () => {
    console.log('Listening on 4001');
});