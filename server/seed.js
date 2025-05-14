import mongoose from "mongoose";
import dotenv from "dotenv";
import Student from "./models/Student.js";
import Faculty from "./models/Faculty.js";
import Admin from "./models/Admin.js";
import bcrypt from "bcrypt";

dotenv.config();

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = async () => {
  try {
    await Student.deleteMany({});
    await Faculty.deleteMany({});
    await Admin.deleteMany({});

    // Hash passwords
    const hashedStudentPass = await bcrypt.hash("student@123", 10);
    const hashedFacultyPass = await bcrypt.hash("faculty@123", 10);
    const hashedAdminPass = await bcrypt.hash("admin123", 10);

    // Insert Student
    await Student.create({
      username: "student1",
      password: hashedStudentPass,
      name: "Test Student",
      email: "student1@example.com",
      dob: "2003-08-15",
      section: "A",
      department: "Computer Science",
      year: 3 
    });

    // Insert Faculty
    await Faculty.create({
      username: "faculty1",
      password: hashedFacultyPass,
      name: "Test Faculty",
      email: "faculty1@example.com",
      dob: "1985-06-10",
      department: "Computer Science",
      designation: "Assistant Professor",
      joiningYear: 2015
    });

    // Insert Admin
    await Admin.create({
      username: "admin",
      password: hashedAdminPass,
      email: "admin@example.com"
    });

    console.log("✅ Seed data inserted successfully!");
  } catch (error) {
    console.error("❌ Error inserting seed data:", error.message);
  } finally {
    mongoose.disconnect();
  }
};

seedData();
