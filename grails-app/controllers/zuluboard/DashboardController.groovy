package zuluboard

import com.foozulu.domain.Activity
import com.foozulu.domain.ActivityType

class DashboardController {

    TaskService taskService

    def index() {
        List<Activity> activities = [
            new Activity(cardName: "Una tarjeta", user: "Iris", project: "Cosas que hacer", date: new Date(), type: ActivityType.CREATE_CARD),
            new Activity(cardName: "Buscar tipografía", user: "Iris", project: "Cosas que hacer", date: new Date(), type: ActivityType.CREATE_CARD),
            new Activity(cardName: "Merendar", user: "Jesús", project: "Cosas hechas", date: new Date(), type: ActivityType.CREATE_CARD),
            new Activity(cardName: "Merendar Más", user: "Jesús", project: "Cosas hechas", date: new Date(), type: ActivityType.CREATE_CARD),
            new Activity(cardName: "Buscar tipografía", user: "Iris", project: "Cosas que hacer", date: new Date(), type: ActivityType.CREATE_CARD),
            new Activity(cardName: "Merendar", user: "Jesús", project: "Cosas hechas", date: new Date(), type: ActivityType.CREATE_CARD)
        ]
        respond([activities: activities, tasks: taskService.nextTasks()])
    }
}
