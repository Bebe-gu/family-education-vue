// sql语句
var sqlMap = {

    teachers: "SELECT * FROM teachers",
    teacherDetail: "SELECT * FROM teachers where id=?",
    categories: "select * from categories where parent_id=0",
    categories_primarySchool: "select * from categories where name like '小学%'",
    categories_middleSchool: "select * from categories where name like '初学%'",
    categories_highSchool: "select * from categories where name like '初学%'",
}

module.exports = sqlMap