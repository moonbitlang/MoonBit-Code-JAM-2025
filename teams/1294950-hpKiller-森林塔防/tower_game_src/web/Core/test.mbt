// ///|
// struct Student {
//   name : String
//   id : String
//   score : Double
// }

// ///|
// fn Student::new(name : String, id : String, score : Double) -> Student {
//   { name, id, score }
// }

// ///|
// fn Student::to_string(self : Student) -> String {
//   "Student(name: \{self.name}, id: \{self.id}, score: \{self.score})"
// }

// ///|
// fn add_student(students : Array[Student], student : Student) -> Unit {
//   students.push(student)
// }

// ///|
// fn remove_student_by_id(students : Array[Student], id : String) -> Bool {
//   for i = 0; i < students.length(); i = i + 1 {
//     if students[i].id == id {
//       students.remove(i) |> ignore
//       return true
//     }
//   }
//   false
// }

// ///|
// fn update_student_score(
//   students : Array[Student],
//   id : String,
//   new_score : Double,
// ) -> Bool {
//   for i = 0; i < students.length(); i = i + 1 {
//     if students[i].id == id {
//       students[i] = {
//         name: students[i].name,
//         id: students[i].id,
//         score: new_score,
//       }
//       return true
//     }
//   }
//   false
// }

// ///|
// fn find_student_by_id(students : Array[Student], id : String) -> Student? {
//   for i = 0; i < students.length(); i = i + 1 {
//     if students[i].id == id {
//       return Some(students[i])
//     }
//   }
//   None
// }

// ///|
// fn find_students_by_name(
//   students : Array[Student],
//   name : String,
// ) -> Array[Student] {
//   let result = Array::new()
//   for i = 0; i < students.length(); i = i + 1 {
//     if students[i].name == name {
//       result.push(students[i])
//     }
//   }
//   result
// }

// ///|
// fn get_all_students(students : Array[Student]) -> Array[Student] {
//   let result = Array::new()
//   for i = 0; i < students.length(); i = i + 1 {
//     result.push(students[i])
//   }
//   result
// }

// ///|
// fn print_student(student : Student) -> Unit {
//   println(student.to_string())
// }

// ///|
// fn print_all_students(students : Array[Student]) -> Unit {
//   println("所有学生信息:")
//   for i = 0; i < students.length(); i = i + 1 {
//     println("\{i + 1}. \{students[i].to_string()}")
//   }
// }

// ///|
// test "s" {
//   // 创建学生数组
//   let students = Array::new()

//   // 增加学生 (Create)
//   add_student(students, Student::new("张三", "2023001", 85.5))
//   add_student(students, Student::new("李四", "2023002", 92.0))
//   add_student(students, Student::new("王五", "2023003", 78.5))
//   add_student(students, Student::new("张三", "2023004", 88.0)) // 同名不同ID
//   println("=== 添加学生后 ===")
//   print_all_students(students)

//   // 查询学生 (Read)
//   println("\n=== 查询学生 ===")
//   match find_student_by_id(students, "2023002") {
//     Some(student) => println("找到学生: \{student.to_string()}")
//     None => println("未找到ID为2023002的学生")
//   }
//   let zhang_sans = find_students_by_name(students, "张三")
//   println("名为'张三'的学生:")
//   for i = 0; i < zhang_sans.length(); i = i + 1 {
//     print_student(zhang_sans[i])
//   }

//   // 修改学生成绩 (Update)
//   println("\n=== 修改学生成绩 ===")
//   if update_student_score(students, "2023001", 90.0) {
//     println("成功更新学生2023001的成绩")
//   } else {
//     println("未找到学生2023001")
//   }
//   print_all_students(students)

//   // 删除学生 (Delete)
//   println("\n=== 删除学生 ===")
//   if remove_student_by_id(students, "2023003") {
//     println("成功删除学生2023003")
//   } else {
//     println("未找到学生2023003")
//   }
//   print_all_students(students)
//   println("\n=== 最终学生列表 ===")
//   print_all_students(students)
// }
