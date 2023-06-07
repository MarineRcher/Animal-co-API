const mongoose = require('mongoose');

const schema = mongoose.schema;

const postSchema = new schema(
    {
        title:{
            type: string,
            required: true
        },
        content:{
            type: string,
            required: true
        }
    }
)

module.exports = mongoose.model("Post", postSchema);