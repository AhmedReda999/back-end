const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/auth-app-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

async function createUser() {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('124578', salt);

  const user = new User({
    username: 'ahmedreda',  // Your username
    password: hashedPassword
  });

  await user.save();
  console.log('User created successfully!');
  mongoose.disconnect();
}

createUser();
