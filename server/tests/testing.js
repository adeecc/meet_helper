router.post('/create/', async(req, res, next) => {
    try {
      let course, classroom;

      course = await findOrCreate(Course, {
        department: req.body.courseDept,
        code: req.body.courseCode,
      }, {
        name: req.body.courseName
      }, (err, docs) => {
        if (err)
          console.log(err);
        else {
          return docs;

        }
      });

      await findOrCreate(Classroom, {
        course: course,
        professor: req.body.professorName,
      }, {
        link: req.body.course_link
      }, (err, docs) => {
        if (err)
          console.log(err);

        else {
          classroom = docs;
        }
      });
      res.status(200).json(classroom);
    } catch (e) {
      error.log(e);
      res.status(500).json({});
    }
  }
)