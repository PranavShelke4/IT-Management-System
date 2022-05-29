const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

const uri = process.env.ATLAS_URI;

// Second Year class Teacher 
const ExercisesRouter = require("./routes/SecondYear/ExercisesRoutes");
const AchievementsRouter = require("./routes/SecondYear/AchievementsRoutes");
const StudymaterialsRouter = require("./routes/SecondYear/StudymaterialsRoutes");
const StudentlistsRouter = require("./routes/SecondYear/StudentlistsRoutes");
const DetentionlistsRouter = require("./routes/SecondYear/DetentionlistsRoutes");
const FeedbacklistsRouter = require('./routes/SecondYear/FeedbacklistsRoutes');

//Third Year Class Teacher
const TYExercisesRouter = require("./routes/ThirdYear/ExercisesRoutes");
const TYAchievementsRouter = require("./routes/ThirdYear/AchievementsRoutes");
const TYStudymaterialsRouter = require("./routes/ThirdYear/StudymaterialsRoutes");
const TYStudentlistsRouter = require("./routes/ThirdYear/StudentlistsRoutes");
const TYDetentionlistsRouter = require("./routes/ThirdYear/DetentionlistsRoutes");
const TYFeedbacklistsRouter = require('./routes/ThirdYear/FeedbacklistsRoutes');

//Sneha Raut Subject Teacher
const RautExercisesRouter = require("./routes/SnehaRaut/ExercisesRoutes");
const RautStudymaterialsRouter = require("./routes/SnehaRaut/StudymaterialsRoutes");

mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb database connection established successfully !!");
});


//Second Year Class Teacher
app.use("/exercises", ExercisesRouter);
app.use("/achievements", AchievementsRouter);
app.use("/studymaterials", StudymaterialsRouter);
app.use("/studentlists", StudentlistsRouter);
app.use("/detentionlists", DetentionlistsRouter);
app.use('/feedbacklists', FeedbacklistsRouter);

//Third Year Class Taecher
app.use("/TYexercises", TYExercisesRouter);
app.use("/TYachievements", TYAchievementsRouter);
app.use("/TYstudymaterials", TYStudymaterialsRouter);
app.use("/TYstudentlists", TYStudentlistsRouter);
app.use("/TYdetentionlists", TYDetentionlistsRouter);
app.use('/TYfeedbacklists', TYFeedbacklistsRouter);

//Third Year Class Taecher
app.use("/Rautexercises", RautExercisesRouter);
app.use("/Rautstudymaterials", RautStudymaterialsRouter);

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
