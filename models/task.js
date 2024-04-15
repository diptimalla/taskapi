const mongoose=require('mongoose');

const taskSchema = new  mongoose.Schema({
    task :String,
    taskno :Number,
    taskurgency :String ,
    taskcreatedby :String
});

const Task =mongoose.model('Task',taskSchema);
exports.Task=Task;