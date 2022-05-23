const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const valEmail = function (a) {
	const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	return regex.test(a);
};

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
          trim: true,
      unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function(v) {
            return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
          },
          message: props => `${props.value} is not a valid email address.`
        },
        required: [true, 'User email address required']
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought'
        }
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
      ]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
  );
  
  UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce(
      (total, friend) => total + friend.replies.length + 1,
      0
    );
  });
  
  const User = model('User', UserSchema);
  
  module.exports = User;