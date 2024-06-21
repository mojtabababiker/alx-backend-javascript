import AppController from "../controllers/AppController";
import StudentsController from "../controllers/StudentsController";

export default function registerRoutes(app) {
  console.log("========== routes indexed==============");
  app.get('/',
    AppController.getHomepage
  );

  app.get('/students',
    StudentsController.getAllStudents
  );

  app.get('/students/:major',
    StudentsController.getAllStudentsByMajor
  );
}
