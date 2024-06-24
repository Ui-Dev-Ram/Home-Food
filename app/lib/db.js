const {username, password} = process.env

export const connectionStr = "mongodb+srv://"+username+":"+password+"@cluster0.4hxybo1.mongodb.net/RamNext?retryWrites=true&w=majority&appName=Cluster0";

